<template>
  <div class="fistProductView">
    <div v-if="this.$store.state.loaded" class="productImage" id="img-pro-full">
      <img :alt="product.name" :src="product.picture_full[0].url != undefined?product.picture_full[0].url:'/imgages/default.jpg'" onerror="this.src = '/images/default.jpg'"/>
    </div>
    <div v-if="this.$store.state.loaded" class="productImageZoomItem" id="img-pro-thumb">
      <img :alt="product.name"
           :src="product.picture_thumb[0].url" onerror="this.src = '/images/default.jpg'"/>
    </div>
    <vue-content-loading v-if="!this.$store.state.loaded" width="100" height="135" primary="#eeeeee" secondary="#f7f7f7" speed="1">
      <rect x="0" y="0" rx="3" ry="3" width="100" height="100" />
      <rect x="0" y="101" rx="3" ry="3" width="33" height="30" />
      <rect x="34" y="101" rx="3" ry="3" width="33" height="30" />
      <rect x="68" y="101" rx="3" ry="3" width="33" height="30" />
    </vue-content-loading>
  </div>
</template>

<script>
  import VueContentLoading from "vue-content-loading"
    export default {
        props: ['product'],
        name: "DeitalImage",
      components: {VueContentLoading}
    }
</script>

<style scoped>

</style>
