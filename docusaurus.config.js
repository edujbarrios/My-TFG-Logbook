// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LLMs and Fine Tuning in glaucoma detection',
  tagline: 'Main researching docs and blog of the Final Degree Thesis',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://edujbarrios.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/My-TFG-Logbook/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'edujbarrios', // Usually your GitHub org/user name.
  projectName: 'tfglogbook', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },

          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      colorMode: {
        defaultMode: 'dark', // Establece el modo oscuro como predeterminado
        disableSwitch: false, // Opcional: permite a los usuarios cambiar entre modos si está en 'false'
        respectPrefersColorScheme: false, // Ignora la configuración de color del sistema
      },
      announcementBar: {
        id: 'announcement-bar', // ID único
        content:
          '⚠️ La versión en español de esta documentación se agregará pronto. ¡Gracias por tu paciencia!',
        backgroundColor: '#541087', // Color de fondo violeta
        textColor: '#FFFFFF', // Letras en blanco
        isCloseable: true, // Permite cerrar el aviso
      },
      navbar: {
        title: 'LLMs and fine tuning in glaucoma detection ',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/edujbarrios',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction to Docs',
                to: "/docs"
              }
            ],
          },
          {
            title: 'Social Links',
            items: [
              {
                label: 'X - Not working by now',
                href: 'https://x.com/test',
              },
            ],
          },
          {
            title: 'Important Links',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/edujbarrios',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Eduardo José Barrios García.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

