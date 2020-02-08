<template>
  <div id="global-layout">
    <Header />
    <Sidebar />
    <main>
      <transition name="fade">
        <component
          :is="layout"
          :key="$page.key"
        />
      </transition>
    </main>
    <NavIcon />
    <Footer />
  </div>
</template>

<script>
import Header from '@theme/components/Header'
import Footer from '@theme/components/Footer'
import NavIcon from '@theme/components/NavIcon'
import Sidebar from '@theme/components/Sidebar'
export default {
  components: {
    Header,
    Footer,
    NavIcon,
    Sidebar
  },
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>
<style lang="stylus">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
