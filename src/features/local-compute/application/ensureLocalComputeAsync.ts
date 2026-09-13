import type {
  InfraComputeSelection,
  InfraComputeTarget,
  InfraExecutionContext,
  InfraReconcileResult,
  InfraResult,
} from '@ankhorage/contracts/infra';

import type { LocalHostProbe } from '../../../types/localCompute';
import { inspectLocalComputeAsync } from './inspectLocalComputeAsync';

/*** Return the validated current host as a portable compute target without provisioning it. */
export async function ensureLocalComputeAsync(
  probe: LocalHostProbe,
  context: InfraExecutionContext,
  selection: InfraComputeSelection<'local'>,
): Promise<InfraResult<InfraReconcileResult & { readonly targets: readonly [ReturnTypeTarget] }>> {
  const inspected = await inspectLocalComputeAsync(probe, context, selection);
  if (!inspected.ok) return inspected;
  return {
    ok: true,
    value: {
      resources: [inspected.value.owner],
      outputs: [],
      targets: [inspected.value.observation.target],
    },
    diagnostics: [],
  };
}

type ReturnTypeTarget = Extract<InfraComputeTarget, { readonly kind: 'local-host' }>;
