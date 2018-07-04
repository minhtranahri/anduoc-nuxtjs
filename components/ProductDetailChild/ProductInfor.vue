<template>
  <div class="introduce-product">
    <detail-image :product="product"></detail-image>
    <detail-infor :product="product"></detail-infor>
    <detail-description :product="product" :reviews="reviews"></detail-description>
  </div>

</template>

<script>
    import DetailImage from "./DetailInforChild/DeitalImage"
    import DetailInfor from "./DetailInforChild/DetailInfor"
    import DetailDescription from "./DetailInforChild/DetailDescription"
    import VueContentLoading from "vue-content-loading"

    export default {
        props: ['product', 'reviews'],
        name: "ProductDetail",
        components: {
          DetailImage,
          DetailInfor,
          DetailDescription,
          VueContentLoading
        },
        mounted(){
          //console.log(this.product);
        },
      // watch: {
      //   hots: function () {
      //     console.log(this.product[0].name)
      //   }
      // }
    }
</script>

<style scoped>

</style>
