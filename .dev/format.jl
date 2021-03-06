#!/usr/bin/env julia

using Pkg
Pkg.activate(@__DIR__)
Pkg.instantiate()

using JuliaFormatter

headbranch = get(ARGS, 1, "master")

for filename in
    readlines(`git diff --name-only --diff-filter=AM $headbranch...`)
    endswith(filename, ".jl") || continue

    format(filename, verbose = true, indent = 4, margin = 80)
end
