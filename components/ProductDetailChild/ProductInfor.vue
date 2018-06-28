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

    export default {
        props: ['product', 'reviews'],
        name: "ProductDetail",
        components: {
          DetailImage,
          DetailInfor,
          DetailDescription
        },
        mounted(){
          //console.log(this.product);
        }
    }
</script>

<style scoped>

</style>
