import type {
  InfraComputeSelection,
  InfraExecutionContext,
  InfraResult,
} from '@ankhorage/contracts/infra';

import type { LocalHostProbe } from '../../../types/localCompute';
import { inspectLocalComputeAsync } from './inspectLocalComputeAsync';

/*** Validate the selected local host without mutation. */
export async function validateLocalComputeAsync(
  probe: LocalHostProbe,
  context: InfraExecutionContext,
  selection: InfraComputeSelection<'local'>,
): Promise<InfraResult<null>> {
  const inspected = await inspectLocalComputeAsync(probe, context, selection);
  return inspected.ok ? { ok: true, value: null, diagnostics: [] } : inspected;
}
