<template>
  <section id="content">
    <div class="inner-content g1180">
      <div class="wrap-content w100 fl">
        <div class="clear-fix"></div>
        <div class="new_content">
          <breadcrumb v-if="this.$store.state.loaded" :breadcrumb="breadcrumb"/>
          <div class="clear-fix">
          </div>
          <top-news v-if="this.$store.state.loaded" :topnews="topnews"/>
          <bottom-child v-if="this.$store.state.loaded" :bottomnews="bottomnews"/>
        </div>
        <side-bar v-if="this.$store.state.loaded" :sidebar="sidebar"/>
      </div>
    </div>
  </section>
</template>

<script>
    import TopNews from "../components/News/TopNews";
    import BottomChild from "../components/News/BottomChild";
    import SideBar from "../components/News/SideBar";
    import Breadcrumb from "../components/ProductDetailChild/breadcrumb";

    export default {
      layout: 'Header',
      name: "News",
      components: {Breadcrumb, SideBar, BottomChild, TopNews},
      data() {
        return {
          breadcrumb: null,
          topnews: null,
          bottomnews: null,
          sidebar: null,
        }
      },
      
      mounted() {
        this.$axios
          .get('http://dev.anduoc.vn/api/news')
          .then(response => {
            this.breadcrumb = response.data.data.breadcrumb;
            this.topnews = response.data.data;
            this.bottomnews = response.data.data.cate_news;
            this.sidebar = response.data.data.product;
            if(response){
              this.$store.commit('toggleLoadingStatus');
            }
          })
      },

      // beforeMount() {
      //     if(this.$store.state.loaded == true){
      //       this.$store.commit('toggleLoadingStatus');
      //     }
      //   }
    }
</script>

<style scoped>

</style>
