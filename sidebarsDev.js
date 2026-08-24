/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  developerDocs: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/quickstart',
        'getting-started/local-setup',
        'getting-started/loading-unpacked',
      ],
    },
    {
      type: 'category',
      label: 'Architecture & MV3',
      collapsed: false,
      items: [
        'architecture/overview',
        'architecture/manifest-v3',
        'architecture/service-worker',
        'architecture/sidepanel',
        'architecture/content-scripts',
        'architecture/messaging-protocol',
      ],
    },
    {
      type: 'category',
      label: 'Tool Catalog Architecture',
      collapsed: false,
      items: [
        'tools/overview',
        'tools/json-formatter',
        'tools/jwt-decoder',
        'tools/base64',
        'tools/url-encoder',
        'tools/hash-generator',
        'tools/uuid-generator',
        'tools/timestamp-converter',
        'tools/diff-checker',
        'tools/regex-tester',
        'tools/dummy-data',
        'tools/markdown-preview',
      ],
    },
    {
      type: 'category',
      label: 'Testing & Quality',
      collapsed: false,
      items: [
        'testing/e2e-playwright',
        'testing/linting',
      ],
    },
    {
      type: 'category',
      label: 'Workflows & Commands',
      collapsed: false,
      items: [
        'workflows/make-commands',
        'workflows/dev-tmux',
      ],
    },
    {
      type: 'category',
      label: 'Release & Distribution',
      collapsed: false,
      items: [
        'release/packaging',
        'release/chrome-web-store',
      ],
    },
  ],
};
