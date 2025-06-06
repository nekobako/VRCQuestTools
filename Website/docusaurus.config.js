// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VRCQuestTools',
  tagline: 'Avatar Converter and Utilities for Android',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kurotu.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/VRCQuestTools/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kurotu', // Usually your GitHub org/user name.
  projectName: 'VRCQuestTools', // Usually your repo name.

  // onBrokenLinks: 'warn', // Temporary ignore broken links for missing i18n pages.
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kurotu/VRCQuestTools/edit/master/Website/',
          editLocalizedFiles: true,
          editCurrentVersion: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'google-site-verification', content: 'iHat4XFlFF2SfNgjFM-hqhqAdP7KxL_s0WEFRySldpo'},
      ],
      // Replace with your project's social card
      image: 'img/social-card.png',
      navbar: {
        title: 'VRCQuestTools',
        logo: {
          alt: 'Docusaurus Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/kurotu/VRCQuestTools',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://kurotu.booth.pm/items/2436054',
            label: 'Booth',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'Documentation',
              to: '/docs/intro',
          },
          {
              label: 'GitHub',
              href: 'https://github.com/kurotu/VRCQuestTools',
          },
          {
            label: 'Booth',
            href: 'https://kurotu.booth.pm/items/2436054',
          },
        ],
        copyright: `Copyright © 2023 kurotu. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'diff', 'json'],
      },
    }),
};

module.exports = config;
