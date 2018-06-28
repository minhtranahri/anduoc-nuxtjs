<template>
  <div class="info-product">
    <product-description :product="product"></product-description>
    <div class="product-evaluate">
      <div class="product-evaluate-title">
        <h3>Đánh giá sản phẩm</h3>
      </div>
    </div>
    <product-reviews :reviews="reviews" :products="product"></product-reviews>
  </div>
</template>

<script>
    import ProductDescription from "./DescriptionChild/ProductDescription";
    import ProductReviews from "./DescriptionChild/ProductReviews";

    export default {
        props: ['product', 'reviews'],
        name: "DetailDescription",
        components: {ProductReviews, ProductDescription},
    }
</script>

<style scoped>

</style>
