<template>
  <div class="box-lis-product w100 fl">
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
</template>

<script>
    export default {
        props: ['products'],
        name: "Products"
    }
</script>

<style scoped>

</style>
