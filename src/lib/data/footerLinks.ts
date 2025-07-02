type LinkType = {
  label: string;
  url: string;
};

const resources: LinkType[] = [
  {
    label: 'Team',
    url: '/team',
  },
  {
    label: 'Blog',
    url: '/blog',
  },
  {
    label: 'FAQ',
    url: '#faqs',
  },
  {
    label: 'Contact Us',
    url: '/contact-us',
  },
  {
    label: 'About Us',
    url: '/about-us',
  },
];

const solutions: LinkType[] = [
  {
    label: 'Web Development',
    url: '/web-development',
  },
  {
    label: 'Word Press App Development',
    url: '/word-press',
  },
  {
    label: 'Shopify Services',
    url: '/shopify-solutions',
  },
  {
    label: 'Graphic Designing',
    url: '/graphic-design',
  },
  {
    label: 'UI/UX Design',
    url: '/ui-ux-design',
  },
];

const legals: LinkType[] = [
  {
    label: 'Privacy Policy',
    url: '/privacy-policy',
  },
  {
    label: 'Terms of Service',
    url: '/terms-of-service',
  },
  {
    label: 'Support',
    url: '/support',
  },
];

export { resources, solutions, legals };
