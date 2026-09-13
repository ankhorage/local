/** Public local-host compute adapter package boundary. */
export { infraAdapterDescriptor } from './constants/infra';
export { createNodeLocalHostProbe } from './features/local-compute/adapters/outbound/createNodeLocalHostProbe';
export { createInfraAdapter } from './features/local-compute/composition/createInfraAdapter';
export type {
  LocalComputeAdapterOptions,
  LocalHostObservation,
  LocalHostProbe,
} from './types/localCompute';
