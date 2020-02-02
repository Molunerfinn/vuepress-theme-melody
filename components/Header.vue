<template>
  <header
    id="page-header"
    :class="[flag]"
    :style="[bgImg]"
  >
    <Navbar />
    <div id="site-info">
      <div id="site-title">
        {{ $site.title }}
      </div>
      <div id="site-sub-title">
        {{ $themeConfig.subtitle }}
      </div>
      <div
        v-if="$themeConfig.social"
        id="site-social-icons"
      >
        <a
          v-for="item in socialIcons"
          :key="item.link"
          :href="item.link"
          target="_blank"
          rel="noreferrer noopener,nofollow"
          class="social-icon"
        >
          <i :class="[`fa-${item.icon}`]" />
        </a>
      </div>
    </div>
  </header>
</template>
<script>
import Navbar from '@theme/components/Navbar'
export default {
  name: 'Header',
  components: {
    Navbar
  },
  computed: {
    socialIcons () {
      if (this.$themeConfig.social) {
        return Object.keys(this.$themeConfig.social).map(key => {
          return {
            icon: key,
            link: this.$themeConfig.social[key]
          }
        })
      } else {
        return []
      }
    },
    flag () {
      return this.topImg === true ? 'no-bg' : ''
    },
    topImg () {
      if (this.$page && this.$page.frontmatter && this.$page.frontmatter.top_img !== undefined) {
        return this.$page.frontmatter.top_img
      } else if (this.$themeConfig.top_img !== undefined) {
        return this.$themeConfig.top_img
      } else {
        return true
      }
    },
    bgImg () {
      if (this.topImg === true) {
        return ''
      } else {
        return `background-image: url(${this.topImg})`
      }
    }
  }
}
</script>
<style lang='stylus'>
</style>
