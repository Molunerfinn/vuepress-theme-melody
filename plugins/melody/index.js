const path = require('path')
const fs = require('fs')
const supportList = {
  default: 'default',
  'en-US': 'en-US',
  'zh-Hans': 'zh-Hans'
}
module.exports = (options, ctx) => {
  const headLinks = []
  headLinks.push([
    'link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@latest/css/all.min.css' }
  ])
  headLinks.push([
    'script', {
      async: true,
      src: 'https://cdn.jsdelivr.net/npm/animejs@3.1.0/lib/anime.min.js'
    }
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
  // i18n support
  let lang = ctx.themeConfig.lang || supportList.default
  if (!supportList[lang]) {
    lang = supportList.default
  }
  const TEMPLATE = fs.readFileSync(path.join(__dirname, '../../utils/i18n/languages', `${lang}.json`), { encoding: 'utf-8' })
  return {
    name: 'melody',
    define: {
      TEMPLATE
    }
  }
}
