<template>
  <aside id="sidebar">
    <div class="author-info">
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
  </aside>
</template>

<script>
import bus from '@theme/utils/event/bus'
import {
  TOGGLE_SIDEBAR
} from '@theme/utils/event/list'
export default {
  name: 'Sidebar',
  data () {
    return {
      sidebarVisible: false
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
  },
  mounted () {
    bus.$on(TOGGLE_SIDEBAR, () => {
      if (!this.sidebarVisible) {
        anime({
          targets: '#sidebar',
          translateX: 300,
          duration: 200,
          easing: 'easeInOutSine'
        })
        anime({
          targets: 'body',
          paddingLeft: 300,
          duration: 200,
          easing: 'easeInOutSine'
        })
        anime({
          targets: '#toggle-sidebar',
          rotateZ: 180,
          duration: 200,
          easing: 'easeInOutSine',
          color: '#99a9bf'
        })
      } else {
        anime({
          targets: '#sidebar',
          translateX: 0,
          duration: 200,
          easing: 'easeInOutSine'
        })
        anime({
          targets: 'body',
          paddingLeft: 0,
          duration: 200,
          easing: 'easeInOutSine'
        })
        anime({
          targets: '#toggle-sidebar',
          rotateZ: 0,
          duration: 200,
          easing: 'easeInOutSine',
          color: '#1F2D3D'
        })
      }
      this.sidebarVisible = !this.sidebarVisible
    })
  },
  beforeDestroy () {
    bus.$off(TOGGLE_SIDEBAR)
  },
  methods: {}
}
</script>

<style lang="stylus">
.sidebar
  &-heading
    display none
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
  & > .sidebar-links
    padding 1.5rem 0
    & > li > a.sidebar-link
      font-size 1.1em
      line-height 1.7
      font-weight bold
    & > li:not(:first-child)
      margin-top .75rem

@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0
</style>
