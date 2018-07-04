<template>
  <div>
    <app-section :hots="hots" :banner="banner" :categories="categories" :news="news"/>
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
          banner: null
        }
    },

    methods: {
      callApi: function () {
        this.$axios
          .get('http://dev.anduoc.vn/api/home')
          .then(response => {
              this.hots = response.data.data.product_hot;
              this.categories = response.data.data.main;
              this.banner = response.data.data.banner_home;
              if(response){
                this.$store.commit('toggleLoadingStatus');
              }
            });

        this.$axios
          .get('http://dev.anduoc.vn/api/product/new')
          .then(response => {
            this.news = response.data.data;
          });
      }
    },

    async asyncData({app, store}){
      if(store.state.ssrDetector){
        store.state.loaded == true
        let [getHome, getNew] = await Promise.all([
          app.$axios.get('http://dev.anduoc.vn/api/home'),
          app.$axios.get('http://dev.anduoc.vn/api/product/new'),
        ]);
        console.log('async data api loaded');
        //store.commit('toggleLoadingStatus');
        return {
          hots: getHome.data.data.product_hot,
          categories: getHome.data.data.main,
          banner: getHome.data.data.banner_home,
          news: getNew.data.data,
        }
      }
      else{
        return false;
      }
    },

    mounted(){
      if(this.$store.state.ssrDetector == false){
        this.callApi();
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
