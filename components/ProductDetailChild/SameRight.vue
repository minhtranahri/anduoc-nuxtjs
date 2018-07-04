<template>
  <div class="same-pro-right">
    <div v-if="this.$store.state.loaded" class="similar-product">
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
    <vue-content-loading v-if="!this.$store.state.loaded" width="100" height="400" primary="#d8d2d2" secondary="#c1baba" speed="1">
      <rect x="3" y="0" rx="3" ry="3" width="97" height="70" />
      <rect x="20" y="73" rx="3" ry="3" width="60" height="5" />
      <rect x="3" y="81.5" rx="3" ry="3" width="97" height="3.5" />
      <rect x="3" y="86" rx="3" ry="3" width="97" height="3.5" />
      <rect x="25" y="90.5" rx="3" ry="3" width="50" height="3.5" />

      <rect x="3" y="97.5" rx="3" ry="3" width="97" height="70" />
      <rect x="20" y="170.5" rx="3" ry="3" width="60" height="5" />
      <rect x="3" y="179" rx="3" ry="3" width="97" height="3.5" />
      <rect x="3" y="183.5" rx="3" ry="3" width="97" height="3.5" />
      <rect x="25" y="188" rx="3" ry="3" width="50" height="3.5" />

      <rect x="3" y="195" rx="3" ry="3" width="97" height="70" />
      <rect x="20" y="268" rx="3" ry="3" width="60" height="5" />
      <rect x="3" y="276.5" rx="3" ry="3" width="97" height="3.5" />
      <rect x="3" y="281" rx="3" ry="3" width="97" height="3.5" />
      <rect x="25" y="285.5" rx="3" ry="3" width="50" height="3.5" />
    </vue-content-loading>

    <div class="lastProductView">
    </div>
  </div>
</template>

<script>
  import VueContentLoading from "vue-content-loading"
    export default {
        props: ['same'],
      components: {VueContentLoading},
        name: "SameRight"
    }
</script>

<style scoped>

</style>
