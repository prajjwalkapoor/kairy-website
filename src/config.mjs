import defaultImage from './assets/images/kairy-cover.jpg';

const CONFIG = {
  name: 'Kairy',

  origin: 'https://kairy.vercel.app',
  basePathname: '/',
  trailingSlash: false,

  title: 'Kairy — a browser extension to manage your bookmark, shortcuts and reading lists.',
  description:
    '🚀 Categoize your bookmarks with beautiful and clean UI. 🚀 Manage your shortcuts with ease. 🚀 Save your reading lists and read them later.',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: '4Utz1vVPzE5K8bkl4hbA8fz8uMVdUIQvIxIUjtOL5rA',

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
