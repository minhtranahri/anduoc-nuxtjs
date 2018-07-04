<template>
  <div></div>
</template>

<script>
    export default {
        name: "HotSlide",
      mounted() {
        $('.slicktest').slick({
          slidesToShow: 5,
          slidesToScroll: 5,
          prevArrow: '<button type="button" class="slick-prev-edit"><i class="mcon-angle-left"></i></button>',
          nextArrow: '<button type="button" class="slick-prev-edit right-slick"><i class="mcon-angle-right"></i></button>'
        });
      }
    }
</script>

<style scoped>

</style>
