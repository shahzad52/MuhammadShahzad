import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: '#about',
    },
    {
      text: 'Skills',
      href: '#skills',
    },
    {
      text: 'Experience',
      href: '#experience',
    },
    {
      text: 'Projects',
      href: '#projects',
    },
    {
      text: 'Contact',
      href: '#contact',
    },
  ],
  actions: [
    {
      text: 'Contact Me',
      href: 'mailto:imshahzad52@gmail.com?subject=Project Inquiry',
      target: '_blank',
      icon: 'tabler:mail',
    }
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/Shahzad52' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:imshahzad52@gmail.com' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Muhammad Shahzad · Data Scientist · Lahore, Pakistan
  `,
};
