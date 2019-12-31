var documenterSearchIndex = {"docs":
[{"location":"MathFormulation.html#Mathematical-Formulation-1","page":"Mathematical Formulation","title":"Mathematical Formulation","text":"","category":"section"},{"location":"RRTMGP/GasConcs.html#Gas-Concentrations-1","page":"Gas Concentrations","title":"Gas Concentrations","text":"","category":"section"},{"location":"RRTMGP/GasConcs.html#","page":"Gas Concentrations","title":"Gas Concentrations","text":"CurrentModule = RRTMGP.GasConcentrations","category":"page"},{"location":"RRTMGP/GasConcs.html#","page":"Gas Concentrations","title":"Gas Concentrations","text":"GasConcs\nGasConcsPGP","category":"page"},{"location":"RRTMGP/GasConcs.html#RRTMGP.GasConcentrations.GasConcs","page":"Gas Concentrations","title":"RRTMGP.GasConcentrations.GasConcs","text":"GasConcs{FT}\n\nEncapsulates a collection of volume mixing ratios (concentrations) of gases.  Each concentration is associated with a name, normally the chemical formula.\n\nFields\n\ngas_names\nGas names\nconcs\nGas concentrations arrays\nncol\nNumber of columns\nnlay\nNumber of layers\n\n\n\n\n\n","category":"type"},{"location":"RRTMGP/GasConcs.html#RRTMGP.GasConcentrations.GasConcsPGP","page":"Gas Concentrations","title":"RRTMGP.GasConcentrations.GasConcsPGP","text":"GasConcsPGP{FT}\n\nEncapsulates a collection of volume mixing ratios (concentrations) of gases per grid point. Each concentration is associated with a name, normally the chemical formula.\n\nFields\n\ngas_names\nGas names\nconcs\nGas concentrations arrays\n\n\n\n\n\n","category":"type"},{"location":"RRTMGP/GasConcs.html#","page":"Gas Concentrations","title":"Gas Concentrations","text":"set_vmr!","category":"page"},{"location":"RRTMGP/GasConcs.html#RRTMGP.GasConcentrations.set_vmr!","page":"Gas Concentrations","title":"RRTMGP.GasConcentrations.set_vmr!","text":"set_vmr!(this::GasConcs{FT}, gas::AbstractGas, w) where FT\n\nSet volume mixing ratio (vmr)\n\n\n\n\n\n","category":"function"},{"location":"RRTMGP/AtmosphericStates.html#Atmospheric-State-1","page":"Atmospheric States","title":"Atmospheric State","text":"","category":"section"},{"location":"RRTMGP/AtmosphericStates.html#","page":"Atmospheric States","title":"Atmospheric States","text":"CurrentModule = RRTMGP.AtmosphericStates","category":"page"},{"location":"RRTMGP/AtmosphericStates.html#","page":"Atmospheric States","title":"Atmospheric States","text":"AtmosphericState\nAtmosphericStatePGP","category":"page"},{"location":"RRTMGP/AtmosphericStates.html#RRTMGP.AtmosphericStates.AtmosphericState","page":"Atmospheric States","title":"RRTMGP.AtmosphericStates.AtmosphericState","text":"AtmosphericState{FT}\n\nas = AtmosphericState(gasconc, play, plev, tlay, t_lev)\n\nFields\n\ngas_conc\nGas concentrations, in the form of volume mixing ratios\np_lay\nlayer pressures [Pa, mb]; (ncol,nlay)\np_lev\nlevel pressures [Pa, mb]; (ncol,nlay+1)\nt_lay\nlayer temperatures [K]; (ncol,nlay)\nt_lev\nlevel temperatures [K]; (ncol,nlay+1)\nt_sfc\nsurface temperatures [K]; (ncol)\ncol_gas\ncolumn amounts for each gas, plus col_dry. gas amounts [molec/cm^2]\ncol_dry\nNumber of molecules per cm-2 of dry air\ntropo\ntroposphere mask: itropo = merge(1,2,tropo[icol,ilay]); itropo = 1 lower atmosphere; itropo = 2 upper atmosphere\ntropo_lims\nLayer limits of upper, lower atmospheres\ngt_0_tropo_lims\nAny tropospheric limits greater than 0\nmesh_orientation\nMesh orientation, see MeshOrientation\nnlay\nNumber of layers.\nncol\nNumber of columns.\n\n\n\n\n\n","category":"type"},{"location":"RRTMGP/AtmosphericStates.html#RRTMGP.AtmosphericStates.AtmosphericStatePGP","page":"Atmospheric States","title":"RRTMGP.AtmosphericStates.AtmosphericStatePGP","text":"AtmosphericStatePGP{FT}\n\nas = AtmosphericStatePGP(gasconc, play, plev, tlay, t_lev)\n\nFields\n\ngas_conc\nGas concentrations, in the form of volume mixing ratios\np_lay\nlayer pressures [Pa, mb]\np_lev\nlevel pressures [Pa, mb]\nt_lay\nlayer temperatures [K]\nt_lev\nlevel temperatures [K]\nt_sfc\nsurface temperatures [K]\ncol_gas\ncolumn amounts for each gas, plus col_dry. gas amounts [molec/cm^2]\ncol_dry\nNumber of molecules per cm-2 of dry air\ntropo\ntroposphere mask: itropo = merge(1,2,tropo); itropo = 1 lower atmosphere; itropo = 2 upper atmosphere\ntropo_lims\nLayer limits of upper, lower atmospheres\ngt_0_tropo_lims\nAny tropospheric limits greater than 0\nmesh_orientation\nMesh orientation, see MeshOrientation\nilay\ni-th layer.\n\n\n\n\n\n","category":"type"},{"location":"RRTMGP/AtmosphericStates.html#","page":"Atmospheric States","title":"Atmospheric States","text":"get_col_dry\nextrap_lower\nextrap_upper\ninterpolate_var","category":"page"},{"location":"RRTMGP/AtmosphericStates.html#RRTMGP.AtmosphericStates.get_col_dry","page":"Atmospheric States","title":"RRTMGP.AtmosphericStates.get_col_dry","text":"get_col_dry(vmr_h2o, plev, tlay, latitude=nothing)\n\nUtility function, provided for user convenience computes column amounts of dry air using hydrostatic equation\n\ninput\n\nvmr_h2o volume mixing ratio of water vapor to dry air; (ncol,nlay)\nplev Layer boundary pressures Pa\ntlay Layer temperatures K\nlatitude Latitude degrees\n\n\n\n\n\n","category":"function"},{"location":"RRTMGP/AtmosphericStates.html#RRTMGP.AtmosphericStates.extrap_lower","page":"Atmospheric States","title":"RRTMGP.AtmosphericStates.extrap_lower","text":"extrap_lower(p_lay::Array{FT},\n             p_lev::FT,\n             ϕ_lay::Array{FT})\n\nExtrapolate lower boundary (weighted by pressure)\n\n\n\n\n\n","category":"function"},{"location":"RRTMGP/AtmosphericStates.html#RRTMGP.AtmosphericStates.extrap_upper","page":"Atmospheric States","title":"RRTMGP.AtmosphericStates.extrap_upper","text":"extrap_upper(p_lay::Array{FT},\n             p_lev::FT,\n             ϕ_lay::Array{FT}) where {FT<:AbstractFloat,I<:Int}\n\nExtrapolate upper boundary (weighted by pressure)\n\n\n\n\n\n","category":"function"},{"location":"RRTMGP/AtmosphericStates.html#RRTMGP.AtmosphericStates.interpolate_var","page":"Atmospheric States","title":"RRTMGP.AtmosphericStates.interpolate_var","text":"interpolate_var(p_lay::Array{FT},\n                p_lev::FT,\n                ϕ_lay::Array{FT}) where {FT<:AbstractFloat,I<:Int}\n\nInterpolate variable ϕ (weighted by pressure)\n\n\n\n\n\n","category":"function"},{"location":"RTE/Fluxes.html#Fluxes-1","page":"Fluxes","title":"Fluxes","text":"","category":"section"},{"location":"RTE/Fluxes.html#","page":"Fluxes","title":"Fluxes","text":"CurrentModule = RRTMGP.Fluxes","category":"page"},{"location":"RTE/Fluxes.html#","page":"Fluxes","title":"Fluxes","text":"FluxesBroadBand\nFluxesByBand","category":"page"},{"location":"RTE/Fluxes.html#RRTMGP.Fluxes.FluxesBroadBand","page":"Fluxes","title":"RRTMGP.Fluxes.FluxesBroadBand","text":"FluxesBroadBand{FT} <: AbstractFluxes{FT}\n\nContains upward, downward, net, and direct downward fluxes\n\nFields\n\nflux_up\nupward flux\nflux_dn\ndownward flux\nflux_net\nnet flux\nflux_dn_dir\ndownward direct flux\n\n\n\n\n\n","category":"type"},{"location":"RTE/Fluxes.html#RRTMGP.Fluxes.FluxesByBand","page":"Fluxes","title":"RRTMGP.Fluxes.FluxesByBand","text":"FluxesByBand{FT} <: AbstractFluxes{FT}\n\nContains both broadband and by-band fluxes\n\nFields\n\nfluxes_broadband\nbnd_flux_up\nupward flux\nbnd_flux_dn\ndownward flux\nbnd_flux_net\nnet flux\nbnd_flux_dn_dir\ndownward direct flux\n\n\n\n\n\n","category":"type"},{"location":"RTE/Fluxes.html#","page":"Fluxes","title":"Fluxes","text":"reduce!","category":"page"},{"location":"RTE/Fluxes.html#RRTMGP.Fluxes.reduce!","page":"Fluxes","title":"RRTMGP.Fluxes.reduce!","text":"reduce!(this::FluxesBroadBand{FT},\n        gpt_flux_up::Array{FT,3},\n        gpt_flux_dn::Array{FT,3},\n        spectral_disc::AbstractOpticalProps{FT},\n        gpt_flux_dn_dir::Union{Nothing,Array{FT,3}}=nothing) where FT<:AbstractFloat\n\nCompute FluxesBroadBand this by summing over the spectral dimension, given\n\ngpt_flux_up upward fluxes by gpoint [W/m2]\ngpt_flux_dn downward fluxes by gpoint [W/m2]\nspectral_disc optical properties containing spectral information\n\noptional:\n\ngpt_flux_dn_dir downward direct flux\n\n\n\n\n\nreduce!(this::FluxesByBand{FT},\n        gpt_flux_up::Array{FT,3},\n        gpt_flux_dn::Array{FT,3},\n        spectral_disc::AbstractOpticalProps{FT},\n        gpt_flux_dn_dir::Union{Nothing,Array{FT,3}}=nothing)\n\nReduces fluxes by-band to broadband in FluxesByBand this, given\n\ngpt_flux_up fluxes by gpoint [W/m2]\ngpt_flux_dn fluxes by gpoint [W/m2]\nspectral_disc spectral discretization, see AbstractOpticalProps\n\nand, optionally,\n\ngpt_flux_dn_dir direct flux downward\n\n\n\n\n\n","category":"function"},{"location":"RRTMGP/PhysicalConstants.html#Physical-Constants-1","page":"Physical constants","title":"Physical Constants","text":"","category":"section"},{"location":"RRTMGP/PhysicalConstants.html#","page":"Physical constants","title":"Physical constants","text":"CurrentModule = RRTMGP.PhysicalConstants","category":"page"},{"location":"RRTMGP/PhysicalConstants.html#","page":"Physical constants","title":"Physical constants","text":"k_boltz\nm_h2o\navogad\nR_univ_gconst\nm_dry\ngrav\ncp_dry","category":"page"},{"location":"RRTMGP/PhysicalConstants.html#RRTMGP.PhysicalConstants.k_boltz","page":"Physical constants","title":"RRTMGP.PhysicalConstants.k_boltz","text":"k_boltz(::Type{FT})\n\nPhysical constants, 2018 SI defintion of metric system   doi:10.1088/1681-7575/aa950a (see also https://www.nist.gov/si-redefinition/meet-constants) Boltzmann constant [J/K] = [(kg m^2)/(K s^2)]\n\n\n\n\n\n","category":"function"},{"location":"RRTMGP/PhysicalConstants.html#RRTMGP.PhysicalConstants.m_h2o","page":"Physical constants","title":"RRTMGP.PhysicalConstants.m_h2o","text":"m_h2o(::Type{FT})\n\nmolecular weight of water [kg/mol]\n\n\n\n\n\n","category":"function"},{"location":"RRTMGP/PhysicalConstants.html#RRTMGP.PhysicalConstants.avogad","page":"Physical constants","title":"RRTMGP.PhysicalConstants.avogad","text":"avogad(::Type{FT})\n\nAvogadro's number [molec/mol]\n\n\n\n\n\n","category":"function"},{"location":"RRTMGP/PhysicalConstants.html#RRTMGP.PhysicalConstants.R_univ_gconst","page":"Physical constants","title":"RRTMGP.PhysicalConstants.R_univ_gconst","text":"R_univ_gconst(::Type{FT})\n\nUniversal gas constant [J/(mol K)]\n\n\n\n\n\n","category":"function"},{"location":"RRTMGP/PhysicalConstants.html#RRTMGP.PhysicalConstants.m_dry","page":"Physical constants","title":"RRTMGP.PhysicalConstants.m_dry","text":"m_dry(::Type{FT})\n\nmolecular weight of dry air [kg/mol]\n\n\n\n\n\n","category":"function"},{"location":"RRTMGP/PhysicalConstants.html#RRTMGP.PhysicalConstants.grav","page":"Physical constants","title":"RRTMGP.PhysicalConstants.grav","text":"grav(::Type{FT})\n\nGravity at Earth's surface [m/s2]\n\n\n\n\n\n","category":"function"},{"location":"RRTMGP/PhysicalConstants.html#RRTMGP.PhysicalConstants.cp_dry","page":"Physical constants","title":"RRTMGP.PhysicalConstants.cp_dry","text":"cp_dry(::Type{FT})\n\nSpecific heat at constant pressure for dry air [J/(K kg)]\n\n\n\n\n\n","category":"function"},{"location":"RRTMGP/GasOptics.html#Gas-Optics-1","page":"Gas Optics","title":"Gas Optics","text":"","category":"section"},{"location":"RRTMGP/GasOptics.html#","page":"Gas Optics","title":"Gas Optics","text":"CurrentModule = RRTMGP.GasOptics","category":"page"},{"location":"RRTMGP/GasOptics.html#","page":"Gas Optics","title":"Gas Optics","text":"GasOpticsAux\nGasOpticsVars\nAbstractGasOptics\nKDistributionLongwave\nKDistributionShortwave\nInterpolationCoefficients\nInterpolationCoefficientsPGP","category":"page"},{"location":"RRTMGP/GasOptics.html#RRTMGP.GasOptics.GasOpticsAux","page":"Gas Optics","title":"RRTMGP.GasOptics.GasOpticsAux","text":"GasOpticsAux{I}\n\nAuxiliary indexes for variables in the upper and lower levels of the atmosphere.\n\nFields\n\nidx_minor\nIndexes for determining col_gas\nidx_minor_scaling\nIndexes that have special treatment in density scaling\n\n\n\n\n\n","category":"type"},{"location":"RRTMGP/GasOptics.html#RRTMGP.GasOptics.GasOpticsVars","page":"Gas Optics","title":"RRTMGP.GasOptics.GasOpticsVars","text":"GasOpticsVars{FT,I}\n\nVariables defined at\n\nupper  (log(p) < ref.presstroplog)\nlower  (log(p) > ref.presstroplog)\n\nlevels of the atmosphere for both full and reduced sets of gases.\n\nFields\n\nminor_limits_gpt\nMinor g-point limits\nminor_scales_with_density\nMinor scales with density\nscale_by_complement\nScale by complement\nkminor_start\nStart index for minor gas absorption coefficient\nkminor\nAbsorption coefficient of minor species (n_minor,η,temperature)\nscaling_gas\nScaling gas\nminor_gases\nMinor gases\n\n\n\n\n\n","category":"type"},{"location":"RRTMGP/GasOptics.html#RRTMGP.GasOptics.AbstractGasOptics","page":"Gas Optics","title":"RRTMGP.GasOptics.AbstractGasOptics","text":"AbstractGasOptics{FT,I} <: AbstractOpticalProps{FT,I}\n\nAbstract gas optics, for long and short wave gas optics dispatch.\n\n\n\n\n\n","category":"type"},{"location":"RRTMGP/GasOptics.html#RRTMGP.GasOptics.KDistributionLongwave","page":"Gas Optics","title":"RRTMGP.GasOptics.KDistributionLongwave","text":"KDistributionLongwave{FT,I} <: AbstractGasOptics{FT,I}\n\nGas optics with internal sources (for longwave radiation)\n\nFields\n\nref\nReference state data\noptical_props\nBase optical properties\nlower\nGas optics variables in the lower atmosphere, see GasOpticsVars\nupper\nGas optics variables in the upper atmosphere, see GasOpticsVars\nlower_aux\nAuxiliary variables (index maps) in the lower atmosphere, see GasOpticsAux\nupper_aux\nAuxiliary variables (index maps) in the upper atmosphere, see GasOpticsAux\ngas_names\nPresent gas names\nkmajor\nAbsorption coefficient for major species (g-point,η,pressure,temperature)\nflavor\nMajor species pair; [2, nflav]\ngpoint_flavor\nFlavor per g-point: lower.flavor = gpoint_flavor[1, 1:ngpt], upper.flavor = gpoint_flavor[2, 1:ngpt]\nis_key\nIndicates whether a key species is in any band\nplanck_frac\nStored fraction of Planck irradiance in band for given g-point\ntotplnk\nIntegrated Planck irradiance by band; [Planck temperatures,band]\ntotplnk_delta\nTemperature steps in totplnk\nkrayl\nAbsorption coefficient for Rayleigh scattering [g-point,η,temperature,upper/lower atmosphere]\n\n\n\n\n\n","category":"type"},{"location":"RRTMGP/GasOptics.html#RRTMGP.GasOptics.KDistributionShortwave","page":"Gas Optics","title":"RRTMGP.GasOptics.KDistributionShortwave","text":"KDistributionShortwave{FT,I} <: AbstractGasOptics{FT,I}\n\nGas optics with external sources (for shortwave radiation)\n\nFields\n\nref\nReference state data\noptical_props\nBase optical properties\nlower\nGas optics variables in the lower atmosphere, see GasOpticsVars\nupper\nGas optics variables in the upper atmosphere, see GasOpticsVars\nlower_aux\nAuxiliary variables (index maps) in the lower atmosphere, see GasOpticsAux\nupper_aux\nAuxiliary variables (index maps) in the upper atmosphere, see GasOpticsAux\ngas_names\nPresent gas names\nkmajor\nAbsorption coefficient for major species (g-point,η,pressure,temperature)\nflavor\nMajor species pair; [2, nflav]\ngpoint_flavor\nFlavor per g-point: lower.flavor = gpointflavor[1, g-point], upper.flavor = gpointflavor[2, g-point]\nis_key\nIndicates whether a key species is in any band\nsolar_src\nIncoming solar irradiance (g-point)\nkrayl\nAbsorption coefficient for Rayleigh scattering (g-point,η,temperature,upper/lower atmosphere)\n\n\n\n\n\n","category":"type"},{"location":"RRTMGP/GasOptics.html#RRTMGP.GasOptics.InterpolationCoefficients","page":"Gas Optics","title":"RRTMGP.GasOptics.InterpolationCoefficients","text":"InterpolationCoefficients{FT,I}\n\nInterpolation coefficients\n\nFields\n\njtemp\nindex for temperature\njpress\nindex for pressure\nj_η\nindex for binary species parameter (η)\nfmajor\nfractions for major species\nfminor\nfractions for minor species. [reference η level (temperature dependent), reference temperature level, flavor, layer]\ncol_mix\ncombination of major specie's column amounts\n\n\n\n\n\n","category":"type"},{"location":"RRTMGP/GasOptics.html#RRTMGP.GasOptics.InterpolationCoefficientsPGP","page":"Gas Optics","title":"RRTMGP.GasOptics.InterpolationCoefficientsPGP","text":"InterpolationCoefficientsPGP{FT,I}\n\nInterpolation coefficients per grid point\n\nFields\n\njtemp\nindex for temperature\njpress\nindex for pressure\nj_η\nindex for binary species parameter (η)\nfmajor\nfractions for major species\nfminor\nfractions for minor species. [reference η level (temperature dependent), reference temperature level, flavor, layer]\ncol_mix\ncombination of major specie's column amounts\n\n\n\n\n\n","category":"type"},{"location":"RRTMGP/GasOptics.html#","page":"Gas Optics","title":"Gas Optics","text":"gas_optics!\nget_k_dist_lw\nget_k_dist_sw","category":"page"},{"location":"RRTMGP/GasOptics.html#RRTMGP.GasOptics.gas_optics!","page":"Gas Optics","title":"RRTMGP.GasOptics.gas_optics!","text":"gas_optics!(this::KDistributionLongwave{FT,I},\n            as::AtmosphericState{FT,I},\n            optical_props::AbstractOpticalPropsArry{FT,I},\n            sources::SourceFuncLongWave{FT,I}) where {FT<:AbstractFloat,I<:Int}\n\nCompute gas optical depth and Planck source functions given:\n\nthis gas optics, see KDistributionLongwave\nas atmospheric state, see AtmosphericState\noptical_props optical properties, see AbstractOpticalPropsArry\nsources longwave sources, see SourceFuncLongWave\n\n\n\n\n\ngas_optics!(this::KDistributionShortwave{FT,I},\n            as::AtmosphericState{FT,I},\n            optical_props::AbstractOpticalPropsArry{FT,I},\n            last_call=false) where {FT<:AbstractFloat,I<:Int}\n\nCompute gas optical depth given:\n\nthis gas optics, see KDistributionShortwave\nas atmospheric state, see AtmosphericState\noptical_props optical properties, see AbstractOpticalPropsArry\n\n\n\n\n\n","category":"function"},{"location":"RRTMGP/GasOptics.html#RRTMGP.GasOptics.get_k_dist_lw","page":"Gas Optics","title":"RRTMGP.GasOptics.get_k_dist_lw","text":"get_k_dist_lw(totplnk,\n              planck_frac,\n              rayl_lower,\n              rayl_upper,\n              ref::ReferenceState{FT},\n              args...) where {FT<:AbstractFloat}\n\nInitialize object based on data read from netCDF file however the user desires. Rayleigh scattering tables may or may not be present; this is indicated with allocation status This interface is for the internal-sources object – includes Planck functions and fractions\n\n\n\n\n\n","category":"function"},{"location":"RRTMGP/GasOptics.html#RRTMGP.GasOptics.get_k_dist_sw","page":"Gas Optics","title":"RRTMGP.GasOptics.get_k_dist_sw","text":"get_k_dist_sw(solar_src,\n              rayl_lower,\n              rayl_upper,\n              ref::ReferenceState{FT},\n              args...) where {FT<:AbstractFloat}\n\nInitialize object based on data read from netCDF file however the user desires. Rayleigh scattering tables may or may not be present; this is indicated with allocation status This interface is for the external-sources object – includes TOA source function table\n\n\n\n\n\n","category":"function"},{"location":"RTE.html#Radiative-Transfer-Equation-(RTE)-1","page":"Radiative Transfer Equation (RTE)","title":"Radiative Transfer Equation (RTE)","text":"","category":"section"},{"location":"RTE.html#","page":"Radiative Transfer Equation (RTE)","title":"Radiative Transfer Equation (RTE)","text":"This document outlines the equations solved in the RTE.","category":"page"},{"location":"References.html#References-1","page":"References","title":"References","text":"","category":"section"},{"location":"References.html#Scattering-1","page":"References","title":"Scattering","text":"","category":"section"},{"location":"References.html#","page":"References","title":"References","text":"Costa, S. M. S., & Shine, K. P. (2006, April). An estimate of the global impact of multiple scattering by clouds on outgoing long-wave radiation. Quart. J. Royal Met. Soc., 132(616), 885–895.","category":"page"},{"location":"References.html#","page":"References","title":"References","text":"Kuo, C.P., Yang, P., Huang, X., Feldman, D., Flanner, M., Kuo, C., & Mlawer, E. J. (2017, December). Impact of Multiple Scattering on Longwave Radiative Transfer Involving Clouds. J. Adv. Model. Earth Syst., 9(8), 3082–3098.","category":"page"},{"location":"References.html#Two-stream-1","page":"References","title":"Two-stream","text":"","category":"section"},{"location":"References.html#","page":"References","title":"References","text":"Meador, W. E., & Weaver, W. R. (1980). Two-Stream Approximations to Radiative Transfer in Planetary Atmospheres: A Unified Description of Existing Methods and a New Improvement. J. Atmos. Sci., 37(3), 630–643.","category":"page"},{"location":"References.html#Transport-1","page":"References","title":"Transport","text":"","category":"section"},{"location":"References.html#","page":"References","title":"References","text":"Shonk, J. K. P., & Hogan, R. J. (2008, June). Tripleclouds: An Efficient Method for Representing Horizontal Cloud Inhomogeneity in 1D Radiation Schemes by Using Three Regions at Each Height. J. Climate, 21(11), 2352–2370.","category":"page"},{"location":"References.html#Longwave-and-Shortwave-1","page":"References","title":"Longwave & Shortwave","text":"","category":"section"},{"location":"References.html#","page":"References","title":"References","text":"Fu, Q., & Liou, K. N. (1992). On the correlated k-distribution method for radiative transfer in nonhomogeneous atmospheres. J. Atmos. Sci., 49(22), 2139–2156.","category":"page"},{"location":"References.html#","page":"References","title":"References","text":"Fu, Q., Liou, K. N., Cribb, M. C., Charlock, T. P., & Grossman, A. (1997, December). Multiple Scattering Parameterization in Thermal Infrared Radiative Transfer. J. Atmos. Sci., 54(24), 2799–2812.","category":"page"},{"location":"References.html#","page":"References","title":"References","text":"Clough, S. A., Iacono, M. J., & Moncet, J.L. (1992). Line-by-line calculations of atmospheric fluxes and cooling rates: Application to water vapor. J. Geophys. Res., 97(D14), 15761–15785.","category":"page"},{"location":"References.html#","page":"References","title":"References","text":"Zdunkowski, W. G., Welch, R. M., & Korb, G. J. (1980, September). An investigation of the structure of typical two-stream methods for the calculation of solar fluxes and heating rates in clouds. Beitr ̈age zur Physik Atmosph ̈ere , 53 , 147–166.","category":"page"},{"location":"RRTMGP/ReferenceStates.html#Reference-State-1","page":"References States","title":"Reference State","text":"","category":"section"},{"location":"RRTMGP/ReferenceStates.html#","page":"References States","title":"References States","text":"CurrentModule = RRTMGP.ReferenceStates","category":"page"},{"location":"RRTMGP/ReferenceStates.html#","page":"References States","title":"References States","text":"ReferenceState\nget_press_min","category":"page"},{"location":"RRTMGP/ReferenceStates.html#RRTMGP.ReferenceStates.ReferenceState","page":"References States","title":"RRTMGP.ReferenceStates.ReferenceState","text":"ReferenceState{FT}\n\nReference state variables for look-up tables / interpolation\n\nFields\n\npress\nPressure\npress_log\nLog of pressure\ntemp\nTemperature\npress_min\nMinimum of pressure\npress_max\nMaximum of pressure\ntemp_min\nMinimum of temperature\ntemp_max\nMaximum of temperature\npress_log_delta\nMaximum of temperature\ntemp_delta\nTemperature change between surface and top of atmosphere\npress_trop_log\nLogarithm of tropospheric pressure\nvmr\nVolume mixing ratio (lower or upper atmosphere, gas, temp)\n\n\n\n\n\n","category":"type"},{"location":"RRTMGP/ReferenceStates.html#RRTMGP.ReferenceStates.get_press_min","page":"References States","title":"RRTMGP.ReferenceStates.get_press_min","text":"get_press_min(ref::ReferenceState)\n\nMinimum pressure on the interpolation grids\n\n\n\n\n\n","category":"function"},{"location":"RTE/RTESolver.html#RTE-Solver-1","page":"RTE Solver","title":"RTE Solver","text":"","category":"section"},{"location":"RTE/RTESolver.html#","page":"RTE Solver","title":"RTE Solver","text":"CurrentModule = RRTMGP.RTESolver","category":"page"},{"location":"RTE/RTESolver.html#","page":"RTE Solver","title":"RTE Solver","text":"rte_sw!\nrte_lw!\nexpand_and_transpose","category":"page"},{"location":"RTE/RTESolver.html#RRTMGP.RTESolver.rte_sw!","page":"RTE Solver","title":"RRTMGP.RTESolver.rte_sw!","text":"rte_sw!(fluxes::FluxesBroadBand{FT},\n        optical_props::AbstractOpticalPropsArry{FT},\n        mesh_orientation::MeshOrientation{I},\n        bcs::ShortwaveBCs{FT},\n        μ_0::Array{FT}) where {FT<:AbstractFloat,I<:Int}\n\nCompute broadband radiative fluxes\n\nfluxes broadband fluxes, see AbstractFluxes\n\ngiven\n\noptical_props optical properties, see AbstractOpticalPropsArry\nmesh_orientation mesh orientation, see MeshOrientation\nbcs boundary conditions, see ShortwaveBCs\nμ_0 cosine of solar zenith angle (ncol)\n\n\n\n\n\n","category":"function"},{"location":"RTE/RTESolver.html#RRTMGP.RTESolver.rte_lw!","page":"RTE Solver","title":"RRTMGP.RTESolver.rte_lw!","text":"rte_lw!(fluxes::FluxesBroadBand{FT},\n        optical_props::AbstractOpticalPropsArry{FT},\n        mesh_orientation::MeshOrientation{I},\n        bcs::LongwaveBCs{FT},\n        sources::SourceFuncLongWave{FT, I},\n        angle_disc::Union{GaussQuadrature{FT,I},Nothing}=nothing) where {FT<:AbstractFloat,I<:Int}\n\nCompute broadband radiative fluxes\n\nfluxes broadband fluxes, see FluxesBroadBand\n\ngiven\n\noptical_props optical properties, see AbstractOpticalPropsArry\nmesh_orientation mesh orientation, see MeshOrientation\nbcs boundary conditions, see LongwaveBCs\nsources radiation sources, see SourceFuncLongWave\nangle_disc Gaussian quadrature for angular discretization, GaussQuadrature\n\n\n\n\n\n","category":"function"},{"location":"RTE/RTESolver.html#RRTMGP.RTESolver.expand_and_transpose","page":"RTE Solver","title":"RRTMGP.RTESolver.expand_and_transpose","text":"expand_and_transpose(ops::AbstractOpticalProps,arr_in::Array{FT}) where FT\n\nExpand from band to g-point dimension, transpose dimensions (nband, ncol) -> (ncol,ngpt), of arr_out, given\n\nops - a AbstractOpticalProps\narr_in - input array\n\n\n\n\n\n","category":"function"},{"location":"OpticalProps.html#Optical-Properties-1","page":"Optical Properties","title":"Optical Properties","text":"","category":"section"},{"location":"OpticalProps.html#","page":"Optical Properties","title":"Optical Properties","text":"CurrentModule = RRTMGP.OpticalProps","category":"page"},{"location":"OpticalProps.html#","page":"Optical Properties","title":"Optical Properties","text":"OpticalPropsBase\nOneScalar\nTwoStream\nOneScalarPGP\nTwoStreamPGP","category":"page"},{"location":"OpticalProps.html#RRTMGP.OpticalProps.OpticalPropsBase","page":"Optical Properties","title":"RRTMGP.OpticalProps.OpticalPropsBase","text":"OpticalPropsBase{FT,I} <: AbstractOpticalProps{FT,I}\n\nBase class for optical properties.\n\nFields\n\nband2gpt\nMap from band to g-point. (begin g-point, end g-point) = band2gpt(2,band)\ngpt2band\nMap from g-point to band. band = gpt2band(g-point)\nband_lims_wvn\nWavenumber band limits. (upper and lower wavenumber by band) = bandlimswvn(2,band)\nname\nName of optical properties\n\n\n\n\n\n","category":"type"},{"location":"OpticalProps.html#RRTMGP.OpticalProps.OneScalar","page":"Optical Properties","title":"RRTMGP.OpticalProps.OneScalar","text":"OneScalar{FT,I} <: AbstractOpticalPropsArry{FT,I}\n\nSingle scalar approximation for optical depth, used in calculations accounting for extinction and emission\n\nFields\n\nbase\nBase optical properties, see OpticalPropsBase\nτ\nOptical depth\n\n\n\n\n\n","category":"type"},{"location":"OpticalProps.html#RRTMGP.OpticalProps.TwoStream","page":"Optical Properties","title":"RRTMGP.OpticalProps.TwoStream","text":"TwoStream{FT,I} <: AbstractOpticalPropsArry{FT,I}\n\nTwo stream approximation for optical depth, used in calculations accounting for extinction and emission\n\nFields\n\nbase\nBase optical properties, see OpticalPropsBase\nτ\nOptical depth\nssa\nSingle-scattering albedo\ng\nAsymmetry parameter\n\n\n\n\n\n","category":"type"},{"location":"OpticalProps.html#RRTMGP.OpticalProps.OneScalarPGP","page":"Optical Properties","title":"RRTMGP.OpticalProps.OneScalarPGP","text":"OneScalarPGP{FT,I} <: AbstractOpticalPropsArry{FT,I}\n\nSingle scalar approximation for optical depth, used in calculations accounting for extinction and emission per-grid-point\n\nFields\n\nbase\nBase optical properties, see OpticalPropsBase\nτ\nOptical depth\n\n\n\n\n\n","category":"type"},{"location":"OpticalProps.html#RRTMGP.OpticalProps.TwoStreamPGP","page":"Optical Properties","title":"RRTMGP.OpticalProps.TwoStreamPGP","text":"TwoStreamPGP{FT,I} <: AbstractOpticalPropsArry{FT,I}\n\nTwo stream approximation for optical depth, used in calculations accounting for extinction and emission per-grid-point\n\nFields\n\nbase\nBase optical properties, see OpticalPropsBase\nτ\nOptical depth\nssa\nSingle-scattering albedo\ng\nAsymmetry parameter\n\n\n\n\n\n","category":"type"},{"location":"OpticalProps.html#","page":"Optical Properties","title":"Optical Properties","text":"delta_scale!\nvalidate!\nincrement!\nbands_are_equal\ngpoints_are_equal","category":"page"},{"location":"OpticalProps.html#RRTMGP.OpticalProps.delta_scale!","page":"Optical Properties","title":"RRTMGP.OpticalProps.delta_scale!","text":"delta_scale!(this::OneScalar{FT}, fwd_scat_frac)\n\nthis optical properties, see OneScalar\nfwd_scat_frac forward scattering fraction\n\n\n\n\n\ndelta_scale!(this::TwoStream{FT}, for_ = nothing) where {FT<:AbstractFloat}\n\nthis optical properties, see TwoStream\nfwd_scat_frac forward scattering fraction\n\n\n\n\n\n","category":"function"},{"location":"OpticalProps.html#RRTMGP.OpticalProps.validate!","page":"Optical Properties","title":"RRTMGP.OpticalProps.validate!","text":"validate!(this::OneScalar{FT}) where FT\n\n\n\n\n\nvalidate!(this::TwoStream{FT}) where FT\n\n\n\n\n\n","category":"function"},{"location":"OpticalProps.html#RRTMGP.OpticalProps.increment!","page":"Optical Properties","title":"RRTMGP.OpticalProps.increment!","text":"increment!(opin::AbstractOpticalPropsArry, opio::AbstractOpticalPropsArry)\n\n\n\n\n\n","category":"function"},{"location":"OpticalProps.html#RRTMGP.OpticalProps.bands_are_equal","page":"Optical Properties","title":"RRTMGP.OpticalProps.bands_are_equal","text":"bands_are_equal(this::AbstractOpticalProps{FT}, that::AbstractOpticalProps{FT}) where FT\n\nBoolean that indicates if the bands of two objects the same, (same number, same wavelength limits), given\n\nthis optical properties, see AbstractOpticalProps\nthat optical properties, see AbstractOpticalProps\n\n\n\n\n\n","category":"function"},{"location":"OpticalProps.html#RRTMGP.OpticalProps.gpoints_are_equal","page":"Optical Properties","title":"RRTMGP.OpticalProps.gpoints_are_equal","text":"gpoints_are_equal(this::AbstractOpticalProps{FT}, that::AbstractOpticalProps{FT}) where {FT}\n\nBoolean that indicates if the g-point structure of two objects the same, (same bands, same number of g-points, same mapping between bands and g-points), given\n\nthis optical properties, see AbstractOpticalProps\nthat optical properties, see AbstractOpticalProps\n\n\n\n\n\n","category":"function"},{"location":"RTE/SolarZenithAngle.html#Solar-Zenith-Angle-1","page":"Solar Zenith Angle","title":"Solar Zenith Angle","text":"","category":"section"},{"location":"RTE/SolarZenithAngle.html#","page":"Solar Zenith Angle","title":"Solar Zenith Angle","text":"CurrentModule = RRTMGP.SolarZenithAngle","category":"page"},{"location":"RTE/SolarZenithAngle.html#Examples-1","page":"Solar Zenith Angle","title":"Examples","text":"","category":"section"},{"location":"RTE/SolarZenithAngle.html#","page":"Solar Zenith Angle","title":"Solar Zenith Angle","text":"include(\"plot_zenith_angle.jl\")\n\n#####\n##### Example 2\n#####\n\n# 2018 constants\nγ_0 = 23.44\nπ_0 = 282.95\ne_0 = 0.017\n\n# ndays, nlats\nndays = 365\nnlats = 180\n\nF0 = calc_day_lat_insolation(ndays, nlats, γ_0, π_0, e_0)\nplot_day_lat_insolation(ndays, nlats, F0, \"YlOrRd\", \"gamma_0 = $(γ_0), pi_0 = $(π_0), e = $(e_0)\", \"example2.png\")\n\n#####\n##### Example 3\n#####\n\n# turn longitude of perihelion by 180°\nγ_0 = 23.44\nπ_1 = 282.95 + 180.0\ne_0 = 0.017\n\nndays = 365\nnlats = 180\n\nF1 = calc_day_lat_insolation(ndays,nlats,γ_0,π_1,e_0)\nplot_day_lat_insolation(ndays,nlats,F1,\"YlOrRd\",  \"γ_0 = $(γ_0)^∘, π_0 = $(π_0)^∘, e = $(e_0)\", \"example3a.png\")\nplot_day_lat_insolation(ndays,nlats,F1-F0,\"PRGn\", \"ToA Insolation Difference: π_0_1 = 102.95^∘ - π_0_0 = 282.95^∘\", \"example3b.png\")\n\n#####\n##### Example 4\n#####\n\n# perihelion back to normal. decrease γ to 22.0°\nγ_1 = 22.0\nπ_0 = 282.95\ne_0 = 0.017\n\n# ndays, nlats\nndays = 365\nnlats = 180\n\nF2 = calc_day_lat_insolation(ndays,nlats,γ_1,π_0,e_0)\nplot_day_lat_insolation(ndays,nlats,F2,\"YlOrRd\",  \"γ_0 = $(γ_0)^∘, π_0 = $(π_0)^∘, e = $(e_0)\", \"example4a.png\")\nplot_day_lat_insolation(ndays,nlats,F2-F0,\"PRGn\", \"ToA Insolation Difference: γ_1 = $(γ_1)^∘ - γ_0 = $(γ_0)^∘\", \"example4b.png\")\n\n# decrease γ to 18.0°\nγ_2 = 18.0\nπ_0 = 282.95\ne_0 = 0.017\n\n# ndays, nlats\nndays = 365\nnlats = 180\n\nF3 = calc_day_lat_insolation(ndays,nlats,γ_2,π_0,e_0)\nplot_day_lat_insolation(ndays,nlats,F3,\"YlOrRd\", \"γ_0 = $(γ_0)^∘, π_0 = $(π_0)^∘, e = $(e_0)\", \"example4c.png\")\nplot_day_lat_insolation(ndays,nlats,F3-F0,\"PRGn\", \"ToA Insolation Difference: γ_1 = $(γ_1)^∘ - γ_0 = $(γ_0)^∘\", \"example4d.png\")\n\n#####\n##### Example 6\n#####\n\n# now change obliquity to 60.0°\nγ_3 = 60.0\nπ_0 = 282.95\ne_0 = 0.017\n\n# ndays, nlats\nndays = 365\nnlats = 180\n\nF4 = calc_day_lat_insolation(ndays,nlats,γ_3,π_0,e_0)\nplot_day_lat_insolation(ndays,nlats,F4,\"YlOrRd\", \"γ_0 = $(γ_0)^∘, π_0 = $(π_0)^∘, e = $(e_0)\", \"example6a.png\")\nplot_day_lat_insolation(ndays,nlats,F4-F0,\"PRGn\", \"ToA Insolation Difference: γ_1 = 60.0^∘ - γ_0 = 23.44^∘\", \"example6b.png\")\n\n# now change obliquity to 97.86°\nγ = 97.86\nπ_0 = 282.95\ne_0 = 0.017\n\n# ndays, nlats\nndays = 365\nnlats = 180\n\nF5 = calc_day_lat_insolation(ndays,nlats,γ,π_0,e_0)\nplot_day_lat_insolation(ndays,nlats,F5,\"YlOrRd\", \"γ_0 = $(γ_0)^∘, π_0 = $(π_0)^∘, e = $(e_0)\", \"example6c.png\")\nplot_day_lat_insolation(ndays,nlats,F5-F0,\"PRGn\", \"ToA Insolation Difference: γ_1 = 97.86^∘ - γ_0 = 23.44^∘\", \"example6d.png\")\n","category":"page"},{"location":"RTE/SolarZenithAngle.html#Example-2-1","page":"Solar Zenith Angle","title":"Example 2","text":"","category":"section"},{"location":"RTE/SolarZenithAngle.html#","page":"Solar Zenith Angle","title":"Solar Zenith Angle","text":"(Image: )","category":"page"},{"location":"RTE/SolarZenithAngle.html#Example-3-1","page":"Solar Zenith Angle","title":"Example 3","text":"","category":"section"},{"location":"RTE/SolarZenithAngle.html#","page":"Solar Zenith Angle","title":"Solar Zenith Angle","text":"(Image: ) (Image: )","category":"page"},{"location":"RTE/SolarZenithAngle.html#Example-4-1","page":"Solar Zenith Angle","title":"Example 4","text":"","category":"section"},{"location":"RTE/SolarZenithAngle.html#","page":"Solar Zenith Angle","title":"Solar Zenith Angle","text":"(Image: ) (Image: ) (Image: ) (Image: )","category":"page"},{"location":"RTE/SolarZenithAngle.html#Example-6-1","page":"Solar Zenith Angle","title":"Example 6","text":"","category":"section"},{"location":"RTE/SolarZenithAngle.html#","page":"Solar Zenith Angle","title":"Solar Zenith Angle","text":"(Image: ) (Image: ) (Image: ) (Image: )","category":"page"},{"location":"index.html#RRTMGP.jl-1","page":"Home","title":"RRTMGP.jl","text":"","category":"section"},{"location":"index.html#","page":"Home","title":"Home","text":"Julia implementation of Rapid and accurate Radiative Transfer Model for General Circulation Models in Parallel (RRTMGP).","category":"page"},{"location":"index.html#Code-structure-1","page":"Home","title":"Code structure","text":"","category":"section"},{"location":"index.html#","page":"Home","title":"Home","text":"RRTMGP is fundamentally split into two parts:","category":"page"},{"location":"index.html#","page":"Home","title":"Home","text":"RRTMGP Compute optical depth given atmospheric conditions (pressure, temperature, gas concentrations, grid)\nRTE Compute fluxes given optical depth","category":"page"}]
}
