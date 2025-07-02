type SocialMediaLink = {
  name: string;
  url: string;
  icon: string;
};

const socialMediaLinks: SocialMediaLink[] = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/zebotix',
    icon: '/icons/Facebook.svg',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/zebotix',
    icon: '/icons/X.svg',
  },
  {
    name: 'GitHub',
    url: 'https://www.github.com/company/zebotix',
    icon: '/icons/GitHub.svg',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/zebotix',
    icon: '/icons/Instagram.svg',
  },
];

export { socialMediaLinks };
