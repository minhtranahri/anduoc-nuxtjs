<template>
  <div id="showCate" class="g1180">
    <div v-if="this.$store.state.loaded">
      <div v-for="(item,index) in categories" :key="index" :id="'cate-item-'+ ++index" class="show-cate-item">
        <div class="title-cate">
          <h2><nuxt-link :title="item.id"
                         :to="item.link_web">
            <span><i>{{index}}</i></span>
            {{item.name}}<i class="mcon-caret-right"></i>
          </nuxt-link>
          </h2>
          <div class="review-buy">
            <nuxt-link :title="item.name" :to="item.link_web"><i class="mcon-shopping-cart-2"></i><span
              class="sp-l1">Mua nhiều</span></nuxt-link>
            <span></span>
            <nuxt-link :title="item.name" :to="item.link_web"><i class="mcon-eye"></i><span class="sp-l1">Xem nhiều</span></nuxt-link>
          </div>
          <div class="list-item-cate">
            <nuxt-link v-for="(sub,index_2) in item.child" :title="sub.name" :key="index_2" :to="sub.link_web">
              <i class="mcon-angle-right"></i>{{sub.name}}
            </nuxt-link>
          </div>
        </div>
        <div class="olw-pro-cate">
          <ul>
            <div class="owl-wrapper">
              <li v-for="(imgs, index) in item.picture" :key="index" class="olw-item-pro">
                <nuxt-link title="Thực phẩm chức năng" to="/tpcn-linh-chi">
                  <img :src="imgs.url" onerror="this.src = '/images/default.jpg'" alt="Thực phẩm chức năng">
                </nuxt-link></li>
            </div>
          </ul>
          <div class="clear-fix"></div>

          <!-- <div class="dots">
                                      <span data-id="" class="dot "></span>
                          </div>-->
        </div>
        <div class="list-product">
          <div v-for="(pro, index) in item.product" class="item-product w30  padding-5 fl" :key="index">
            <div class="wrap-item-product w100 fl">
              <div title="TPCN - Linh Chi Trồng Loại 3 - 4 Tai" class="avatar-product w100 fl ">
                <nuxt-link title="TPCN - Linh Chi Trồng Loại 3 - 4 Tai" :to="pro.link_web">
                  <img title="TPCN - Linh Chi Trồng Loại 3 - 4 Tai" :src="pro.picture[0].url"  onerror="this.src = '/images/default.jpg'" alt="TPCN - Linh Chi Trồng Loại 3 - 4 Tai">
                </nuxt-link>
              </div>
              <div title="TPCN - Linh Chi Trồng Loại 3 - 4 Tai" class="name-product w100 fl">
                <nuxt-link title="TPCN - Linh Chi Trồng Loại 3 - 4 Tai" to="/tpcn-linh-chi-trong-loai-3-4-tai-p129.html">
                  {{pro.name}}
                </nuxt-link>
              </div>
              <div class="product_favorite">
                <div class="content_favorite">
                  <span class="tick-svg-icon icon-tick" ><i class="mcon-check"></i></span>
                  Yêu thích                                    </div>

              </div>
              <div class="product-sale">
                <p class=" number">19%</p>
                <p class="text">Giảm</p>
              </div>
              <div class="price-shipping-product w100 fl">
                <div class="price-product">
                  <del title="₫1,550,000">
                    ₫{{pro.old_price}}                                           </del>
                  <ins>₫{{pro.price}}</ins>
                </div>
                <div class="shipping-svg-icon icon-free-shipping" ></div>
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
                            <i class="mcon-star active"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="number-rating">(1)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nuxt-link class="view-all" to="/thuc-pham-chuc-nang"
                     title="Thực phẩm chức năng">Xem tất cả</nuxt-link>
        </div>
      </div>
    </div>
    <vue-content-loading height="250" width="100" v-if="!this.$store.state.loaded" primary="#d8d2d2" secondary="#c1baba" speed="1">
      <rect x="0" y="0" rx="0.5" ry="0.5" width="20" height="10" />
      <rect x="2" y="12" rx="0.5" ry="0.5" width="17" height="1" />
      <rect x="2" y="14" rx="0.5" ry="0.5" width="17" height="1" />
      <rect x="2" y="16" rx="0.5" ry="0.5" width="17" height="1" />
      <rect x="2" y="18" rx="0.5" ry="0.5" width="17" height="1" />
      <rect x="2" y="20" rx="0.5" ry="0.5" width="17" height="1" />

      <rect x="20" y="0" rx="0.5" ry="0.5" width="30" height="50" />

      <rect x="51" y="0" rx="0.5" ry="0.5" width="16" height="10" />
      <rect x="51" y="11" rx="0.5" ry="0.5" width="16" height="1" />
      <rect x="51" y="13" rx="0.5" ry="0.5" width="16" height="1" />
      <rect x="51" y="15" rx="0.5" ry="0.5" width="10" height="1" />

      <rect x="67.5" y="0" rx="0.5" ry="0.5" width="16" height="10" />
      <rect x="67.5" y="11" rx="0.5" ry="0.5" width="16" height="1" />
      <rect x="67.5" y="13" rx="0.5" ry="0.5" width="16" height="1" />
      <rect x="67.5" y="15" rx="0.5" ry="0.5" width="10" height="1" />

      <rect x="84" y="0" rx="0.5" ry="0.5" width="16" height="10" />
      <rect x="84" y="11" rx="0.5" ry="0.5" width="16" height="1" />
      <rect x="84" y="13" rx="0.5" ry="0.5" width="16" height="1" />
      <rect x="84" y="15" rx="0.5" ry="0.5" width="10" height="1" />


      <rect x="0" y="52" rx="0.5" ry="0.5" width="20" height="10" />
      <rect x="2" y="64" rx="0.5" ry="0.5" width="17" height="1" />
      <rect x="2" y="66" rx="0.5" ry="0.5" width="17" height="1" />
      <rect x="2" y="68" rx="0.5" ry="0.5" width="17" height="1" />
      <rect x="2" y="70" rx="0.5" ry="0.5" width="17" height="1" />
      <rect x="2" y="72" rx="0.5" ry="0.5" width="17" height="1" />

      <rect x="20" y="52" rx="0.5" ry="0.5" width="30" height="50" />

      <rect x="51" y="52" rx="0.5" ry="0.5" width="16" height="10" />
      <rect x="51" y="63" rx="0.5" ry="0.5" width="16" height="1" />
      <rect x="51" y="65" rx="0.5" ry="0.5" width="16" height="1" />
      <rect x="51" y="67" rx="0.5" ry="0.5" width="10" height="1" />

      <rect x="67.5" y="52" rx="0.5" ry="0.5" width="16" height="10" />
      <rect x="67.5" y="63" rx="0.5" ry="0.5" width="16" height="1" />
      <rect x="67.5" y="65" rx="0.5" ry="0.5" width="16" height="1" />
      <rect x="67.5" y="67" rx="0.5" ry="0.5" width="10" height="1" />

      <rect x="84" y="52" rx="0.5" ry="0.5" width="16" height="10" />
      <rect x="84" y="63" rx="0.5" ry="0.5" width="16" height="1" />
      <rect x="84" y="65" rx="0.5" ry="0.5" width="16" height="1" />
      <rect x="84" y="67" rx="0.5" ry="0.5" width="10" height="1" />


      <rect x="0" y="104" rx="0.5" ry="0.5" width="20" height="10" />
      <rect x="2" y="116" rx="0.5" ry="0.5" width="17" height="1" />
      <rect x="2" y="118" rx="0.5" ry="0.5" width="17" height="1" />
      <rect x="2" y="120" rx="0.5" ry="0.5" width="17" height="1" />
      <rect x="2" y="122" rx="0.5" ry="0.5" width="17" height="1" />
      <rect x="2" y="124" rx="0.5" ry="0.5" width="17" height="1" />

      <rect x="20" y="104" rx="0.5" ry="0.5" width="30" height="50" />

      <rect x="51" y="104" rx="0.5" ry="0.5" width="16" height="10" />
      <rect x="51" y="115" rx="0.5" ry="0.5" width="16" height="1" />
      <rect x="51" y="117" rx="0.5" ry="0.5" width="16" height="1" />
      <rect x="51" y="119" rx="0.5" ry="0.5" width="10" height="1" />

      <rect x="67.5" y="104" rx="0.5" ry="0.5" width="16" height="10" />
      <rect x="67.5" y="115" rx="0.5" ry="0.5" width="16" height="1" />
      <rect x="67.5" y="117" rx="0.5" ry="0.5" width="16" height="1" />
      <rect x="67.5" y="119" rx="0.5" ry="0.5" width="10" height="1" />

      <rect x="84" y="104" rx="0.5" ry="0.5" width="16" height="10" />
      <rect x="84" y="115" rx="0.5" ry="0.5" width="16" height="1" />
      <rect x="84" y="117" rx="0.5" ry="0.5" width="16" height="1" />
      <rect x="84" y="119" rx="0.5" ry="0.5" width="10" height="1" />
    </vue-content-loading>
    <home-category-slide v-if="this.$store.state.loaded"/>
  </div>
</template>

<script>
    import HomeCategorySlide from "./HomeCategorySlide";
    import VueContentLoading from 'vue-content-loading';
    export default {
      components: {HomeCategorySlide, VueContentLoading},
      props: ['categories'],
        name: "CategoryList",
    }
</script>

<style scoped>

</style>
