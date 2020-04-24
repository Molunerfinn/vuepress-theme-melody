export default {
  install (Vue) {
    Vue.mixin({
      computed: {
        $isPost () {
          return this.$page && this.$page.id === 'posts'
        },
        $isHome () {
          return this.$route && this.$site && (this.$route.path === this.$site.base)
        },
        $posts () {
          return this.$site.pages.filter(item => item.id === 'posts')
        }
      },
      methods: {
        obj2List (obj) {
          return Object.keys(obj).map((key) => {
            return {
              text: key,
              url: obj[key]
            }
          })
        }
      }
    })
  }
}
