const path = require('path')
const container = require('markdown-it-container')

module.exports = {
  title: 'Vuefire',
  description: 'Realtime bindings between Vue/Vuex and Firebase',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  themeConfig: {
    repo: 'vuejs/vuefire',
    editLinks: true,
    docsDir: 'packages/documentation/docs',
    // sidebarDepth: 2,
    // sidebar: 'auto',
    sidebar: {
      '/vuefire/': [
        {
          title: 'Vuefire',
          collapsable: false,
          children: [
            '',
            'getting-started',
            'binding-subscriptions',
            'querying',
            'writing-data',
            'upgrading-from-v1',
          ],
        },
      ],
      '/vuexfire/': [
        {
          title: 'Vuexfire',
          collapsable: false,
          children: [
            '',
            'getting-started',
            'binding-subscriptions',
            'querying',
            'writing-data',
            'upgrading-from-v2',
          ],
        },
      ],
      '/cookbook/': [
        {
          title: 'Cookbook',
          collapsable: false,
          children: ['', 'prototyping', 'rtdb-and-firestore', 'ssr'],
        },
      ],
      '/api/': [
        {
          collapsable: false,
          title: 'API Reference',
          children: ['vuefire', 'vuexfire'],
        },
      ],
    },
    // displayAllHeaders: true,
    nav: [
      {
        text: 'Vuefire',
        link: '/vuefire/',
      },
      {
        text: 'Vuexfire',
        link: '/vuexfire/',
      },
      {
        text: 'API',
        link: '/api/',
      },
      {
        text: 'Cookbook',
        link: '/cookbook/',
      },
    ],
    algolia: {
      apiKey: '0d5c32429ddf401270cbc9b4e24c4532',
      indexName: 'vuefire',
    },
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    ['@vuepress/notification', true],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-137714612-1',
      },
    ],
  ],

  markdown: {
    extendMarkdown: md => {
      md.use(container, 'miniwarn', {
        render(tokens, idx) {
          const token = tokens[idx]
          // 8 === 'miniwarn'.length
          const info = token.info
            .trim()
            .slice(8)
            .trim()

          if (token.nesting === 1) {
            // opening tag
            return '<blockquote class="warning">' + info
          } else {
            // closing tag
            return '</blockquote>\n'
          }
        },
      })
    },
  },
}
