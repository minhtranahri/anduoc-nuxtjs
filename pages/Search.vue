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
        <div v-if="this.$store.state.loaded" class="results-search">
          <p>Có <span>{{result != undefined?result.total_product:0}}</span> kết quả tìm kiếm theo từ khóa <span>"{{changeKeyword}}"</span></p>
        </div>
        <div v-if="this.$store.state.loaded" class="similar-product search-fix">

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
        <pagination v-if="this.$store.state.loaded" :pagination="pagination"/>
        <vue-content-loading v-if="!this.$store.state.loaded" width="100" height="100" primary="#d8d2d2" secondary="#c1baba" speed="1">
          <rect x="0" y="1" rx="0.5" ry="0.5" width="23" height="0" />

          <rect x="0" y="3" rx="0.5" ry="0.5" width="19" height="12" />
          <rect x="0" y="16" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="0" y="18" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="0" y="20" rx="0.5" ry="0.5" width="13" height="1" />

          <rect x="20" y="3" rx="0.5" ry="0.5" width="19" height="12" />
          <rect x="20" y="16" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="20" y="18" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="20" y="20" rx="0.5" ry="0.5" width="13" height="1" />

          <rect x="40" y="3" rx="0.5" ry="0.5" width="19" height="12" />
          <rect x="40" y="16" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="40" y="18" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="40" y="20" rx="0.5" ry="0.5" width="13" height="1" />

          <rect x="60" y="3" rx="0.5" ry="0.5" width="19" height="12" />
          <rect x="60" y="16" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="60" y="18" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="60" y="20" rx="0.5" ry="0.5" width="13" height="1" />

          <rect x="80" y="3" rx="0.5" ry="0.5" width="19" height="12" />
          <rect x="80" y="16" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="80" y="18" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="80" y="20" rx="0.5" ry="0.5" width="13" height="1" />


          <rect x="0" y="23" rx="0.5" ry="0.5" width="19" height="12" />
          <rect x="0" y="36" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="0" y="38" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="0" y="40" rx="0.5" ry="0.5" width="13" height="1" />

          <rect x="20" y="23" rx="0.5" ry="0.5" width="19" height="12" />
          <rect x="20" y="36" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="20" y="38" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="20" y="40" rx="0.5" ry="0.5" width="13" height="1" />

          <rect x="40" y="23" rx="0.5" ry="0.5" width="19" height="12" />
          <rect x="40" y="36" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="40" y="38" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="40" y="40" rx="0.5" ry="0.5" width="13" height="1" />

          <rect x="60" y="23" rx="0.5" ry="0.5" width="19" height="12" />
          <rect x="60" y="36" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="60" y="38" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="60" y="40" rx="0.5" ry="0.5" width="13" height="1" />

          <rect x="80" y="23" rx="0.5" ry="0.5" width="19" height="12" />
          <rect x="80" y="36" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="80" y="38" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="80" y="40" rx="0.5" ry="0.5" width="13" height="1" />


          <rect x="0" y="43" rx="0.5" ry="0.5" width="19" height="12" />
          <rect x="0" y="56" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="0" y="58" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="0" y="60" rx="0.5" ry="0.5" width="13" height="1" />

          <rect x="20" y="43" rx="0.5" ry="0.5" width="19" height="12" />
          <rect x="20" y="56" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="20" y="58" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="20" y="60" rx="0.5" ry="0.5" width="13" height="1" />

          <rect x="40" y="43" rx="0.5" ry="0.5" width="19" height="12" />
          <rect x="40" y="56" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="40" y="58" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="40" y="60" rx="0.5" ry="0.5" width="13" height="1" />

          <rect x="60" y="43" rx="0.5" ry="0.5" width="19" height="12" />
          <rect x="60" y="56" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="60" y="58" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="60" y="60" rx="0.5" ry="0.5" width="13" height="1" />

          <rect x="80" y="43" rx="0.5" ry="0.5" width="19" height="12" />
          <rect x="80" y="56" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="80" y="58" rx="0.5" ry="0.5" width="19" height="1" />
          <rect x="80" y="60" rx="0.5" ry="0.5" width="13" height="1" />
        </vue-content-loading>
      </div>
    </section>
  </div>
</template>

<script>
    import Pagination from "../components/Category/Pagination";
    import VueContentLoading from "vue-content-loading"
    export default {
      layout: 'Header',
        name: "Search",
      components: {Pagination, VueContentLoading},
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
            if(this.$store.state.loaded == true){
              this.$store.commit('toggleLoadingStatus');
            }
            this.getAPI();
          },

          changeKeyword:function () {
            clearTimeout(x);
            this.$store.state.loaded = false;
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
                if(response){
                  this.$store.state.loaded = true;
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
                if(response){
                  this.$store.state.loaded = true;
                }
              })
          }
        },

        mounted() {
          if(!this.$store.state.ssrDetector){
            this.getAPIKey();
          }
        },

      beforeMount(){
        if(this.$store.state.loaded && this.$store.state.ssrDetector == false){
          this.$store.commit('toggleLoadingStatus');
        }
      },

        async asyncData({app, route, store}){
          if(store.state.ssrDetector){
            store.state.loaded = true;
            let [result] = await Promise.all([
              app.$axios.get('http://dev.anduoc.vn/api/search?keyword='+route.query.keyword+'&page='+route.query.page)
            ]);
            return {
              result: result.data.data,
              pagination: result.data.data.page,
            }
          }
          else return false;
        }
    }
</script>

<style scoped>

</style>
