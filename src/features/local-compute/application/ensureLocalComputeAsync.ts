import type {
  InfraComputeSelection,
  InfraComputeSnapshot,
  InfraExecutionContext,
  InfraResult,
} from '@ankhorage/contracts/infra';

import type { LocalHostProbe } from '../../../types/localCompute';
import { inspectLocalComputeSnapshotAsync } from './inspectLocalComputeSnapshotAsync';

/*** Return the validated current host as a portable compute target without provisioning it. */
export async function ensureLocalComputeAsync(
  probe: LocalHostProbe,
  context: InfraExecutionContext,
  selection: InfraComputeSelection<'local'>,
): Promise<InfraResult<InfraComputeSnapshot>> {
  return inspectLocalComputeSnapshotAsync(probe, context, selection);
}
