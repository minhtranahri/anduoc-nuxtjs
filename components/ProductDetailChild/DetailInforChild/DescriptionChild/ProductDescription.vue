<template>
  <div class="information-result">
    <div class="information-result-title">
      <span> Thông tin chi tiết</span>
    </div>
    <div v-if="this.$store.state.loaded" class="information-result-content" v-html="product.description">
    </div>
    <!--<a href="javascript:void(0)" class="view-all-detail" title="Xem thêm sản phẩm" rel="nofollow"-->
       <!--onclick="viewAllInfomationContent()">Xem thêm</a>-->
    <vue-content-loading v-if="!this.$store.state.loaded" width="100" height="100" primary="#eeeeee" secondary="#f7f7f7" speed="1">
      <rect x="0" y="0" rx="0.5" ry="0.5" width="100" height="1" />
      <rect x="0" y="1.5" rx="0.5" ry="0.5" width="100" height="1" />
      <rect x="0" y="3" rx="0.5" ry="0.5" width="100" height="1" />
      <rect x="0" y="4.5" rx="0.5" ry="0.5" width="100" height="1" />
      <rect x="0" y="6" rx="0.5" ry="0.5" width="60" height="1" />
      <rect x="25" y="8" rx="0.5" ry="0.5" width="50" height="50" />

      <rect x="0" y="59" rx="0.5" ry="0.5" width="100" height="1" />
      <rect x="0" y="60.5" rx="0.5" ry="0.5" width="100" height="1" />
      <rect x="0" y="62" rx="0.5" ry="0.5" width="60" height="1" />
      <rect x="25" y="64" rx="0.5" ry="0.5" width="50" height="50" />
    </vue-content-loading>
  </div>
</template>

<script>
  import VueContentLoading from "vue-content-loading"
    export default {
        props: ['product'],
        name: "ProductDescription",
      components: {VueContentLoading}
    }
</script>

<style scoped>

</style>
