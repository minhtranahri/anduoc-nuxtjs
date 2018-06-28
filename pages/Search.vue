<template>
  <div style="min-height: 500px;">
    <div v-if="isChanged == false" style="
      text-align: center;
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center; position: fixed;z-index: 10; top: 0; flex-direction: column">
      <img style="width: 200px" src="/images/giphy.gif">
      <p>Đang tìm kết quả cho từ khóa <b>{{changeKeyword}}</b></p>
    </div>
    <section id="content" :style="isChanged == false?opacity:''">
      <div class="g1180">
        <div v-if="isChanged == true" class="results-search">
          <p>Có <span>{{result != undefined?result.total_product:0}}</span> kết quả tìm kiếm theo từ khóa <span>"{{changeKeyword}}"</span></p>
        </div>
        <div v-if="result != null" class="similar-product search-fix">

          <div v-for="(item, index) in result.product" :key="index" class="item-product w16  padding-5 fl">
            <div class="wrap-item-product w100 fl">
              <div :title="item.name
" class="avatar-product w100 fl ">
                <nuxt-link :title="item.name
" :to="item.link_web">
                  <img :title="item.name
" :src="item.picture[0].url != 'undefined'?item.picture[0].url:'/static/images/default.jpg'"
                       :alt="item.name">
                </nuxt-link>
              </div>
              <div :title="item.name
" class="name-product w100 fl">
                <nuxt-link :title="item.name
" :to="item.link_web">
                  {{item.link_web}}
                </nuxt-link>
              </div>
              <div v-if="item.hot == true" class="product_favorite">
                <div class="content_favorite">
                  <span class="tick-svg-icon icon-tick" ><i class="mcon-check"></i></span>
                  Yêu thích
                </div>
              </div>
              <div class="price-shipping-product w100 fl">
                <div class="price-product">
                  <ins>₫{{item.price}}</ins>
                </div>
                <div class="shipping-svg-icon icon-free-shipping" ></div>
              </div>
              <div class="rating-like">
                <div class="rating-like__wrap">
                  <div class="like">
                    <div class="shopee-svg-icon icon-like-2"><i class="mcon-heart"></i></div>
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
                    <div class="number-rating">(8)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <pagination v-if="pagination !== null" :pagination="pagination"/>
      </div>
    </section>
  </div>
</template>

<script>
    import Pagination from "../components/Category/Pagination";
    export default {
      layout: 'Header',
        name: "Search",
      components: {Pagination},
      data() {
          return {
            result: null,
            pagination: null,
            isChanged: true,
            opacity: 'opacity: 0.5',
            keyword: null,
          }
        },

        watch: {
          $route:function () {
            this.getAPI();
          },

          changeKeyword:function () {
            clearTimeout(x);
            this.isChanged = false;
            var x = setTimeout(this.getAPIKey, 1000);
          },
        },

        computed: {
          changeKeyword() {
            return this.$store.state.key;
          }
        },

        methods: {
          getAPI: function () {
            let key = this.$route.query.keyword;
            if(this.$route.query.page != 'undefined'){
              let page = this.$route.query.page;
              var endpoint = key+'&page='+page;
            }
            else{
              endpoint = key;
            }

            this.$axios
              .get('http://dev.anduoc.vn/api/search?keyword='+endpoint)
              .then(response => {
                this.result = response.data.data;
                this.pagination = response.data.data.page;
                if(this.result != undefined && this.pagination != undefined){
                  //this.loaded.loaded = true;
                }
              })
          },
          getAPIKey:function () {
            var endpoint = this.$store.state.key;
            this.$axios
              .get('http://dev.anduoc.vn/api/search?keyword='+endpoint)
              .then(response => {
                this.result = response.data.data;
                this.pagination = response.data.data.page;
                this.isChanged = true;
              })
          }
        },
        mounted() {
          this.getAPI();
        }
    }
</script>

<style scoped>

</style>
