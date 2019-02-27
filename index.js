module.exports = (options, ctx) => {
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
      require('./plugins/stylus')
    ]
  }
}
