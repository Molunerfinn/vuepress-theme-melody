<template>
  <div class="main">
    <Header />
    <LayoutContainer>
      <RecentPost />
      <Pagination />
    </LayoutContainer>
    <Footer />
  </div>
</template>
<script>
import Header from '@theme/components/Header'
import RecentPost from '@theme/components/RecentPost'
import LayoutContainer from '@theme/components/LayoutContainer'
import Footer from '@theme/components/Footer'
import Pagination from '@theme/components/Pagination'
export default {
  name: 'Layout',
  components: {
    Header,
    RecentPost,
    LayoutContainer,
    Footer,
    Pagination
  },
  data () {
    return {}
  }
}
</script>
<style lang='stylus'>
</style>
