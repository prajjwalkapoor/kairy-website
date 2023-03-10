import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'View Github',
      href: 'https://github.com/prajjwalkapoor/kairy',
    },
    {
      text: 'Features',
      href: '#features',
    },
    {
      text: 'FAQs',
      href: '#faq',
    },
  ],
  actions: [{ type: 'button', text: 'View Blog', href: getPermalink('/blog') }],
};

export const footerData = {
  secondaryLinks: [
    { text: 'View Github', href: 'https://github.com/prajjwalkapoor/kairy' },
    { text: 'Blog', href: getPermalink('/blog') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/prajjwalkapoor/kairy' },
  ],
  footNote: `
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://prajwl.me/"> Prajjwal Kapoor</a> · All rights reserved.
  `,
};
