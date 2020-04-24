<template>
  <ol class="toc">
    <li
      v-for="(item) in tocList"
      :key="`${item.level}_${item.slug}`"
      class="toc-item"
    >
      <a
        :href="`#${item.slug}`"
        class="toc-link"
      >
        {{ item.title }}
      </a>
      <Toc
        v-if="item.children"
        :toc-list="item.children"
      />
    </li>
  </ol>
</template>
<script>
export default {
  name: 'Toc',
  props: {
    tocList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style lang='stylus'>
</style>
