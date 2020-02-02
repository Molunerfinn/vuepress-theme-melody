module.exports = (themeConfig, ctx) => {
  return {
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
              id: 'post',
              dirname: '_posts',
              path: '/',
              layout: 'Layout',
              itemLayout: 'Post',
              itemPermalink: themeConfig.permalink || '/:slug'
            }
          ]
        }
      ]
    ]
  }
}
