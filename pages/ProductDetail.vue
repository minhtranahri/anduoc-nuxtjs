<template>
  <section id="content" class="content">
    <div class="inner-content g1180">
      <div class="wrap-content w100 fl">
        <div class="over-lay">
        </div>
        <!--<div class="pop-up">-->
          <!--<div class="box_product_incart util-clearfix">-->
            <!--<p class="name">-->
              <!--<img src="assets/images/tick.png">-->
            <!--</p>-->
            <!--<strong>-->
              <!--Thêm sản phẩm thành công!-->
            <!--</strong>-->
          <!--</div>-->
        </div>
        <breadcrumb :breadcrumb="breadcrumb"/>
        <product-infor :product="product" :reviews="reviews"/>
        <same-right :same="same"/>
      </div>
  </section>
</template>

<script>
    import Breadcrumb from "../components/ProductDetailChild/breadcrumb";
    import ProductInfor from "../components/ProductDetailChild/ProductInfor"
    import SameRight from "../components/ProductDetailChild/SameRight";

    export default {
        layout: 'Header',
        name: "ProductDetail",
        components: {
          SameRight,
          Breadcrumb,
          ProductInfor
        },
        data() {
          return {
            breadcrumb: null,
            product: null,
            same: null,
            reviews: null,
            loaded: false
          }
        },

        watch: {
          $route: function () {
            this.getData();
          }
        },

      methods:{
        getData(){
          var arr = this.$route.params.id;
          this.$axios
            .get('http://dev.anduoc.vn/api/product/'+arr)
            .then(response => {
              this.breadcrumb = response.data.data.breadcrumb;
              this.same = response.data.data.product_same;
              this.product = response.data.data.product_detail;
              this.reviews = response.data.data.reviews;
              // if(response){
              //   this.$store.commit('toggleLoadingStatus');
              // }
            });
        }
      },

      async asyncData({app, route}){
          let [detailProduct] = await Promise.all([
            app.$axios.get('http://dev.anduoc.vn/api/product/'+route.params.id)
          ])
          return {
            breadcrumb: detailProduct.data.data.breadcrumb,
            same: detailProduct.data.data.product_same,
            product: detailProduct.data.data.product_detail,
            reviews: detailProduct.data.data.reviews,
          }
      }
        // mounted() {
        //   this.getData();
        // },

      // beforeMount(){
      //   if(this.$store.state.loaded){
      //     this.$store.commit('toggleLoadingStatus');
      //   }
      // }
    }
</script>

<style scoped>

</style>
