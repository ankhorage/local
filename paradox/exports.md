# Public API

## createInfraAdapter

Kind: `function`
Module: `src/features/local-compute/composition/createInfraAdapter.ts`
Source: `src/features/local-compute/composition/createInfraAdapter.ts:20:1`

Create the canonical local-host compute adapter entrypoint.

The default adapter inspects the current Node host and never provisions, suspends or deletes the
user's machine. A probe can be injected for deterministic tests or another host environment.

### Signatures

- `(options?: LocalComputeAdapterOptions) => InfraComputeAdapter<"local">`
  - options: `LocalComputeAdapterOptions` (optional)
  - returns: `InfraComputeAdapter<"local">`

## createNodeLocalHostProbe

Kind: `function`
Module: `src/features/local-compute/adapters/outbound/createNodeLocalHostProbe.ts`
Source: `src/features/local-compute/adapters/outbound/createNodeLocalHostProbe.ts:10:1`

Create the concrete Node host probe used by the default local compute adapter.

### Signatures

- `() => LocalHostProbe`
  - returns: `LocalHostProbe`

## infraAdapterDescriptor

Kind: `value`
Module: `src/constants/infra.ts`
Source: `src/constants/infra.ts:5:14`

## LocalComputeAdapterOptions

Kind: `type`
Module: `src/types/localCompute.ts`
Source: `src/types/localCompute.ts:19:1`

### Members

| Name  | Kind     | Type                          | Required | Description |
| ----- | -------- | ----------------------------- | -------- | ----------- |
| probe | property | `LocalHostProbe \| undefined` | no       |             |

## LocalHostObservation

Kind: `type`
Module: `src/types/localCompute.ts`
Source: `src/types/localCompute.ts:3:1`

### Members

| Name             | Kind     | Type                                                                                                                                                    | Required | Description |
| ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| detail           | property | `string \| undefined`                                                                                                                                   | no       |             |
| exists           | property | `boolean`                                                                                                                                               | yes      |             |
| readable         | property | `boolean`                                                                                                                                               | yes      |             |
| target           | property | `{ readonly id: string; readonly os: "linux" \| "darwin" \| "windows"; readonly architecture: "amd64" \| "arm64"; } & { readonly kind: "local-host"; }` | yes      |             |
| workingDirectory | property | `string`                                                                                                                                                | yes      |             |
| writable         | property | `boolean`                                                                                                                                               | yes      |             |

## LocalHostProbe

Kind: `type`
Module: `src/types/localCompute.ts`
Source: `src/types/localCompute.ts:12:1`

### Members

| Name         | Kind   | Type                                                                                             | Required | Description |
| ------------ | ------ | ------------------------------------------------------------------------------------------------ | -------- | ----------- |
| inspectAsync | method | `(workingDirectory: string, signal?: AbortSignal) => Promise<InfraResult<LocalHostObservation>>` | yes      |             |
