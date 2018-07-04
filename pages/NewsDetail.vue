<template>
  <section id="content">
    <div class="inner-content g1180">
      <div class="wrap-content w100 fl">
        <div class=" content-detail">
          <breadcrumb :breadcrumb="breadcrumb" />
          <div class="clear-fix"></div>
          <news-content :content="content" />
        </div>
        <hot-sidebar :hot="hot" />
      </div>
    </div>
    <!--End content-index-->
  </section>
</template>

<script>
    import Breadcrumb from "../components/ProductDetailChild/breadcrumb";
    import NewsContent from "../components/NewsDetail/NewsContent";
    import HotSidebar from "../components/NewsDetail/HotSidebar";

    export default {
        layout: 'Header',
        name: "NewsDetail",
        components: {HotSidebar, NewsContent, Breadcrumb},

        data() {
          return {
            breadcrumb: null,
            content: null,
            hot: null,
          }
        },

        methods: {
          getApi: function () {
            this.$axios
              .get('http://dev.anduoc.vn/api/news/'+this.$route.params.id)
              .then(response => {
                this.breadcrumb = response.data.data.breadcrumb;
                this.content = response.data.data.detail;
                this.hot = response.data.data;
                if(response){
                  this.$store.state.loaded = true;
                }
              })
          }
        },

      mounted(){
        if(!this.$store.state.ssrDetector){
          this.getApi();
        }
      },

        async asyncData({app, params, store}) {
          if(store.state.ssrDetector){
            let response = await app.$axios
              .get('http://dev.anduoc.vn/api/news/'+params.id)
            return {
              breadcrumb: response.data.data.breadcrumb,
              content: response.data.data.detail,
              hot: response.data.data,
            }
          }
          else return false;
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

