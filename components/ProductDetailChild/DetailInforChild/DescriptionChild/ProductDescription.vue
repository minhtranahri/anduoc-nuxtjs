<template>
  <div class="information-result">
    <div class="information-result-title">
      <span> Thông tin chi tiết</span>
    </div>
    <div class="information-result-content" v-html="product.description">

    </div>
    <a href="javascript:void(0)" class="view-all-detail" title="Xem thêm sản phẩm" rel="nofollow"
       onclick="viewAllInfomationContent()">Xem thêm</a>
  </div>
</template>

<script>
    export default {
        props: ['product'],
        name: "ProductDescription"
    }
</script>

<style scoped>

</style>
