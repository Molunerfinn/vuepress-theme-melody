<template>
  <div class="main">
    <Navbar />
    <Sidebar
      :items="sidebarItems"
    />
    <main class="open-sidebar">
      <Content class="melody-content" />
    </main>
  </div>
</template>
<script>
import Navbar from '@parent-theme/components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import { resolveSidebarItems } from '@parent-theme/util'
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar
  },
  data () {
    return {}
  },
  computed: {
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    }
  }
}
</script>
<style lang='stylus'>
</style>
