<template>
  <nav id="pagination">
    <component
      :is="comp"
      v-if="comp"
      :value="page"
      :page-count="$pagination.length"
      :click-handler="clickCallback"
      prev-text="<i class='fa fa-chevron-left'></i>"
      next-text="<i class='fa fa-chevron-right'></i>"
      :container-class="'melody-pagination'"
      :page-class="'page-number'"
    />
  </nav>
</template>

<script>
export default {
  data () {
    return {
      comp: null
    }
  },
  computed: {
    page () {
      return this.$pagination.paginationIndex + 1
    }
  },
  mounted () {
    /* eslint-disable */
    import(/* webpackChunkName: "vuejs-paginate" */ 'vuejs-paginate').then(
      comp => {
        this.comp = comp.default;
      }
    );
  },
  methods: {
    clickCallback(pageNum) {
      const link = this.$pagination.getSpecificPageLink(pageNum - 1);
      this.$router.push(link);
    },
  },
};
</script>