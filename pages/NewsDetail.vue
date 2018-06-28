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

        asyncData({app, params}) {
          return app.$axios
            .get('http://dev.anduoc.vn/api/news/'+params.id)
            .then((response) => {
              return {
                breadcrumb: response.data.data.breadcrumb,
                content: response.data.data.detail,
                hot: response.data.data,
              }
            })
        },
    }
</script>

<style scoped>

</style>

