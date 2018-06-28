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
            <div class="slicktest">
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
          </ul>
        </div>
        <div id="new" class="hidden-slide">
          <ul class="product-slider">
            <div class="slicktest">
              <div class="item-product w20 padding-5 fl" v-for="(item2,index2) in news" :key="index2">
                <div class="wrap-item-product w100 fl">
                  <div :title="item2.name" class="avatar-product w100 fl ">
                    <nuxt-link :title="item2.name" :to="item2.link_web">
                      <img :title="item2.name" onerror="this.src = '/images/default.jpg'"
                           :src="item2.picture[0].url"
                           :alt="item2.name">
                    </nuxt-link>
                  </div>
                  <div :title="item2.name" class="name-product w100 fl">
                    <nuxt-link :title="item2.name"
                                 :to="item2.link_web">
                      {{item2.name}} </nuxt-link>
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
                        ₫{{item2.old_price}}
                      </del>
                      <ins>₫{{item2.price}}</ins>
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
        <div class="clear-fix"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['hots', 'news'],
    name: "SlideProduct",

    mounted() {
      $('.slicktest').slick({
       slidesToShow: 5,
       slidesToScroll: 5,
       prevArrow: '<button type="button" class="slick-prev-edit"><i class="mcon-angle-left"></i></button>',
       nextArrow: '<button type="button" class="slick-prev-edit right-slick"><i class="mcon-angle-right"></i></button>'
     });
    }
  }
</script>

<style scoped>

</style>
