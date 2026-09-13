import type { InfraComputeTarget, InfraResult } from '@ankhorage/contracts/infra';

export interface LocalHostObservation {
  readonly target: Extract<InfraComputeTarget, { readonly kind: 'local-host' }>;
  readonly workingDirectory: string;
  readonly exists: boolean;
  readonly readable: boolean;
  readonly writable: boolean;
  readonly detail?: string;
}

export interface LocalHostProbe {
  inspectAsync(
    workingDirectory: string,
    signal?: AbortSignal,
  ): Promise<InfraResult<LocalHostObservation>>;
}

export interface LocalComputeAdapterOptions {
  readonly probe?: LocalHostProbe;
}
