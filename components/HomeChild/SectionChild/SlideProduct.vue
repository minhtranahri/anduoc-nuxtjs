<template>
  <div id="slide-product" class="g1180">
    <div id="slide-product-title">
      <p></p>
      <p></p>
      <span>Sản phẩm mua nhiều</span>
      <div class="list-filter">
        <a href="javascipt:void(0)" onclick="filterAction('new', this)" class="">Mới nhất</a>
        <a href="javascipt:void(0)" onclick="filterAction('hot', this)" class="active">Hot nhất</a>
      </div>
    </div>
    <div id="carousel-wraper">
      <span class="loading-content display-slide"></span>
      <div id="slider-play">
        <div id="hot" class="hidden-slide active">
          <ul class="product-slider">
            <div v-if="this.$store.state.loaded" class="slicktest">
              <div class="item-product w20 padding-5 fl" v-for="(item,index) in hots" :key="index">
                <div class="wrap-item-product w100 fl">
                  <div :title="item.name" class="avatar-product w100 fl ">
                    <nuxt-link :title="item.name" :to="item.link_web">
                      <img :title="item.name" onerror="this.src = '/images/default.jpg'"
                           :src="item.picture[0].url"
                           :alt="item.name">
                    </nuxt-link>
                  </div>
                  <div :title="item.name" class="name-product w100 fl">
                    <nuxt-link :title="item.name"
                               :to="item.link_web">
                      {{item.name}} </nuxt-link>
                  </div>
                  <div class="product_favorite">
                    <div class="content_favorite">
                      <span class="tick-svg-icon icon-tick"><i class="mcon-check"></i></span>
                      Yêu thích
                    </div>
                  </div>
                  <div class="product-sale">
                    <p class=" number">50%</p>
                    <p class="text">Giảm</p>
                  </div>
                  <div class="price-shipping-product w100 fl">
                    <div class="price-product">
                      <del>
                        ₫{{item.old_price}}
                      </del>
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
                        <div class="number-like">10</div>
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
                        <div class="number-rating">(4)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <vue-content-loading height="300" width="200" v-if="!this.$store.state.loaded" primary="#d8d2d2" secondary="#c1baba" speed="1">
              <rect x="0" y="0" rx="1" ry="1" width="36" height="30" />
              <rect x="0" y="31" rx="1" ry="1" width="36" height="6.4" />
              <rect x="0" y="39" rx="1" ry="1" width="36" height="2" />

              <rect x="41" y="0" rx="1" ry="1" width="36" height="30" />
              <rect x="41" y="31" rx="1" ry="1" width="36" height="6.4" />
              <rect x="41" y="39" rx="1" ry="1" width="36" height="2" />

              <rect x="82" y="0" rx="1" ry="1" width="36" height="30" />
              <rect x="82" y="31" rx="1" ry="1" width="36" height="6.4" />
              <rect x="82" y="39" rx="1" ry="1" width="36" height="2" />

              <rect x="123" y="0" rx="1" ry="1" width="36" height="30" />
              <rect x="123" y="31" rx="1" ry="1" width="36" height="6.4" />
              <rect x="123" y="39" rx="1" ry="1" width="36" height="2" />

              <rect x="164" y="0" rx="1" ry="1" width="36" height="30" />
              <rect x="164" y="31" rx="1" ry="1" width="36" height="6.4" />
              <rect x="164" y="39" rx="1" ry="1" width="36" height="2" />
            </vue-content-loading>
          </ul>
        </div>
        <div id="new" class="hidden-slide">
          <ul class="product-slider">
            <div v-if="!this.$store.state.loaded" class="slicktest">
              <div class="item-product w20 padding-5 fl" v-for="(item,index2) in news" :key="index2">
                <div class="wrap-item-product w100 fl">
                  <div :title="item.name" class="avatar-product w100 fl ">
                    <nuxt-link :title="item.name" :to="item.link_web">
                      <img :title="item.name" onerror="this.src = '/images/default.jpg'"
                           :src="item.picture[0].url"
                           :alt="item.name">
                    </nuxt-link>
                  </div>
                  <div :title="item.name" class="name-product w100 fl">
                    <nuxt-link :title="item.name"
                               :to="item.link_web">
                      {{item.name}} </nuxt-link>
                  </div>
                  <div class="product_favorite">
                    <div class="content_favorite">
                      <span class="tick-svg-icon icon-tick"><i class="mcon-check"></i></span>
                      Yêu thích
                    </div>
                  </div>
                  <div class="product-sale">
                    <p class=" number">50%</p>
                    <p class="text">Giảm</p>
                  </div>
                  <div class="price-shipping-product w100 fl">
                    <div class="price-product">
                      <del>
                        ₫{{item.old_price}}
                      </del>
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
                        <div class="number-like">10</div>
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
                        <div class="number-rating">(4)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
        <hot-slide v-if="this.$store.state.loaded"/>
        <div class="clear-fix"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueContentLoading from 'vue-content-loading';
  import HotSlide from "./HotSlide";

  export default {
    components: {HotSlide, VueContentLoading},
    props: ['hots', 'news'],
    name: "SlideProduct",
    watch: {
      hots: function () {
        console.log(this.hots[0].name)
      }
    }
  }
</script>

<style scoped>

</style>
