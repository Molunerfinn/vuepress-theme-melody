const get = require('lodash/get')
const merge = require('lodash/merge')
module.exports = (options, ctx) => ({
  chainWebpack (config) {
    const defineConfig = style => {
      style.define('theme-config', data => {
        return get(ctx.themeConfig, data.val)
      })
    }
    config.module
      .rule('stylus')
      .test(/\.styl(us)?$/)
      .oneOf('modules')
      .resourceQuery(/module/)
      .use('stylus-loader')
      .tap(options => merge(options, {
        use: [ defineConfig ]
      }))
  }
})
