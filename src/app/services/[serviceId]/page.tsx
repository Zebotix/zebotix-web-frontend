import { services } from '@/lib/data/services';
import React from 'react';

type ServiceByIdProps = {
  params: {
    serviceId: string;
  };
};

const ServiceById = async ({ params }: ServiceByIdProps) => {
  console.log('SERVICES:', services); // ye kya print hota hai?

  // URL slug decode karo
  const serviceLabel = decodeURIComponent(params.serviceId);
  console.log('Resolved Label:', serviceLabel);

  // services se serviceName match karo
  const service = services.find((s) => s.serviceName.toLowerCase() === serviceLabel.toLowerCase());

  console.log('Matched Service:', service);

  if (!service) {
    return <section>Service not found</section>;
  }

  return (
    <section>
      <h1>{service.serviceName}</h1>
      <p>ID: {service.id}</p>
    </section>
  );
};

export default ServiceById;
