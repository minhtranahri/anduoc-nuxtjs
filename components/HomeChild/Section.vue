<template>
  <section id="content">
    <slide :banner="banner"/>
    <div id="content-index">
      <slide-product :hots="hots" :news="news" :categories="categories"/>
      <category-list :categories="categories"/>
    </div>
  </section>
</template>

<script>
    import Slide from './SectionChild/Slide'
    import CategoryList from './SectionChild/CategoryList'
    import SlideProduct from './SectionChild/SlideProduct'

    export default {
        props: ['hots', 'news', 'categories', 'banner'],
        name: "Section",
        components:{
          Slide,
          CategoryList,
          SlideProduct
        },
    }
</script>

<style scoped>

</style>
