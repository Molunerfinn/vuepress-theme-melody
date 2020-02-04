const get = require('lodash/get')
const merge = require('lodash/merge')
module.exports = (options, ctx) => ({
  name: 'melody-stylus',
  chainWebpack (config) {
    const defineConfig = style => {
      style.define('theme-config', data => {
        const result = get(ctx.themeConfig, data.val) || ''
        return result
      })
    }
    config.module
      .rule('stylus')
      .test(/\.styl(us)?$/)
      .oneOf('modules')
      .resourceQuery(/module/)
      .use('stylus-loader')
      .tap(options => merge(options, {
        use: [defineConfig]
      }))
  }
})
