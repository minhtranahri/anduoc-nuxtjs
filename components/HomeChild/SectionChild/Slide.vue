<template>
  <div id="backgroundMenu">
    <div id="homeSlide" class="g1180">
      <div class="jsSlide">
        <div class="carousel-slide">
          <ul class="layer-slide">
            <li v-for="(item, index) in banner" :key="index" class="slide-item" v-if="item.type === typeOfHome">
              <nuxt-link :to="item.url">
                <img :src="item.picture" onerror="this.src = '/images/default.jpg'" :alt="item.name">
              </nuxt-link>
            </li>
          </ul>
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
    export default {
        props: ['banner'],
        name: "Slide",
        data(){
          return{
            typeOfHome: 'anduoc.slide_home'
          }
        },
        mounted(){
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
