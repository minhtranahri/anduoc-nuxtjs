<template>
  <div class="hot-product">
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
</template>

<script>
    export default {
        props: ['sidebar'],
        name: "SideBar"
    }
</script>

<style scoped>

</style>
