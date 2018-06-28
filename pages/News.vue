<template>
  <section id="content">
    <div class="inner-content g1180">
      <div class="wrap-content w100 fl">
        <div class="clear-fix"></div>
        <div class="new_content">
          <breadcrumb :breadcrumb="breadcrumb"/>
          <div class="clear-fix">
          </div>
          <top-news :topnews="topnews"/>
          <bottom-child :bottomnews="bottomnews"/>
        </div>
        <side-bar :sidebar="sidebar"/>
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

      async asyncData({app}){
        let [news] = await Promise.all([
          app.$axios.get('http://dev.anduoc.vn/api/news')
        ])
        return {
          breadcrumb: news.data.data.breadcrumb,
          topnews: news.data.data,
          bottomnews: news.data.data.cate_news,
          sidebar: news.data.data.product,
        }
      }

      // mounted() {
      //   this.$axios
      //     .get('http://dev.anduoc.vn/api/news')
      //     .then(response => {
      //       this.breadcrumb = response.data.data.breadcrumb;
      //       this.topnews = response.data.data;
      //       this.bottomnews = response.data.data.cate_news;
      //       this.sidebar = response.data.data.product;
      //       if(response){
      //         this.$store.commit('toggleLoadingStatus');
      //       }
      //     })
      // },

      // beforeMount() {
      //     if(this.$store.state.loaded == true){
      //       this.$store.commit('toggleLoadingStatus');
      //     }
      //   }
    }
</script>

<style scoped>

</style>
