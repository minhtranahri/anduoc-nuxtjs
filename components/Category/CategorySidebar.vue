<template>
  <div class="sidebar w20 fl">
    <div v-if="this.$store.state.loaded" class="full-sidebar w100 fl">
      <div id="box_cat" class="box-category-product w100 fl"
           :data-rewrite="sidebar.sidebar.link_web" data-id="1">
        <div class="title-box-category-product">
          <h3> Danh Mục</h3>
        </div>
        <div class="content-box-sidebar">
          <ul class="list-box-category-product">
            <li class="item-caegory-product active">
              <nuxt-link :title="sidebar.sidebar.name"
                 :to="sidebar.sidebar.link_web">
                <svg class="shopee-svg-icon icon-down-arrow-right-filled shopee-category-list__main-category__caret"
                     viewBox="0 0 4 7" style="
                                display: inline-block;
                                width: 0.5em;
                                height: 0.5em;
                                fill: currentColor;
                                position: relative;
                                stroke: currentColor;
                                position: absolute;
                                left: -11px;
                                top: 13px;
                            ">
                  <polygon points="4 3.5 0 0 0 7"></polygon>
                </svg>
                {{sidebar.name}}
              </nuxt-link>
            </li>
            <li v-for="(item, index) in sidebar.sidebar.child" :key="index" class="item-caegory-product">
              <nuxt-link title="TPCN - Giảm cân" :to="item.link_web">{{item.name}}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="box-filter-price w100 fl">
        <div class="title-box-category-product">
          <h3> Khoảng Giá</h3>
        </div>
        <div class="content-box-sidebar">
          <div class="wrap-box-category-product w100 fl padding-5">
            <input type="hidden" class="pricce-products"
                   :data-current-max="$route.query.price_max?$route.query.price_max:sidebar.product.price_max"
                   :data-current-min="$route.query.price_min?$route.query.price_min:sidebar.product.price_min" :data-min="sidebar.product.price_min"
                   :data-max="sidebar.product.price_max"
                   data-step="5000">
            <input type="text" id="amount" class="filter_price_product" readonly
                   style="border:0; color:#f6931f; font-weight:bold;">
            <div id="slider-range"></div>
          </div>
        </div>
      </div>
    </div>
    <vue-content-loading v-if="!this.$store.state.loaded" width="100" height="200" primary="#eeeeee" secondary="#f7f7f7" speed="1">
      <rect x="0" y="0" rx="3" ry="3" width="100" height="18" />
      <rect x="0" y="25" rx="3" ry="3" width="100" height="5" />
      <rect x="5" y="38" rx="3" ry="3" width="93" height="5" />
      <rect x="5" y="51" rx="3" ry="3" width="93" height="5" />
      <rect x="5" y="64" rx="3" ry="3" width="93" height="5" />
      <rect x="5" y="77" rx="3" ry="3" width="93" height="5" />

      <rect x="0" y="95" rx="3" ry="3" width="100" height="18" />
      <rect x="0" y="120" rx="3" ry="3" width="50" height="5" />
      <rect x="0" y="130" rx="3" ry="3" width="100" height="5" />
    </vue-content-loading>
  </div>
</template>

<script>
  import VueContentLoading from "vue-content-loading"
    export default {
        props: ['sidebar'],
        name: "CategorySidebar",
      components: {VueContentLoading},
        data() {
          return {
            priceMax: 0,
            priceMin: 0
          }
        },
        methods: {
          slideRerender: function() {
            var that = this;
            $(document).ready(function () {
              var price_max = parseInt($('.pricce-products').attr('data-max'));
              var price_min = parseInt($('.pricce-products').attr('data-min'));
              var price_step = parseInt($('.pricce-products').attr('data-step'));
              var price_current_max = parseInt($('.pricce-products').attr('data-current-max'));
              var price_current_min = parseInt($('.pricce-products').attr('data-current-min'));

              $("#slider-range").slider({
                range: true,
                min: price_min,
                max: price_max,
                step: price_step,
                values: [price_current_min, price_current_max],
                slide: function (event, ui) {
                  $("#amount").val("Từ " + addCommas(ui.values[0].toString()) + "đ :" + addCommas(ui.values[1]) + "đ");
                },
                stop: function (event, ui) {
                  that.priceMin = ui.values[0];
                  that.priceMax = ui.values[1];
                  console.log(this.priceMax);
                }
              });

              $("#amount").val("Từ " + addCommas($("#slider-range").slider("values", 0).toString()) +
                "đ : " + addCommas($("#slider-range").slider("values", 1).toString()) + "đ");

              $("#slider-range").slider({
                change: function (event, ui) {

                  //console.log(ui.values[0]);
                }
              });

              function addCommas(nStr) {
                nStr += '';
                var x = nStr.split('.');
                var x1 = x[0];
                var x2 = x.length > 1 ? '.' + x[1] : '';
                var rgx = /(\d+)(\d{3})/;
                while (rgx.test(x1)) {
                  x1 = x1.replace(rgx, '$1' + ',' + '$2');
                }
                return x1 + x2;
              }
            });
          },
      },

        watch: {
          sidebar: function() {
            this.slideRerender();
          },
          priceMax: function () {
            this.$router.replace({ path: this.$route.params.category, query: {price_min: this.priceMin, price_max: this.priceMax} });
          },
          priceMin: function () {
            this.$router.replace({ path: this.$route.params.category, query: {price_min: this.priceMin, price_max: this.priceMax} });
          }
        },

        mounted() {
          console.log('mounted activated!');

          var that = this;
          $(document).ready(function () {
            var price_max = parseInt($('.pricce-products').attr('data-max'));
            var price_min = parseInt($('.pricce-products').attr('data-min'));
            var price_step = parseInt($('.pricce-products').attr('data-step'));
            var price_current_max = parseInt($('.pricce-products').attr('data-current-max'));
            var price_current_min = parseInt($('.pricce-products').attr('data-current-min'));

            $("#slider-range").slider({
              range: true,
              min: price_min,
              max: price_max,
              step: price_step,
              values: [price_current_min, price_current_max],
              slide: function (event, ui) {
                $("#amount").val("Từ " + addCommas(ui.values[0].toString()) + "đ :" + addCommas(ui.values[1]) + "đ");
              },
              stop: function (event, ui) {
                that.priceMin = ui.values[0];
                that.priceMax = ui.values[1];
              }
            });

            $("#amount").val("Từ " + addCommas($("#slider-range").slider("values", 0).toString()) +
              "đ : " + addCommas($("#slider-range").slider("values", 1).toString()) + "đ");

            function addCommas(nStr) {
              nStr += '';
              var x = nStr.split('.');
              var x1 = x[0];
              var x2 = x.length > 1 ? '.' + x[1] : '';
              var rgx = /(\d+)(\d{3})/;
              while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
              }
              return x1 + x2;
            }
          });
        }
    }
</script>

<style scoped>

</style>
