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
      text: 'Pipeline Flow',
      href: '#pipeline',
    },
    {
      text: 'Contact',
      href: '#contact',
    },
  ],
  actions: [
    {
      text: 'WhatsApp Me',
      href: 'https://wa.me/923223298705?text=Hi%20Muhammad,%20I%20saw%20your%20portfolio!',
      target: '_blank',
      icon: 'tabler:brand-whatsapp',
    }
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/Shahzad52' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/923223298705' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:imshahzad52@gmail.com' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Muhammad Shahzad · PUCIT B.S. Data Science Graduate · Lahore, Pakistan
  `,
};
