<template>
  <section id="page-category" class="content">
    <div class="inner-content g1180">
      <div class="wrap-content w100 fl">
        <breadcrumb :breadcrumb="breadcrumb"/>
        <!--<link rel="stylesheet" href="/assets/css/sidebar.css?v=">-->
        <input type="checkbox" class="filter_category mcon-filter">
        <category-sidebar :sidebar="sidebar"/>
        <div class="full-container w80 fr">
          <app-filter/>
          <div class="wrap-container w100  fl">
            <products :products="products"/>
            <pagination :pagination="pagination"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import Breadcrumb from "../components/ProductDetailChild/breadcrumb";
    import CategorySidebar from "../components/Category/CategorySidebar";
    import Filter from "../components/Category/Filter";
    import Products from "../components/Category/Products";
    import Pagination from "../components/Category/Pagination";
    export default {
        layout: 'Header',
        name: "Category",
        components: {Pagination, Products, AppFilter:Filter, CategorySidebar, Breadcrumb},
        data() {
          return {
            products: null,
            sidebar: null,
            pagination: null,
            breadcrumb: null,
          }
        },

        watch: {
          $route: function () {
            if(this.$store.state.loaded == true){
              this.$store.commit('toggleLoadingStatus');
            }
            this.getAPI();
          }
        },

        methods: {
          getAPI: function () {
            let endpoint = this.$route.fullPath;

            this.$axios
              .get('http://dev.anduoc.vn/api/categories'+endpoint)
              .then(response => {
                this.products = response.data.data.product;
                this.sidebar = response.data.data;
                this.pagination = response.data.data.page;
                this.breadcrumb = response.data.data.breadcrumb;
                if(response){
                  this.$store.commit('toggleLoadingStatus');
                }
              })
          }
        },

        async asyncData({app, route,store}) {
            if(store.state.ssrDetector){
              store.state.ssrDetector = true
              let [category] = await Promise.all([
                app.$axios.get('http://dev.anduoc.vn/api/categories' + route.fullPath)
              ])
              return {
                products: category.data.data.product,
                sidebar: category.data.data,
                pagination: category.data.data.page,
                breadcrumb: category.data.data.breadcrumb,
              }
            }
          },

        mounted(){
          if(this.$store.state.ssrDetector == false){
            this.getAPI();
          }
        },

      beforeMount(){
        if(this.$store.state.loaded && this.$store.state.ssrDetector == false){
          this.$store.commit('toggleLoadingStatus');
        }
      }
    }

</script>

<style scoped>

</style>
