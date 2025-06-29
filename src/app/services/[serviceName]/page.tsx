import { services } from '@/lib/data/services';
import { notFound } from 'next/navigation';

type ServiceByServiceNameProps = {
  params: Promise<{
    serviceName: string;
  }>;
};

// Create a normalized service lookup map
const createServiceLookup = () => {
  const lookup = new Map<string, (typeof services)[0]>();

  services.forEach((service) => {
    // Normalize service name to match URL format
    const normalized = service.serviceName.toLowerCase().replace(/\s+/g, '-');
    lookup.set(normalized, service);
  });

  return lookup;
};

const serviceLookup = createServiceLookup();

export default async function ServiceByServiceName(props: ServiceByServiceNameProps) {
  const params = await props.params;
  // Ensure we wait for params to be resolved
  const { serviceName } = params;

  // Direct lookup using the normalized URL parameter
  const service = serviceLookup.get(serviceName.toLowerCase());

  if (!service) {
    notFound(); // Proper 404 handling
  }

  return (
    <section className='p-6 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4'>{service.serviceName}</h1>
      <div className='bg-white p-6 rounded-lg shadow-md'>
        <p className='text-gray-600'>Service ID: {service.id}</p>
        {/* Add more service details here */}
      </div>
    </section>
  );
}

// Generate static paths at build time
export async function generateStaticParams() {
  return services.map((service) => ({
    serviceName: service.serviceName.toLowerCase().replace(/\s+/g, '-'),
  }));
}
