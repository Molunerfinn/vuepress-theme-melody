module.exports = (themeConfig, ctx) => {
  return {
    globalLayout: './layouts/GlobalLayout.vue',
    extend: '@vuepress/theme-default',
    plugins: [
      [
        '@vuepress/search',
        {
          searchMaxSuggestions: 10,
          test: null
        }
      ],
      ['@vuepress/active-header-links', false],
      require('./plugins/melody'),
      require('./plugins/stylus'),
      [
        '@vuepress/blog', {
          directories: [
            {
              id: 'posts',
              dirname: '_posts',
              path: '/',
              layout: 'Layout',
              itemLayout: 'PostLayout',
              itemPermalink: themeConfig.permalink || '/:slug'
            }
          ],
          frontmatters: [
            {
              id: 'tags',
              keys: ['tag', 'tags'],
              path: '/tags/',
              layout: 'Tag'
            },
            {
              id: 'categories',
              keys: ['category', 'categories'],
              path: '/categories/',
              layout: 'Category'
            }
          ]
        }
      ]
    ]
  }
}
