<template>
  <div class="main">
    <Navbar />
    <Content />
  </div>
</template>
<script>
import Navbar from '@parent-theme/components/Navbar.vue'
export default {
  name: 'Layout',
  components: {
    Navbar
  },
  data () {
    return {}
  }
}
</script>
<style lang='stylus'>
</style>
