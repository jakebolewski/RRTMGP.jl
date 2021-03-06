#=

####
#### Reads profiles needed for RRTMGP and related
#### calculations assuming a certain netCDF file layout
####

This file reads an example file containing atmospheric conditions (temperature, pressure, gas concentrations)
 and surface properties (emissivity, temperature), defined on `nlay` layers across a set of `ncol` columns subject to
 `nexp` perturbations, and returns them in data structures suitable for use in rte and rrtmpg. The input data
 are partitioned into a user-specified number of blocks.
For the moment only quantities relevant to longwave calculations are provided.

The example files comes from the Radiative Forcing MIP (https://www.earthsystemcog.org/projects/rfmip/)
 The protocol for this experiment allows for different specifications of which gases to consider:
all gases, (CO2, CH4, N2O) + {CFC11eq; CFC12eq + HFC-134eq}. Ozone is always included
The protocol does not specify the treatment of gases like CO

# Convention

Note that `ds` is used to denote an NC dataset.
=#

using RRTMGP.GasConcentrations
using RRTMGP.Utilities
using RRTMGP.Gases
using NCDatasets

"""
    read_atmos(ds, FT, I, gases_prescribed)

Read profiles for all columns
 - `p_lay` pressure (layers)
 - `t_lay` temperature (layers)
 - `p_lev` pressure (levels)
 - `t_lev` temperature (levels)
 - `col_dry` gas concentrations
"""
function read_atmos(ds, FT, I, gases_prescribed)

    ncol = ds.dim["col"]
    nlay = ds.dim["lay"]
    nlev = ds.dim["lev"]
    @assert nlev == nlay + 1

    p_lay = Array{FT}(ds["p_lay"][:])
    t_lay = Array{FT}(ds["t_lay"][:])
    p_lev = Array{FT}(ds["p_lev"][:])
    t_lev = Array{FT}(ds["t_lev"][:])

    gases_to_look_for = [
        h2o(),
        co2(),
        o3(),
        n2o(),
        co(),
        ch4(),
        o2(),
        n2(),
        ccl4(),
        cfc11(),
        cfc12(),
        cfc22(),
        hfc143a(),
        hfc125(),
        hfc23(),
        hfc32(),
        hfc134a(),
        cf4(),
        no2(),
    ]

    gases_in_database =
        filter(ug -> haskey(ds, "vmr_" * chem_name(ug)), gases_to_look_for)

    gas_concs =
        GasConcs(FT, I, gases_prescribed, ncol, nlay, length(gases_in_database))

    for eg in gases_in_database
        set_vmr!(gas_concs, eg, Array{FT}(ds["vmr_"*chem_name(eg)][:]))
    end

    # col_dry has unchanged allocation status on return if the variable isn't present in the netCDF file
    col_dry = haskey(ds, "col_dry") ? Array{FT}(ds["col_dry"][:]) : nothing

    return p_lay, t_lay, p_lev, t_lev, gas_concs, col_dry
end


"""
    is_sw(ds)

Does this file contain variables needed to do SW calculations?
"""
is_sw(ds) = haskey(ds, "solar_zenith_angle")

"""
    is_lw(ds)

Does this file contain variables needed to do LW calculations?
"""
is_lw(ds) = !is_sw(ds)

"""
    read_lw_bc(ds)

Read LW boundary conditions for all columns
"""
read_lw_bc(ds) = ds["t_sfc"][:], ds["emis_sfc"][:]

"""
    read_lw_rt(ds)

Read LW radiative transfer parameters
"""
read_lw_rt(ds) = length(size(ds["angle"]))

"""
    read_sw_bc(ds)

Read SW boundary conditions for all columns
"""
read_sw_bc(ds) = (
    ds["solar_zenith_angle"][:],
    ds["total_solar_irradiance"][:],
    ds["sfc_alb_direct"],
    ds["sfc_alb_diffuse"],
    haskey(ds, "tsi_scaling") ? ds["tsi_scaling"][:] : nothing,
)


"""
    read_spectral_disc!(ds, spectral_disc::AbstractOpticalProps)

Read spectral discretization
"""
function read_spectral_disc!(ds, spectral_disc::AbstractOpticalProps)
    @assert ds.dim["pair"] == 2
    band_lims_wvn = ds["band_lims_wvn"][:]
    band_lims_gpt = ds["band_lims_gpt"][:]
    spectral_disc.base =
        OpticalPropsBase("read_spectral_disc!", band_lims_wvn, band_lims_gpt)
end

"""
    read_sfc_test_file(ds)

Read surface SW albedo and LW emissivity spectra from the surface test file
"""
read_sfc_test_file(ds) = (ds["SW_albedo"][:], ds["LW_emissivity"][:])

"""
    read_direction(ds)

Which direction is up? Stored as a global attribute.
"""
read_direction(ds) = (ds.attrib["top_at_1"] == 1)

"""
    read_sources(ds)

Sources of upward and downward diffuse radiation, for each layer and at the surface
"""
read_sources(ds) = ds["source_up"][:], ds["source_dn"][:], ds["source_sfc"][:]

"""
    read_lw_Planck_sources!(ds, sources::SourceFuncLongWave{FT}) where FT

Longwave sources at layer centers; edges in two directions; surface
   Also directionality since this will be needed for solution
"""
function read_lw_Planck_sources!(ds, sources::SourceFuncLongWave{FT}) where {FT}
    ncol = ds.dim["col"]
    nlay = ds.dim["lay"]
    ngpt = ds.dim["gpt"]
    nband = ds.dim["band"]
    # Error checking
    @assert ds.dim["pair"] == 2
    @assert haskey(ds, "lay_src")

    # Spectral discretization
    band_lims_wvn = ds["band_lims_wvn"][:]
    band_lims_gpt = ds["band_lims_gpt"][:]

    sources.optical_props =
        OpticalPropsBase("SourceFuncLongWave", band_lims_wvn, band_lims_gpt)
    sources.τ .= Array{FT}(undef, ncol, nlay)

    sources.lay_source .= ds["lay_src"][:]
    sources.lev_source_inc .= ds["lev_src_inc"][:]
    sources.lev_source_dec .= ds["lev_src_dec"][:]
    sources.sfc_source .= ds["sfc_src"][:]
    return nothing

end

"""
    read_sw_solar_sources(ds)

Shortwave source at TOA
   Also directionality since this will be needed for solution
"""
read_sw_solar_sources(ds) = ds["toa_src"][:]

"""
    read_two_stream(ds)

Two-stream results: reflection and transmission for diffuse and direct radiation; also extinction
"""
function read_two_stream(ds)
    Rdif = ds["Rdif"][:]
    Tdif = ds["Tdif"][:]
    Rdir = haskey(ds, "Rdir") ? ds["Rdir"][:] : nothing
    Tdir = haskey(ds, "Tdir") ? ds["Tdir"][:] : nothing
    Tnoscat = haskey(ds, "Tnoscat") ? ds["Tnoscat"][:] : nothing
    return Rdif, Tdif, Rdir, Tdir, Tnoscat
end

"""
    read_gpt_fluxes(ds)

g-point fluxes
"""
read_gpt_fluxes(ds) = (
    ds["gpt_flux_up"][:],
    ds["gpt_flux_dn"][:],
    haskey(ds, "gpt_flux_dn_dir") ? ds["gpt_flux_dn_dir"][:] : nothing,
)

"""
    read_size(ds)

Find the size of the problem: columns, layers, perturbations (experiments)
"""
function read_size(ds)
    ncol = Int(ds.dim["site"])
    nlay = Int(ds.dim["layer"])
    nexp = Int(ds.dim["expt"])
    @assert ds.dim["level"] == nlay + 1
    return ncol, nlay, nexp
end

"""
    read_and_block_pt(ds)

Return layer and level

 - `p_lay` layer pressure dimensions (ncol, nlay, nblocks)
 - `p_lev` level pressure dimensions (ncol, nlay+1, nblocks)
 - `t_lay` layer temperature dimensions (ncol, nlay, nblocks)
 - `t_lev` level temperature dimensions (ncol, nlay+1, nblocks)
"""
function read_and_block_pt(ds)
    FT = Float64
    ncol_l, nlay_l, nexp_l = read_size(ds)
    @assert !any([ncol_l, nlay_l, nexp_l] .== 0)

    # Read p, T data; reshape to suit RRTMGP dimensions
    p_lay = transpose(kron(ones(1, nexp_l), Array{FT}(ds["pres_layer"][:])))
    p_lev = transpose(kron(ones(1, nexp_l), Array{FT}(ds["pres_level"][:])))
    t_lay = transpose(reshape(
        Array{FT}(ds["temp_layer"][:]),
        nlay_l,
        ncol_l * nexp_l,
    ))
    t_lev = transpose(reshape(
        Array{FT}(ds["temp_level"][:]),
        nlay_l + 1,
        ncol_l * nexp_l,
    ))

    return p_lay, p_lev, t_lay, t_lev
end

"""
    read_and_block_sw_bc(ds, blocksize)

Read and reshape shortwave boundary conditions

 - `surface_albedo` surface albedo
 - `total_solar_irradiance` total solar irradiance
 - `solar_zenith_angle` solar zenith angle
"""
function read_and_block_sw_bc(ds)
    FT = Float64
    ncol_l, nlay_l, nexp_l = read_size(ds)
    blocksize = ncol_l * nexp_l
    @assert !any([ncol_l, nlay_l, nexp_l] .== 0)

    # Check that output arrays are sized correctly : blocksize, nlay, (ncol * nexp)/blocksize
    surface_albedo = repeat(Array{FT}(ds["surface_albedo"][:]), nexp_l)
    total_solar_irradiance =
        repeat(Array{FT}(ds["total_solar_irradiance"][:]), nexp_l)
    solar_zenith_angle = repeat(Array{FT}(ds["solar_zenith_angle"][:]), nexp_l)
    return surface_albedo, total_solar_irradiance, solar_zenith_angle
end

"""
    read_and_block_lw_bc(ds, blocksize)

Read and reshape longwave boundary conditions

 - `surface_emissivity` surface emissivity
 - `surface_temperature` surface temperature
"""
function read_and_block_lw_bc(ds)
    FT = Float64
    ncol_l, nlay_l, nexp_l = read_size(ds)
    ncols = ncol_l * nexp_l
    @assert !any([ncol_l, nlay_l, nexp_l] .== 0)

    surface_emissivity = Array{FT}(reshape(
        repeat(ds["surface_emissivity"][:], 1, nexp_l),
        ncols,
    ))
    surface_temperature =
        Array{FT}(reshape(ds["surface_temperature"][:], ncols)) # alternate version

    return surface_emissivity, surface_temperature
end

"""
    determine_gas_names(ds, forcing_index)

Create a pair of string arrays - one containing the chemical name of each gas, used by the k-distribution, and
one containing the name as contained in the RFMIP input files - depending on the forcing scenario:

 - `forcing_index` (1 = all available greenhouse gases;
                    2 = CO2, CH4, N2O, CFC11eq
                    3 = CO2, CH4, N2O, CFC12eq, HFC-134eq
                    All scenarios use 3D values of ozone, water vapor so those aren't listed here
"""
function determine_gas_names(ds, forcing_index)

    @assert any(forcing_index .== [1, 2, 3])
    if forcing_index == 1
        names_in_kdist = convert.(AbstractGas, read_kdist_gas_names(ds))

        # elseif forcing_index == 2

        #   # Not part of the RFMIP specification, but oxygen is included because it's a major
        #   #    gas in some bands in the SW
        #   names_in_kdist = [co2(), ch4(), n2o(), o2(), cfc12(), cfc11()]
        # elseif forcing_index == 3

        #   # Not part of the RFMIP specification, but oxygen is included because it's a major
        #   #    gas in some bands in the SW
        #   names_in_kdist = [co2(), ch4(), n2o(), o2(), cfc12(), hfc134a()]
    end
    return names_in_kdist

end

"""
    read_kdist_gas_names(ds)

Read the names of the gases known to the k-distribution
"""
read_kdist_gas_names(ds) =
    lowercase.(strip.(String[
        join(ds["gas_names"][:][:, i]) for i = 1:ds.dim["absorber"]
    ]))

"""
    read_and_block_gases_ty(ds, gas_names)

Read and reshape gas concentrations. RRTMGP requires gas concentrations to be supplied via a class
(GasConcs). Gas concentrations are set via a call to set_vmr!(gas_concs, name, values)
where `name` is nominally the chemical formula for the gas in question and `values` may be
a scalar, a 1-d profile assumed to apply to all columns, or an array of dimension (`ncol`, `nlay`).

This routine outputs a vector `nblocks` long of these types so each element of the array can be passed to
the rrtmgp gas optics calculation in turn.

This routine exploits RFMIP conventions: only water vapor and ozone vary by column within
each experiment.

Fields in the RFMIP file have a trailing _GM (global mean); some fields use a chemical formula and other
a descriptive name, so a map is provided between these.

 - `gas_names` Names used by the k-distribution/gas concentration type
 - `gas_conc_array` vector of [`GasConcs`](@ref)
"""
function read_and_block_gases_ty(ds, gas_names::Vector{AbstractGas})
    ncol_l, nlay_l, nexp_l = read_size(ds)
    ncols = ncol_l * nexp_l
    @assert !any([ncol_l, nlay_l, nexp_l] .== 0)
    FT = Float64
    I = Int
    gas_conc_array = GasConcs(FT, I, gas_names, ncols, nlay_l)

    # Experiment index for each column
    exp_num = repeat(collect(1:nexp_l)', ncol_l, 1)[:]
    # Water vapor and ozone depend on col, lay, exp: look just like other fields
    for gas in (h2o(), o3())
        gas_conc = Array{FT}(ds[rfmip_name(gas)][:])
        gas_conc_scaling = read_scaling(ds, FT, rfmip_name(gas))
        gas_conc_temp_3d = reshape(gas_conc, nlay_l, ncols) .* gas_conc_scaling
        gas_conc_temp_3d_t = convert(Array, transpose(gas_conc_temp_3d))
        set_vmr!(gas_conc_array, gas, gas_conc_temp_3d_t)
    end

    # All other gases are a function of experiment only
    for gas in gas_names

        # Skip 3D fields above, also NO2 since RFMIP doesn't have this
        if gas in [h2o(), o3(), no2()]
            continue
        end

        # Read the values as a function of experiment
        gas_conc_scaling = read_scaling(ds, FT, rfmip_name(gas) * "_GM")
        gas_conc_temp_1d = ds[rfmip_name(gas)*"_GM"][:] * gas_conc_scaling

        # Does every value in this block belong to the same experiment?
        if all(exp_num[2:end] .- exp_num[1] .== 0)
            # Provide a scalar value
            set_vmr!(gas_conc_array, gas, gas_conc_temp_1d[exp_num[1]])
        else
            # Create 2D field, ncols x nlay, with scalar values from each experiment
            set_vmr!(
                gas_conc_array,
                gas,
                repeat(gas_conc_temp_1d[exp_num[:]], 1, nlay_l),
            )
        end
    end
    return gas_conc_array
end

read_scaling(ds, FT, varName) = parse(FT, ds[varName].attrib["units"])
