<template>
  <div class="hot-product-new">
    <div class="product-hot-col">
      <hgroup class="title_box_category_product">
        <h4><nuxt-link title="xem nhiều nhất" to=":;" class="first">Sản phẩm hot</nuxt-link></h4>
      </hgroup>
      <div v-for="(item, index) in hot.product" :key="index" class="product-hot-item">
        <div class="pro-hot-item-image">
          <img :src="item.picture[0].url" onerror="this.src = '/images/default.jpg'"/>
        </div>
        <div class="pro-hot-item-text">
          <h4>
            <nuxt-link :title="item.name"  :to="item.link_web">
              {{item.name}}
            </nuxt-link>
          </h4>
          <p class="price-same">
            {{item.price}} VNĐ
          </p>
        </div>
      </div>
    </div>
    <div class="new-same-cate">
      <hgroup class="title_box_category">
        <h4><nuxt-link title="xem nhiều nhất" to=":;" class="first">Tin tức cùng chuyên mục</nuxt-link></h4>
      </hgroup>
      <div v-for="(item2, index2) in hot.news_same" :key="index2" class="new-item">
        <p>
          <nuxt-link :to="item2.link_web" :title="item2.title">
            {{item2.title}}
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: ['hot'],
        name: "HotSidebar"
    }
</script>

<style scoped>

</style>
