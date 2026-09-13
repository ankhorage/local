import { createInfraAdapter, infraAdapterDescriptor } from '@ankhorage/local';

const adapter = createInfraAdapter();

console.log(infraAdapterDescriptor.id, adapter.descriptor.package);
