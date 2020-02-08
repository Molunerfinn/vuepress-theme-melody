<template>
  <footer
    :class="[flag]"
    :style="[bgImg]"
  >
    <div
      id="footer"
      class="layout"
    >
      <div class="copyright">
        {{ copyright }}
      </div>
      <div class="framework-info">
        <span>{{ $t('footer.driven') }} - </span>
        <a
          target="_blank"
          href="https://github.com/vuejs/vuepress"
        >
          <span>VuePress</span>
        </a>
        <span class="footer-separator">|</span>
        <span>{{ $t('footer.theme') }} - </span>
        <a
          target="_blank"
          href="https://github.com/Molunerfinn/vuepress-theme-melody"
        >
          <span>Melody</span>
        </a>
        <template>
          <div
            class="footer-custom-text"
            v-html="$themeConfig.footer_custom_text"
          />
        </template>
      </div>
      <template v-if="$themeConfig.busuanzi && $themeConfig.busuanzi.enable">
        <Busuanzi />
      </template>
    </div>
  </footer>
</template>
<script>
import Busuanzi from '@theme/components/PVUV/Busuanzi'
export default {
  name: 'Footer',
  components: {
    Busuanzi
  },
  data () {
    return {
      nowYear: new Date().getFullYear()
    }
  },
  computed: {
    copyright () {
      if (this.$themeConfig.since && this.$themeConfig.since !== this.nowYear) {
        return `©${this.$themeConfig.since} - ${this.nowYear} By ${this.$themeConfig.author}`
      } else {
        return `©${this.nowYear} By ${this.$themeConfig.author}`
      }
    },
    flag () {
      return this.bgImg ? 'footer-bg' : ''
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
