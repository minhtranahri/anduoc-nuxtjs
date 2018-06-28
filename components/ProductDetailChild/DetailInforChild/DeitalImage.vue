<template>
  <div class="fistProductView">
    <div class="productImage" id="img-pro-full">
      <img :alt="product.name" :src="product.picture_full[0].url != undefined?product.picture_full[0].url:'/imgages/default.jpg'" onerror="this.src = '/images/default.jpg'"/>
    </div>
    <div class="productImageZoomItem" id="img-pro-thumb">
      <img :alt="product.name"
           :src="product.picture_thumb[0].url" onerror="this.src = '/images/default.jpg'"/>
    </div>
  </div>
</template>

<script>
    export default {
        props: ['product'],
        name: "DeitalImage"
    }
</script>

<style scoped>

</style>
