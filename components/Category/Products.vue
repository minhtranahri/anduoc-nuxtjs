<template>
  <div class="box-lis-product w100 fl">
    <div v-if="this.$store.state.loaded">
      <div v-for="(item, index) in products.content" :key="index" class="item-product w20  padding-5 fl" :data_pro_id="item.id">
        <div class="wrap-item-product w100 fl">
          <div :title="item.name" class="avatar-product w100 fl ">
            <nuxt-link :title="item.name" :to="item.link_web">
              <img :title="item.name" :src="typeof item.picture[0] !='undefined'?item.picture[0].url:'/images/default.jpg'" :alt="item.name"  onerror="this.src = '/images/default.jpg'">
            </nuxt-link>
          </div>
          <div :title="item.name" class="name-product w100 fl">
            <nuxt-link :title="item.name" :to="item.link_web">
              {{item.name}}
            </nuxt-link>
          </div>
          <div v-if="item.hot == true" class="product_favorite">
            <div class="content_favorite">
              <span class="tick-svg-icon icon-tick"><i class="mcon-check"></i></span>
              Yêu thích
            </div>
          </div>
          <div class="price-shipping-product w100 fl">
            <div class="price-product">
              <ins>₫{{item.price}}</ins>
            </div>
            <div class="shipping-svg-icon icon-free-shipping"></div>
          </div>
          <div class="rating-like">
            <div class="rating-like__wrap">
              <div class="like">
                <div class="shopee-svg-icon icon-like-2">
                  <i class="mcon-heart"></i>
                </div>
                <div class="number-like">1</div>
              </div>
              <div class="rating">
                <div class="shopee-rating-stars">
                  <div class="shopee-rating-stars__stars">
                    <div class="shopee-rating-stars__star-wrapper">
                      <div class="shopee-rating-stars__lit">
                        <i class="mcon-star active"></i>
                      </div>
                      <div class="shopee-rating-stars__lit">
                        <i class="mcon-star active"></i>
                      </div>
                      <div class="shopee-rating-stars__lit">
                        <i class="mcon-star active"></i>
                      </div>
                      <div class="shopee-rating-stars__lit">
                        <i class="mcon-star active"></i>
                      </div>
                      <div class="shopee-rating-stars__lit">
                        <i class="mcon-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="number-rating">(8)</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <vue-content-loading v-if="!this.$store.state.loaded" width="100" height="130" primary="#d8d2d2" secondary="#c1baba" speed="1">
      <rect x="0" y="0" rx="0.5" ry="0.5" width="19.2" height="18" />
        <rect x="0" y="19" rx="0.5" ry="0.5" width="19.2" height="3" />
        <rect x="0" y="23" rx="0.5" ry="0.5" width="19.2" height="1" />

      <rect x="20" y="0" rx="0.5" ry="0.5" width="19.2" height="18" />
        <rect x="20" y="19" rx="0.5" ry="0.5" width="19.2" height="3" />
        <rect x="20" y="23" rx="0.5" ry="0.5" width="19.2" height="1" />

      <rect x="40" y="0" rx="0.5" ry="0.5" width="19.2" height="18" />
        <rect x="40" y="19" rx="0.5" ry="0.5" width="19.2" height="3" />
        <rect x="40" y="23" rx="0.5" ry="0.5" width="19.2" height="1" />

      <rect x="60" y="0" rx="0.5" ry="0.5" width="19.2" height="18" />
        <rect x="60" y="19" rx="0.5" ry="0.5" width="19.2" height="3" />
        <rect x="60" y="23" rx="0.5" ry="0.5" width="19.2" height="1" />

      <rect x="80" y="0" rx="0.5" ry="0.5" width="19.2" height="18" />
        <rect x="80" y="19" rx="0.5" ry="0.5" width="19.2" height="3" />
        <rect x="80" y="23" rx="0.5" ry="0.5" width="19.2" height="1" />


      <rect x="0" y="26" rx="0.5" ry="0.5" width="19.2" height="18" />
        <rect x="0" y="45" rx="0.5" ry="0.5" width="19.2" height="3" />
        <rect x="0" y="49" rx="0.5" ry="0.5" width="19.2" height="1" />

      <rect x="20" y="26" rx="0.5" ry="0.5" width="19.2" height="18" />
        <rect x="20" y="45" rx="0.5" ry="0.5" width="19.2" height="3" />
        <rect x="20" y="49" rx="0.5" ry="0.5" width="19.2" height="1" />

      <rect x="40" y="26" rx="0.5" ry="0.5" width="19.2" height="18" />
        <rect x="40" y="45" rx="0.5" ry="0.5" width="19.2" height="3" />
        <rect x="40" y="49" rx="0.5" ry="0.5" width="19.2" height="1" />

      <rect x="60" y="26" rx="0.5" ry="0.5" width="19.2" height="18" />
        <rect x="60" y="45" rx="0.5" ry="0.5" width="19.2" height="3" />
        <rect x="60" y="49" rx="0.5" ry="0.5" width="19.2" height="1" />

      <rect x="80" y="26" rx="0.5" ry="0.5" width="19.2" height="18" />
        <rect x="80" y="45" rx="0.5" ry="0.5" width="19.2" height="3" />
        <rect x="80" y="49" rx="0.5" ry="0.5" width="19.2" height="1" />


      <rect x="0" y="52" rx="0.5" ry="0.5" width="19.2" height="18" />
      <rect x="0" y="71" rx="0.5" ry="0.5" width="19.2" height="3" />
      <rect x="0" y="75" rx="0.5" ry="0.5" width="19.2" height="1" />

      <rect x="20" y="52" rx="0.5" ry="0.5" width="19.2" height="18" />
      <rect x="20" y="71" rx="0.5" ry="0.5" width="19.2" height="3" />
      <rect x="20" y="75" rx="0.5" ry="0.5" width="19.2" height="1" />

      <rect x="40" y="52" rx="0.5" ry="0.5" width="19.2" height="18" />
      <rect x="40" y="71" rx="0.5" ry="0.5" width="19.2" height="3" />
      <rect x="40" y="75" rx="0.5" ry="0.5" width="19.2" height="1" />

      <rect x="60" y="52" rx="0.5" ry="0.5" width="19.2" height="18" />
      <rect x="60" y="71" rx="0.5" ry="0.5" width="19.2" height="3" />
      <rect x="60" y="75" rx="0.5" ry="0.5" width="19.2" height="1" />

      <rect x="80" y="52" rx="0.5" ry="0.5" width="19.2" height="18" />
      <rect x="80" y="71" rx="0.5" ry="0.5" width="19.2" height="3" />
      <rect x="80" y="75" rx="0.5" ry="0.5" width="19.2" height="1" />


      <rect x="0" y="78" rx="0.5" ry="0.5" width="19.2" height="18" />
      <rect x="0" y="97" rx="0.5" ry="0.5" width="19.2" height="3" />
      <rect x="0" y="101" rx="0.5" ry="0.5" width="19.2" height="1" />

      <rect x="20" y="78" rx="0.5" ry="0.5" width="19.2" height="18" />
      <rect x="20" y="97" rx="0.5" ry="0.5" width="19.2" height="3" />
      <rect x="20" y="101" rx="0.5" ry="0.5" width="19.2" height="1" />

      <rect x="40" y="78" rx="0.5" ry="0.5" width="19.2" height="18" />
      <rect x="40" y="97" rx="0.5" ry="0.5" width="19.2" height="3" />
      <rect x="40" y="101" rx="0.5" ry="0.5" width="19.2" height="1" />

      <rect x="60" y="78" rx="0.5" ry="0.5" width="19.2" height="18" />
      <rect x="60" y="97" rx="0.5" ry="0.5" width="19.2" height="3" />
      <rect x="60" y="101" rx="0.5" ry="0.5" width="19.2" height="1" />

      <rect x="80" y="78" rx="0.5" ry="0.5" width="19.2" height="18" />
      <rect x="80" y="97" rx="0.5" ry="0.5" width="19.2" height="3" />
      <rect x="80" y="101" rx="0.5" ry="0.5" width="19.2" height="1" />


      <rect x="0" y="104" rx="0.5" ry="0.5" width="19.2" height="18" />
      <rect x="0" y="123" rx="0.5" ry="0.5" width="19.2" height="3" />
      <rect x="0" y="127" rx="0.5" ry="0.5" width="19.2" height="1" />

      <rect x="20" y="104" rx="0.5" ry="0.5" width="19.2" height="18" />
      <rect x="20" y="123" rx="0.5" ry="0.5" width="19.2" height="3" />
      <rect x="20" y="127" rx="0.5" ry="0.5" width="19.2" height="1" />

      <rect x="40" y="104" rx="0.5" ry="0.5" width="19.2" height="18" />
      <rect x="40" y="123" rx="0.5" ry="0.5" width="19.2" height="3" />
      <rect x="40" y="127" rx="0.5" ry="0.5" width="19.2" height="1" />

      <rect x="60" y="104" rx="0.5" ry="0.5" width="19.2" height="18" />
      <rect x="60" y="123" rx="0.5" ry="0.5" width="19.2" height="3" />
      <rect x="60" y="127" rx="0.5" ry="0.5" width="19.2" height="1" />

      <rect x="80" y="104" rx="0.5" ry="0.5" width="19.2" height="18" />
      <rect x="80" y="123" rx="0.5" ry="0.5" width="19.2" height="3" />
      <rect x="80" y="127" rx="0.5" ry="0.5" width="19.2" height="1" />
    </vue-content-loading>
  </div>
</template>

<script>
  import VueContentLoading from "vue-content-loading"
    export default {
        props: ['products'],
        name: "Products",
      components: {VueContentLoading}
    }
</script>

<style scoped>

</style>
