<template>
  <div>
    <!--<div v-if="this.$store.state.loaded != true" class="loadingAnimation">-->
      <!--<img style="width: 100px" src="/images/giphy.gif">-->
    <!--</div>-->
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
          showProgress: function () {
            if(!this.$store.state.loaded){
              this.$nuxt.$loading.start();
            }
            else{
              this.$nuxt.$loading.finish();
            }
          }
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
  .loadingAnimation{
    text-align: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center; position: fixed;z-index: 1000; top: 0; flex-direction: column;
  }
</style>
