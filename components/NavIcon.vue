<template>
  <div class="nav-icons">
    <i
      id="toggle-sidebar"
      class="fa fa-arrow-right"
      @click="toggleSidebar"
    />
    <i
      id="go-up"
      class="fa fa-arrow-up"
    />
  </div>
</template>
<script>
import bus from '@theme/utils/event/bus'
import {
  TOGGLE_SIDEBAR
} from '@theme/utils/event/list'
export default {
  name: '',
  data () {
    return {
    }
  },
  methods: {
    toggleSidebar () {
      bus.$emit(TOGGLE_SIDEBAR)
    }
  }
}
</script>
<style lang='stylus'>
</style>
