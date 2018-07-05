<template>
  <div class="hot-product">
    <div v-if="this.$store.state.loaded">
    <div v-for="(item, index) in sidebar" :key="index" class="product-hot-item">
      <div class="pro-hot-item-image">
        <img :src="item.picture[0].url" onerror="this.src = '/images/default.jpg'" />
      </div>
      <div class="pro-hot-item-text">
        <h4>
          <nuxt-link :title="item.name" :to="item.link_web">
            {{item.name}}
          </nuxt-link>
        </h4>
        <p class="price-same">
          {{item.price}} VNĐ
        </p>
      </div>
    </div>
    </div>
    <vue-content-loading v-if="!this.$store.state.loaded" width="100" height="500" primary="#eeeeee" secondary="#f7f7f7" speed="1">
      <rect x="0" y="0" rx="1" ry="1" width="40" height="40" />
      <rect x="41" y="5" rx="1" ry="1" width="59" height="4" />
      <rect x="41" y="10" rx="1" ry="1" width="59" height="4" />
      <rect x="41" y="15" rx="1" ry="1" width="40" height="4" />

      <rect x="0" y="41" rx="1" ry="1" width="40" height="40" />
      <rect x="41" y="46" rx="1" ry="1" width="59" height="4" />
      <rect x="41" y="51" rx="1" ry="1" width="59" height="4" />
      <rect x="41" y="56" rx="1" ry="1" width="40" height="4" />

      <rect x="0" y="82" rx="1" ry="1" width="40" height="40" />
      <rect x="41" y="87" rx="1" ry="1" width="59" height="4" />
      <rect x="41" y="92" rx="1" ry="1" width="59" height="4" />
      <rect x="41" y="97" rx="1" ry="1" width="40" height="4" />

      <rect x="0" y="123" rx="1" ry="1" width="40" height="40" />
      <rect x="41" y="128" rx="1" ry="1" width="59" height="4" />
      <rect x="41" y="133" rx="1" ry="1" width="59" height="4" />
      <rect x="41" y="138" rx="1" ry="1" width="40" height="4" />

      <rect x="0" y="164" rx="1" ry="1" width="40" height="40" />
      <rect x="41" y="169" rx="1" ry="1" width="59" height="4" />
      <rect x="41" y="174" rx="1" ry="1" width="59" height="4" />
      <rect x="41" y="179" rx="1" ry="1" width="40" height="4" />
    </vue-content-loading>
  </div>
</template>

<script>
  import VueContentLoading from "vue-content-loading"
    export default {
      props: ['sidebar'],
      components: {VueContentLoading},
      name: "SideBar"
    }
</script>

<style scoped>

</style>
