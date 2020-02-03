<template>
  <div class="main">
    <LayoutContainer>
      <RecentPost />
      <Pagination />
    </LayoutContainer>
  </div>
</template>
<script>
import RecentPost from '@theme/components/RecentPost'
import LayoutContainer from '@theme/components/LayoutContainer'
import Pagination from '@theme/components/Pagination'
export default {
  name: 'Layout',
  components: {
    RecentPost,
    LayoutContainer,
    Pagination
  },
  data () {
    return {}
  }
}
</script>
<style lang='stylus'>
</style>
