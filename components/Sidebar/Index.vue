<template>
  <aside id="sidebar">
    <transition
      name="fade"
    >
      <template
        v-if="renderToc"
      >
        <div
          :data-text="toggleTocButtonText"
          class="toggle-sidebar-info text-center"
          @click="toggleToc"
        >
          <i :class="['fas', currentIconName, 'toggle-icon']" />
        </div>
        <template />
      </template>
    </transition>
    <transition
      :css="false"
      mode="out-in"
      @enter="enter"
      @leave="leave"
    >
      <keep-alive>
        <component :is="currentComponentName" />
      </keep-alive>
    </transition>
  </aside>
</template>

<script>
import bus from '@theme/utils/event/bus'
import SidebarToc from '@theme/components/Sidebar/SidebarToc'
import AuthorInfo from '@theme/components/Sidebar/AuthorInfo'
import {
  TOGGLE_SIDEBAR,
  CALC_READING_PERCENT
} from '@theme/utils/event/list'
export default {
  name: 'Sidebar',
  components: {
    SidebarToc,
    AuthorInfo
  },
  data () {
    return {
      sidebarVisible: false,
      transitionDirection: 'left2Right',
      showTocSidebar: true
    }
  },
  computed: {
    currentIconName () {
      if (this.transitionDirection === 'left2Right') {
        return 'fa-angle-double-right'
      } else {
        return 'fa-angle-double-left'
      }
    },
    currentComponentName () {
      if (this.showAuthorInfo) {
        return 'AuthorInfo'
      } else {
        bus.$emit(CALC_READING_PERCENT)
        return 'SidebarToc'
      }
    },
    showAuthorInfo () {
      return !(this.renderToc && this.showTocSidebar)
    },
    toggleTocButtonText () {
      return this.showTocSidebar ? this.$t('sidebar.toggle_site') : this.$t('sidebar.toggle_article')
    },
    renderToc () {
      return this.$isPost && this.$themeConfig.toc && this.$themeConfig.toc.enable
    }
  },
  watch: {
    $page (newVal, oldVal) {
      if (newVal.id === 'posts') {
        this.showTocSidebar = true
      }
    }
  },
  mounted () {
    this.showTocSidebar = this.$page && this.$page.id === 'posts'
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
  methods: {
    toggleTransitionDirection () {
      if (this.transitionDirection === 'left2Right') {
        this.transitionDirection = 'right2Left'
      } else {
        this.transitionDirection = 'left2Right'
      }
    },
    toggleToc () {
      this.showTocSidebar = !this.showTocSidebar
    },
    enter (el, done) {
      let translateX
      if (this.transitionDirection === 'left2Right') {
        translateX = [-200, 0]
      } else {
        translateX = [200, 0]
      }
      anime({
        targets: el,
        opacity: [0, 1],
        translateX: translateX,
        easing: 'easeInOutSine',
        duration: 400,
        complete: done
      })
      this.toggleTransitionDirection()
    },
    leave (el, done) {
      let translateX
      if (this.transitionDirection === 'left2Right') {
        translateX = [0, 200]
      } else {
        translateX = [0, -200]
      }
      anime({
        targets: el,
        opacity: [1, 0],
        translateX: translateX,
        easing: 'easeInOutSine',
        duration: 300,
        complete: done
      })
    }
  }
}
</script>

<style lang="stylus">
</style>
