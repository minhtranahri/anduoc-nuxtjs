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
      head() {
        return {
          title: 'Tin tức',
          meta: this.metaa
        }
      },
      layout: 'Header',
      name: "News",
      components: {Breadcrumb, SideBar, BottomChild, TopNews},
      data() {
        return {
          breadcrumb: null,
          topnews: null,
          bottomnews: null,
          sidebar: null,
          metaa: []
        }
      },

      async asyncData({app, store}){
        if(store.state.ssrDetector){
          store.state.loaded = true;
          let [news] = await Promise.all([
            app.$axios.get('http://dev.anduoc.vn/api/news')
          ])
          return {
            breadcrumb: news.data.data.breadcrumb,
            topnews: news.data.data,
            bottomnews: news.data.data.cate_news,
            sidebar: news.data.data.product,
            metaa: news.data.data.meta
          }
        }
        else {
          return false;
        }
      },

      methods: {
        callAPI: function () {
          this.$axios
            .get('http://dev.anduoc.vn/api/news')
            .then(response => {
              this.breadcrumb = response.data.data.breadcrumb;
              this.topnews = response.data.data;
              this.bottomnews = response.data.data.cate_news;
              this.sidebar = response.data.data.product;
              this.metaa = response.data.data.meta;
              if(response && this.$route.name == 'News'){
                this.$store.commit('toggleLoadingStatus');
              }
            })
        }
      },

      mounted(){
        if(this.$store.state.ssrDetector == false){
          this.callAPI();
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
