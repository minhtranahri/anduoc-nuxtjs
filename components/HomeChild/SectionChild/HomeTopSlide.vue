<template>
  <ul class="layer-slide">
    <li v-for="(item, index) in banner" v-if="item.type == typeOfHome" :key="index" class="slide-item">
      <nuxt-link :to="item.url">
        <img :src="item.picture" onerror="this.src = '/images/default.jpg'" :alt="item.name">
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "HomeTopSlide",
        props: ['banner'],
      data(){
        return{
          typeOfHome: 'anduoc.slide_home'
        }
      },
        mounted() {
          $('.layer-slide').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          adaptiveHeight: true,
          dotsClass: 'slick-dots-edit slide',
          dots: true
        });
      }
    }
</script>

<style scoped>

</style>
