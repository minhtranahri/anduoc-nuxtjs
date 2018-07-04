<template>
  <div></div>
</template>

<script>
    export default {
        name: "HomeCategorySlide",
        props: ['items'],
      mounted(){
        $('.owl-wrapper').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 6000,
          dotsClass: 'slick-dots-edit',
          dots: true
        });
      },
    }
</script>

<style scoped>

</style>
