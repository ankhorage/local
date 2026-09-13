# Public API

## createInfraAdapter

Kind: `function`
Module: `src/features/local-compute/composition/createInfraAdapter.ts`
Source: `src/features/local-compute/composition/createInfraAdapter.ts:13:1`

Create the canonical local-host compute adapter entrypoint.

The foundation exposes the released Contracts boundary and fails lifecycle calls explicitly
until the provider implementation phase supplies its external adapters.

### Signatures

- `() => InfraComputeAdapter<"local">`
  - returns: `InfraComputeAdapter<"local">`

## infraAdapterDescriptor

Kind: `value`
Module: `src/constants/infra.ts`
Source: `src/constants/infra.ts:5:14`
