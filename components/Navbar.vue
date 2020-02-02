<template>
  <nav id="page-nav">
    <span class="pull-left">
      <router-link
        id="site-name"
        :to="$withBase('/')"
      >
        {{ $site.title }}
      </router-link>
    </span>
    <i
      class="fa fa-bars toggle-menu pull-right"
      aria-hidden="true"
    />
    <span class="pull-right menus">
      <router-link
        v-for="item in menus"
        :key="item.link"
        :to="$withBase(item.link)"
        class="site-page"
      >
        {{ item.text }}
      </router-link>
    </span>
    <span
      v-if="search"
      class="pull-right"
    >
      <a class="site-page social-icon search">
        <i class="fa fa-search" />
        <span>搜索</span>
      </a>
    </span>
  </nav>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      title: '',
      search: false
    }
  },
  computed: {
    menus () {
      if (this.$themeConfig.menu) {
        return Object.keys(this.$themeConfig.menu).map(key => {
          return {
            text: key,
            link: this.$themeConfig.menu[key]
          }
        })
      } else if (this.$themeConfig.nav) {
        return this.$themeConfig.nav
      } else {
        return [
          {
            text: 'Home',
            link: '/'
          },
          {
            text: 'Tags',
            link: '/tags/'
          }
        ]
      }
    }
  }
}
</script>
<style lang='stylus'>
</style>
