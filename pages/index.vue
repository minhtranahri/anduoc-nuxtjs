<template>
  <div>
    <app-section :hots="hots" :news="news" :categories="categories" :banner="banner"/>
    <!--v-if="this.$store.state.loaded"-->
  </div>
</template>

<script>
  import Section from '../components/HomeChild/Section'

  export default {
    //props: ['loaded'],
    layout: 'Header',
    name: "Home",
    components:{
      AppSection:Section
    },
    data() {
      return {
        hots: null,
        news: null,
        categories: null,
        banner: null,
      }
    },
    // mounted(){
    //   this.$axios
    //     .get('http://dev.anduoc.vn/api/home')
    //     .then(response => {
    //       this.hots = response.data.data.product_hot;
    //       this.categories = response.data.data.main;
    //       this.banner = response.data.data.banner_home;
    //       if(response){
    //         this.$store.commit('toggleLoadingStatus');
    //       }
    //     });
    //
    //   this.$
    //     .then(response => {
    //       this.news = response.data.data;
    //     });
    // },

    async asyncData({app, store}){
      let [getHome, getNew] = await Promise.all([
        app.$axios.get('http://dev.anduoc.vn/api/home'),
        app.$axios.get('http://dev.anduoc.vn/api/product/new'),
      ]);
      store.commit('toggleLoadingStatus');
      return {
            hots: getHome.data.data.product_hot,
            categories: getHome.data.data.main,
            banner: getHome.data.data.banner_home,
            news: getNew.data.data,
      }
    },
  }

</script>

<style scoped>

</style>
