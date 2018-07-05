<template>
  <div id="backgroundMenu">
    <div id="homeSlide" class="g1180">
      <div class="jsSlide">
        <div class="carousel-slide">
          <home-top-slide v-if="this.$store.state.loaded" :banner="banner"/>
          <vue-content-loading v-if="!this.$store.state.loaded" width="100" height="30" primary="#eeeeee" secondary="#f7f7f7" speed="1">
            <rect x="0" y="0" rx="1" ry="1" width="100" height="27" />
          </vue-content-loading>
        </div>
        <div id="bnRight">
          <div v-for="(bnRight, index2) in banner" :key="index2" v-if="bnRight.type !== typeOfHome"><nuxt-link to="#">
            <img :src="bnRight.picture" onerror="this.src = '/images/default.jpg'" :alt="bnRight.name"></nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div id="homePolicy">
      <p>
        <i class="si"></i> Giao hàng toàn quốc
      </p>
      <p>
        <i class="si"></i> Thanh toán khi nhận hàng
      </p>
      <p>
        <i class="si"></i> Đổi trả trong 10 ngày
      </p>
      <p>
        <nuxt-link to="/tin-tuc" style="color: #333"> <i class="si"></i> Tin tức - Sự kiện</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
    import VueContentLoading from 'vue-content-loading';
    import HomeTopSlide from './HomeTopSlide';

    export default {
        props: ['banner'],
        name: "Slide",
        components: {
          VueContentLoading,
          HomeTopSlide
        },
      data(){
        return{
          typeOfHome: 'anduoc.slide_home'
        }
      },
    }
</script>

<style scoped>

</style>
