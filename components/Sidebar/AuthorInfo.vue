<template>
  <div
    class="author-info"
  >
    <div class="author-info__avatar text-center">
      <img
        :src="$themeConfig.avatar"
        alt="avatar"
      >
    </div>
    <div class="author-info__name text-center">
      {{ $themeConfig.author || 'No Name' }}
    </div>
    <div class="author-info__description text-center">
      {{ $site.description || '' }}
    </div>
    <div
      v-if="$themeConfig.follow && $themeConfig.follow.enable"
      class="follow-button"
    >
      <a :href="$themeConfig.follow.url">
        {{ $themeConfig.follow.text || 'Follow Me' }}
      </a>
    </div>
    <div class="melody-hr">
      <hr>
    </div>
    <div class="author-info-articles">
      <template v-if="$posts.length">
        <a
          :href="$withBase('/archives')"
          class="author-info-articles__archives article-meta"
        >
          <span class="pull-left">{{ $t('sidebar.articles') }}</span>
          <span class="pull-right">{{ $posts.length }}</span>
        </a>
      </template>
      <template v-if="$posts.length">
        <a
          :href="$withBase('/tags')"
          class="author-info-articles__tags article-meta"
        >
          <span class="pull-left">{{ $t('sidebar.tags') }}</span>
          <span class="pull-right">{{ $tags.length }}</span>
        </a>
      </template>
      <template v-if="$posts.length">
        <a
          :href="$withBase('/categories')"
          class="author-info-articles__categories article-meta"
        >
          <span class="pull-left">{{ $t('sidebar.categories') }}</span>
          <span class="pull-right">{{ $categories.length }}</span>
        </a>
      </template>
    </div>
    <template v-if="$themeConfig.links_title">
      <div class="melody-hr">
        <hr>
      </div>
      <div class="author-info-links">
        <div class="author-info-links__title text-center">
          {{ $themeConfig.links_title }}
        </div>
        <a
          v-for="(item, index) in sidebarLinks"
          :key="`${item.url}_${index}`"
          :href="item.url"
          class="author-info-links__name text-center"
          target="_blank"
        >
          {{ item.text }}
        </a>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: 'AuthorInfo',
  data () {
    return {
    }
  },
  computed: {
    sidebarLinks () {
      if (!this.$themeConfig.links) {
        return []
      } else {
        return this.obj2List(this.$themeConfig.links)
      }
    }
  }
}
</script>
<style lang='stylus'>
</style>
