export interface NavLinksTypes {
  label: string;
  path: string;
  id?: number;
}
const navLinks: NavLinksTypes[] = [
  {
    label: 'Home',
    path: '/',
    id: 1,
  },
  {
    label: 'About',
    path: '/about',
    id: 2,
  },
  {
    label: 'Products',
    path: '/products',
    id: 3,
  },
  {
    label: 'Services',
    path: '/services',
    id: 4,
  },
  {
    label: 'Jobs',
    path: '/jobs',
    id: 5,
  },
];

export { navLinks };
