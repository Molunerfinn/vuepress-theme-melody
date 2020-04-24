<template>
  <div class="sidebar-toc">
    <div class="sidebar-toc__title">
      {{ $t('sidebar.catalog') }}
    </div>
    <div class="sidebar-toc__progress">
      <span class="progress-notice">
        {{ $t('sidebar.have_read') }}
      </span>
      <span class="progress-num">
        {{ readPercent }} %
      </span>
      <span class="sidebar-toc__progress-bar" />
    </div>
    <Toc :toc-list="tocList" />
  </div>
</template>
<script>
import bus from '@theme/utils/event/bus'
import Toc from '@theme/components/Sidebar/Toc'
import { getDom } from '@theme/utils/dom.js'
import {
  CALC_READING_PERCENT
} from '@theme/utils/event/list'
export default {
  name: 'SidebarToc',
  components: {
    Toc
  },
  data () {
    return {
      readPercent: 0,
      animateReadPercent: 0
    }
  },
  computed: {
    tocList () {
      if (this.$page && this.$page.headers) {
        const headers = this.$page.headers
        return this.handleTocList(headers.slice())
      } else {
        return []
      }
    }
  },
  mounted () {
    bus.$on(CALC_READING_PERCENT, this.calculateReadPercent)
    window.addEventListener('scroll', this.calculateReadPercent)
  },
  beforeDestroy () {
    console.log(321)
  },
  methods: {
    calculateReadPercent () {
      this.$nextTick(() => {
        const windowScroll = window.scrollY
        console.log(windowScroll)
        const bodyHeight = document.body.offsetHeight
        const contentDom = getDom('.melody-content.content__default')
        const windowHeight = window.innerHeight
        const contentHeight = contentDom.offsetHeight
        const calcContentHeight = contentHeight > windowHeight ? contentHeight - windowHeight : bodyHeight - windowHeight
        const scrollPercent = windowScroll / calcContentHeight
        const scrollPercentRounded = Math.round(scrollPercent * 100)
        // const offsetY = windowScroll - contentTop
        // console.log(offsetY, contentDom.getBoundingClientRect())
        this.readPercent = (scrollPercentRounded > 100) ? 100
          : (scrollPercentRounded <= 0) ? 0
            : scrollPercentRounded
        // if (offsetY < 0) {
        //   this.readPercent = 0
        // } else {
        //   if (offsetY > contentHeight) {
        //     this.readPercent = 100
        //   } else {
        //     this.readPercent = Math.floor((offsetY / contentHeight) * 100)
        //   }
        // }
      })
    },
    handleTocListCore (list) {
      if (list.length === 0) {
        return null
      } else if (list.length === 1) {
        return list
      }
      const res = []
      const currentMinLevel = Math.min(...list.map(item => item.level))
      const currentIndexList = this.findIndexOfLevel(list, currentMinLevel)
      for (let i = 0; i < currentIndexList.length; i++) {
        let currentItem
        if (i === 0 && currentIndexList[0] && currentIndexList[0].index > 0) {
          currentItem = this.handleTocListCore(list.slice(0, currentIndexList[i].index))
          res.push(...currentItem)
        }
        currentItem = currentIndexList[i]
        let child
        if (i < currentIndexList.length - 1) {
          child = this.handleTocListCore(list.slice(currentIndexList[i].index + 1, currentIndexList[i + 1].index))
        } else {
          child = this.handleTocListCore(list.slice(currentIndexList[currentIndexList.length - 1].index + 1, list.length))
        }
        if (child) {
          currentItem.children = child
        }
        res.push(currentItem)
      }
      return res
    },
    handleTocList (list) {
      if (list.length <= 1) {
        return list
      } else {
        return this.handleTocListCore(list)
      }
    },
    findIndexOfLevel (list, level) {
      const res = []
      for (let i = 0; i < list.length; i++) {
        if (list[i].level === level) {
          list[i].index = i
          res.push(list[i])
        }
      }
      return res
    }
  }
}
</script>
<style lang='stylus'>
</style>
