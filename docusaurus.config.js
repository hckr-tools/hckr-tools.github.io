const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'hckr-tools',
  tagline: 'Lightning-fast, offline-first developer utilities right in your browser side panel.',
  favicon: 'img/logo.svg',
  url: 'https://hckr-tools.github.io',
  baseUrl: '/',
  organizationName: 'hckr-tools',
  projectName: 'hckr-tools.github.io',
  trailingSlash: true,
  onBrokenLinks: 'warn',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/search.css'),
            require.resolve('./src/css/mermaid.css'),
          ],
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    function layoutElkPlugin() {
      return {
        name: 'layout-elk-plugin',
        configureWebpack() {
          return {
            resolve: {
              alias: {
                '@mermaid-js/layout-elk$': require.resolve('@mermaid-js/layout-elk/dist/mermaid-layout-elk.core.mjs'),
              },
            },
          };
        },
      };
    },
    'docusaurus-plugin-image-zoom',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'devdocs',
        path: 'devdocs',
        routeBasePath: 'devdocs',
        sidebarPath: require.resolve('./sidebarsDev.js'),
        showLastUpdateTime: true,
      },
    ],
  ],
  themeConfig: {
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
      options: { flowchart: { useMaxWidth: false } },
    },
    zoom: {
      selector: '.markdown img',
      background: {
        light: 'rgba(15, 23, 42, 0.88)',
        dark: 'rgba(9, 13, 22, 0.94)',
      },
      config: {
        margin: 24,
      },
    },
    navbar: {
      title: 'hckr-tools',
      logo: { alt: 'hckr-tools logo', src: 'img/logo.svg', href: '/' },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'userDocs',
          position: 'left',
          label: 'User Docs',
        },
        {
          to: '/devdocs/',
          position: 'left',
          label: 'DevDocs',
          activeBaseRegex: '^/devdocs/',
        },
        {
          href: 'https://github.com/hckr-tools/hckr-tools-browser-extension',
          label: 'Extension Repo',
          position: 'right',
        },
        {
          href: 'https://github.com/hckr-tools/hckr-tools.github.io',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'User Guide', to: '/docs/' },
            { label: 'Installation', to: '/docs/installation/' },
            { label: 'Keyboard Shortcuts', to: '/docs/keyboard-shortcuts/' },
            { label: 'Privacy Policy', to: '/docs/privacy-policy/' },
          ],
        },
        {
          title: 'Developer Docs',
          items: [
            { label: 'DevDocs Home', to: '/devdocs/' },
            { label: 'MV3 Architecture', to: '/devdocs/architecture/manifest-v3/' },
            { label: 'Service Worker', to: '/devdocs/architecture/service-worker/' },
            { label: 'Sidepanel UI', to: '/devdocs/architecture/sidepanel/' },
          ],
        },
        {
          title: 'Community & Code',
          items: [
            { label: 'Extension GitHub', href: 'https://github.com/hckr-tools/hckr-tools-browser-extension' },
            { label: 'Portal GitHub', href: 'https://github.com/hckr-tools/hckr-tools.github.io' },
            { label: 'Report an Issue', href: 'https://github.com/hckr-tools/hckr-tools-browser-extension/issues' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} hckr-tools. Built with Docusaurus. 100% Offline & Private.`,
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['bash', 'yaml', 'json', 'typescript', 'tsx', 'markdown', 'diff'],
    },
  },
};

module.exports = config;
