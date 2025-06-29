interface ServiceType {
  serviceName: string;
  id: number;
}
const services: ServiceType[] = [
  { serviceName: 'Graphic Design', id: 1 },
  { serviceName: 'Web Development', id: 2 },
];
for (let i = 0; i < services.length; i++) {
  services.forEach((s) => (s.id = Math.random() * 10000));
}
export { services };
