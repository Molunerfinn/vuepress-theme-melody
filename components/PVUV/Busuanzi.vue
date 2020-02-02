<template>
  <div class="busuanzi">
    <template v-if="isPost && $themeConfig.busuanzi.page_uv">
      <span
        id="busuanzi_container_page_uv"
      >
        <span v-html="$themeConfig.busuanzi.page_uv_header" />
        <span id="busuanzi_value_page_uv" />
        <span v-html="$themeConfig.busuanzi.page_uv_footer" />
      </span>
    </template>
    <template v-else>
      <template v-if="$themeConfig.busuanzi.site_uv">
        <span
          id="busuanzi_container_site_uv"
        >
          <span v-html="$themeConfig.busuanzi.site_uv_header" />
          <span id="busuanzi_value_site_uv" />
          <span v-html="$themeConfig.busuanzi.site_uv_footer" />
        </span>
      </template>
      <template v-if="$themeConfig.busuanzi.site_pv">
        <span class="footer-separator">|</span>
        <span
          id="busuanzi_container_site_pv"
        >
          <span v-html="$themeConfig.busuanzi.site_pv_header" />
          <span id="busuanzi_value_site_pv" />
          <span v-html="$themeConfig.busuanzi.site_pv_footer" />
        </span>
      </template>
    </template>
  </div>
</template>
<script>
export default {
  name: 'Busuanzi',
  computed: {
    isPost () {
      return this.$page && this.$page.id === 'post'
    }
  }
}
</script>
<style lang='stylus'>
</style>
