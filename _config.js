module.exports = {
  // theme_color: {
  //   enable: true,
  //   main: '#49B1F5',
  //   paginator: '#00C4B6',
  //   button_hover: '#FF7242',
  //   text_selection: '#00C4B6',
  //   link_color: '#858585',
  //   hr_color: '#A4D8FA',
  //   tag_start_color: '#A4D8FA',
  //   tag_end_color: '#1B9EF3',
  //   header_text_color: '#EEEEEE',
  //   footer_text_color: '#EEEEEE'
  // },
  menu: {
    Home: '/',
    Archives: '/archives',
    Tags: '/tags',
    Categories: '/categories'
  },
  favicon: '/melody-favicon.ico',
  pwa: {
    enable: false,
    manifest: '/manifest.json'
  },
  highlight_theme: 'default',
  algolia_search: {
    enable: false,
    hits: {
      per_page: 10
    }
  },
  local_search: {
    enable: false
  },
  mathjax: {
    enable: false,
    cdn: 'https://cdn.jsdelivr.net/npm/mathjax/MathJax.js?config=TeX-AMS-MML_HTMLorMML'
  },
  katex: {
    enable: false,
    cdn: {
      css: 'https://cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.css'
    },
    hide_scrollbar: true
  },
  fireworks: false,
  baidu_analytics: null,
  google_analytics: null,
  tencent_analytics: null,
  stylesheets: [
    '/css/index.css'
  ],
  scripts: [
    '/js/utils.js',
    '/js/fancybox.js',
    '/js/sidebar.js',
    '/js/copy.js',
    '/js/fireworks.js',
    '/js/transition.js',
    '/js/scroll.js',
    '/js/head.js'
  ],
  avatar: '',
  top_img: true,
  top_img_height: 60,
  post_meta: {
    date_type: 'created',
    categories: true,
    tags: true
  },
  wordcount: {
    enable: false
  },
  toc: {
    enable: true
  },
  post_copyright: {
    enable: true,
    license: 'CC BY-NC-SA 4.0',
    license_url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/'
  },
  slide: {
    separator: '---',
    separator_vertical: '--',
    charset: 'utf-8',
    theme: 'black',
    mouseWheel: false,
    transition: 'slide',
    transitionSpeed: 'default',
    parallaxBackgroundImage: '',
    parallaxBackgroundSize: '',
    parallaxBackgroundHorizontal: null,
    parallaxBackgroundVertical: null
  },
  addThis: {
    enable: false
  },
  disqus: {
    enable: false
  },
  since: 2013,
  ICP: {
    enable: false
  },
  busuanzi: {
    enable: true,
    site_uv: true,
    site_uv_header: '<i class="fa fa-user"></i>',
    site_uv_footer: null,
    site_pv: true,
    site_pv_header: '<i class="fa fa-eye"></i>',
    site_pv_footer: null,
    page_pv: true,
    page_pv_header: '<i class="fa fa-file"></i>',
    page_pv_footer: null
  },
  canvas_ribbon: {
    enable: false,
    size: 150,
    alpha: 0.6,
    zIndex: -1,
    click_to_change: false
  },
  sidebar_display: 'post',
  google_adsense: {
    enable: false,
    js: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    client: 'ca-pub-...........',
    enable_page_level_ads: true
  },
  google_site_verification: null,
  bing_site_verification: null,
  baidu_site_verification: null,
  qihu_site_verification: null,
  disable_baidu_transformation: true,
  '404Text': '404 Page Not Found'
}
