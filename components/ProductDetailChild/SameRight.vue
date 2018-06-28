<template>
  <div class="same-pro-right">
    <div class="similar-product">
      <h3>Sản phẩm tương tự</h3>
      <div v-for="(item, index) in same" :key="index" class="similar-product-item">
        <nuxt-link :title="item.name" :to="item.link_web">
          <img :alt="item.name"
               class="img-pro-same"
               :src="item.picture[0].url != undefined?item.picture[0].url:'/images/default.jpg'" onerror="this.src = '/images/default.jpg'"/>
        </nuxt-link>
        <!--<img class="img-pro-hot-same" src="../assets/images/hot.gif"/>-->
        <p class="price-same">
          {{item.price}}
        </p>
        <h4>
          <nuxt-link :title="item.name"
             :to="item.link_web">{{item.name}}</nuxt-link>
        </h4>

      </div>
    </div>
    <div class="lastProductView">
    </div>
  </div>
</template>

<script>
    export default {
        props: ['same'],
        name: "SameRight"
    }
</script>

<style scoped>

</style>
