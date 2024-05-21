import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    /* {
      text: 'Homes',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    }, */
    {
      text: '¿Quiénes somos?',
      href: '/#quiensomos',
    },
    {
      text: 'Especializaciones',
      links: [
        {
          text: 'Doblaje',
          href: getPermalink('/doblaje'),
        },
        {
          text: 'Locución',
          href: getPermalink('/locucion'),
        },
        {
          text: 'Arte de la expresividad',
          href: getPermalink('/maintenance'),
        },
      ],
    },
    {
      text: 'Power of voice',
      links: [
        {
          text: '¿Qué es?',
          href: getPermalink('/maintenance'),
        },
        {
          text: 'Power of voice Teens',
          href: getPermalink('/maintenance'),
        },
        {
          text: 'Power of voice Kids',
          href: getPermalink('/maintenance'),
        },
        {
          text: 'Talleres',
          href: getPermalink('/maintenance'),
        },
      ],
    },
    {
      text: 'Talentos',
      href: getPermalink('/banco-talentos'),
    },
    {
      text: 'Contacto',
      href: '/contact',
    },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      links: [{ text: 'Términos y condiciones', href: getPermalink('/terms') }],
    },
    {
      links: [{ text: 'Política de privacidad', href: getPermalink('/privacy') }],
    },
    /* {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    }, */
  ],
  /* secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ], */
  socialLinks: [
    { ariaLabel: 'Tik Tok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@enalocmx' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/enalocmx/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://es-la.facebook.com/enalocmx/' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/c/EnalocM%C3%A9xico' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  /* footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `, */
};
