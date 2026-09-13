import type {
  InfraDestroyRequest,
  InfraExecutionContext,
  InfraReconcileResult,
  InfraResult,
} from '@ankhorage/contracts/infra';

/*** Release logical ownership without deleting or mutating the user's local host. */
export function destroyLocalComputeAsync(
  context: InfraExecutionContext,
  request: InfraDestroyRequest,
): Promise<InfraResult<InfraReconcileResult>> {
  if (
    request.projectId !== context.projectId ||
    request.environment !== context.environment ||
    request.confirmation.projectId !== context.projectId ||
    request.confirmation.environment !== context.environment
  ) {
    return Promise.resolve({
      ok: false,
      diagnostics: [
        {
          severity: 'error',
          code: 'local-destroy-unconfirmed',
          message: 'Local compute destroy requires exact project and environment confirmation.',
        },
      ],
    });
  }
  return Promise.resolve({ ok: true, value: { resources: [], outputs: [] }, diagnostics: [] });
}
