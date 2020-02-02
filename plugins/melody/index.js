module.exports = (options, ctx) => {
  const headLinks = []
  headLinks.push([
    // 'link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@latest/css/all.min.css' }
    'link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css' }
  ])
  if (ctx.themeConfig.busuanzi && ctx.themeConfig.busuanzi.enable) {
    headLinks.push([
      'script', {
        async: true,
        src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
      }
    ])
  }
  if (!ctx.siteConfig.head) {
    ctx.siteConfig.head = []
  }
  ctx.siteConfig.head = ctx.siteConfig.head.concat(headLinks)
  // themeConfig cannot be modified
  return {}
}
