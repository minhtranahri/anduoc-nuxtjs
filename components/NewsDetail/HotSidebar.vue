<template>
  <div class="hot-product-new">
    <div class="product-hot-col">
      <hgroup class="title_box_category_product">
        <h4><nuxt-link title="xem nhiều nhất" to=":;" class="first">Sản phẩm hot</nuxt-link></h4>
      </hgroup>
      <div v-if="this.$store.state.loaded">
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
      <vue-content-loading v-if="!this.$store.state.loaded" width="100" height="500" primary="#d8d2d2" secondary="#c1baba" speed="1">
        <rect x="0" y="0" rx="1.5" ry="1.5" width="40" height="40" />
        <rect x="41" y="5" rx="1.5" ry="1.5" width="59" height="4" />
        <rect x="41" y="10" rx="1.5" ry="1.5" width="59" height="4" />
        <rect x="41" y="15" rx="1.5" ry="1.5" width="40" height="4" />

        <rect x="0" y="41" rx="1.5" ry="1.5" width="40" height="40" />
        <rect x="41" y="46" rx="1.5" ry="1.5" width="59" height="4" />
        <rect x="41" y="51" rx="1.5" ry="1.5" width="59" height="4" />
        <rect x="41" y="56" rx="1.5" ry="1.5" width="40" height="4" />

        <rect x="0" y="82" rx="1.5" ry="1.5" width="40" height="40" />
        <rect x="41" y="87" rx="1.5" ry="1.5" width="59" height="4" />
        <rect x="41" y="92" rx="1.5" ry="1.5" width="59" height="4" />
        <rect x="41" y="97" rx="1.5" ry="1.5" width="40" height="4" />

        <rect x="0" y="123" rx="1.5" ry="1.5" width="40" height="40" />
        <rect x="41" y="128" rx="1.5" ry="1.5" width="59" height="4" />
        <rect x="41" y="133" rx="1.5" ry="1.5" width="59" height="4" />
        <rect x="41" y="138" rx="1.5" ry="1.5" width="40" height="4" />

        <rect x="0" y="164" rx="1.5" ry="1.5" width="40" height="40" />
        <rect x="41" y="169" rx="1.5" ry="1.5" width="59" height="4" />
        <rect x="41" y="174" rx="1.5" ry="1.5" width="59" height="4" />
        <rect x="41" y="179" rx="1.5" ry="1.5" width="40" height="4" />
      </vue-content-loading>
    </div>
    <div class="new-same-cate">
      <hgroup class="title_box_category">
        <h4><nuxt-link title="xem nhiều nhất" to=":;" class="first">Tin tức cùng chuyên mục</nuxt-link></h4>
      </hgroup>
      <div v-if="this.$store.state.loaded">
      <div v-for="(item2, index2) in hot.news_same" :key="index2" class="new-item">
        <p>
          <nuxt-link :to="item2.link_web" :title="item2.title">
            {{item2.title}}
          </nuxt-link>
        </p>
      </div>
      </div>
      <vue-content-loading v-if="!this.$store.state.loaded" width="100" height="500" primary="#d8d2d2" secondary="#c1baba" speed="1">
        <rect x="0" y="5" rx="1.5" ry="1.5" width="100" height="5" />
        <rect x="0" y="11" rx="1.5" ry="1.5" width="100" height="5" />
        <rect x="0" y="17" rx="1.5" ry="1.5" width="60" height="5" />

        <rect x="0" y="30" rx="1.5" ry="1.5" width="100" height="5" />
        <rect x="0" y="36" rx="1.5" ry="1.5" width="100" height="5" />
        <rect x="0" y="42" rx="1.5" ry="1.5" width="60" height="5" />

        <rect x="0" y="55" rx="1.5" ry="1.5" width="100" height="5" />
        <rect x="0" y="61" rx="1.5" ry="1.5" width="100" height="5" />
        <rect x="0" y="67" rx="1.5" ry="1.5" width="60" height="5" />

        <rect x="0" y="80" rx="1.5" ry="1.5" width="100" height="5" />
        <rect x="0" y="86" rx="1.5" ry="1.5" width="100" height="5" />
        <rect x="0" y="92" rx="1.5" ry="1.5" width="60" height="5" />

        <rect x="0" y="105" rx="1.5" ry="1.5" width="100" height="5" />
        <rect x="0" y="111" rx="1.5" ry="1.5" width="100" height="5" />
        <rect x="0" y="117" rx="1.5" ry="1.5" width="60" height="5" />
      </vue-content-loading>
    </div>
  </div>
</template>

<script>
  import VueContentLoading from "vue-content-loading"
    export default {
        props: ['hot'],
      components: {VueContentLoading},
        name: "HotSidebar"
    }
</script>

<style scoped>

</style>
