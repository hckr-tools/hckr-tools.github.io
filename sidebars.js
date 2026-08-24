/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  userDocs: [
    'index',
    'installation',
    'keyboard-shortcuts',
    {
      type: 'category',
      label: 'Tools & Utilities',
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
    'privacy-policy',
  ],
};
