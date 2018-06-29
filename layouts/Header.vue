<template>
  <div>
      <app-header :class="this.$route.path == '/'?'home-anduoc':''" v-if="keyobj" :key_obj="keyobj"/>
      <nuxt/>
      <app-footer/>
    </div>
</template>

<script>
  import AppHeader from '../components/HomeChild/Header'
  import AppFooter from '../components/HomeChild/Footer'

    export default {
        name: "Header",
      components: {
          AppHeader, AppFooter
      },
      data(){
        return {
          keyobj: {key: ''},
        }
      },
      methods: {
          // showProgress: function () {
          //   if(!this.$store.state.loaded){
          //     this.$nuxt.$loading.start();
          //   }
          //   else{
          //     this.$nuxt.$loading.finish();
          //   }
          // }
      },
      mounted() {
        // this.$nextTick(() => {
        //   this.showProgress();
        // })
      },

      watch: {
          // $route: function() {
          //   this.showProgress();
          // }
      }
    }
</script>

<style scoped>

</style>
