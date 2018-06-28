<template>
  <ul>
    <li v-for="(item,index) in footer" :key="index" v-if="index<5">
      <h6>
        <nuxt-link :to="item.link_web"><span>{{item.name}}</span></nuxt-link>
      </h6>
      <nuxt-link v-for="(sub, index_s) in item.child" :to="sub.link_web" :key="index_s"
         :title="sub.name">
        <span>{{sub.name}}</span></nuxt-link>
    </li>

  </ul>
</template>

<script>
    export default {
        name: "FooterContent",
        data() {
          return {
            footer: null,
          }
        },
        mounted() {
          this.$axios
            .get('http://dev.anduoc.vn/api/navigate')
            .then(response => this.footer = response.data.data)
        }

    }
</script>

<style scoped>

</style>
