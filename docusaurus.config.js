// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zprox.Chat Docs',
  tagline: 'Manage WhatsApp and Instagram conversations at scale',
  favicon: 'img/brand/favicon-32.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Plus Jakarta Sans is the typeface used in the Zprox.Chat product.
  headTags: [
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'}},
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'}},
    {tagName: 'link', attributes: {rel: 'apple-touch-icon', href: '/img/brand/favicon-192.png'}},
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Docs-only mode: the docs are the site, so "/" opens the Overview page.
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/Assets/Z-Chat%20Logo.png',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        logo: {
          alt: 'Zprox.Chat',
          src: 'img/Assets/Z-Chat%20Logo.png',
        },
        items: [
          {
            // A plain link rather than type 'docSidebar', so "Docs" isn't highlighted on the FAQ page too.
            to: '/',
            label: 'Docs',
            position: 'left',
            activeBaseRegex: '^/(?!faq)',
          },
          {
            to: '/faq',
            label: 'FAQ',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'light',
        logo: {
          alt: 'Zprox.Chat',
          src: 'img/Assets/Z-Chat%20Logo.png',
          href: '/',
          height: 32,
        },
        links: [
          {
            title: 'Get started',
            items: [
              {label: 'Overview', to: '/'},
              {label: 'Get started', to: '/getting-started'},
              {label: 'WhatsApp', to: '/WhatsApp'},
              {label: 'Instagram', to: '/Instagram'},
              {label: 'Billing & usage', to: '/billing-and-usage'},
            ],
          },
          {
            title: 'Using Zprox.Chat',
            items: [
              {label: 'Chats', to: '/Chats'},
              {label: 'Lead Studio', to: '/lead-studio'},
              {label: 'Automation', to: '/Automation'},
              {label: 'AI Agents', to: '/ai-agents'},
            ],
          },
          {
            title: 'Help',
            items: [
              {label: 'FAQ', to: '/faq'},
              {label: 'WhatsApp Help Centre', href: 'https://faq.whatsapp.com/'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PROITBRIDGE. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
