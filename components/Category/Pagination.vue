<template>
  <div class="pagiantion-product-by-category w100 fl center">
    <div v-if="this.$store.state.loaded">
    <span>
        <nuxt-link v-if="pagination.link_first != ''" :to="pagination.link_first">
          <i class="mcon-angle-double-left" aria-hidden="true"></i>
        </nuxt-link>
    </span>
    <span v-if="pagination.link_prev != ''" class="res_large">
        <nuxt-link :to="pagination.link_prev">
          <i class="mcon-angle-left" aria-hidden="true">
          </i>
        </nuxt-link>
    </span>

      <span v-for="(item, index) in pagination.page" :key="index" :class="item.class">
        <nuxt-link :title="item.title" :to="item.link">{{item.title}}</nuxt-link>
      </span>

    <span v-if="pagination.link_next != ''" class="res_large" >
      <nuxt-link :to="pagination.link_next">
        <i class="mcon-angle-right"></i>
      </nuxt-link>
    </span>
    <span v-if="pagination.link_last != ''">
      <nuxt-link :to="pagination.link_last">
        <i class="mcon-angle-double-right">
        </i>
      </nuxt-link>
    </span>
    </div>
    <vue-content-loading v-if="!this.$store.state.loaded" width="100" height="5" primary="#eeeeee" secondary="#f7f7f7" speed="1">
      <rect x="35" y="0" rx="0.5" ry="0.5" width="3.5" height="3.5" />
      <rect x="39.5" y="0" rx="0.5" ry="0.5" width="3.5" height="3.5" />
      <rect x="44" y="0" rx="0.5" ry="0.5" width="3.5" height="3.5" />
      <rect x="48.5" y="0" rx="0.5" ry="0.5" width="3.5" height="3.5" />
      <rect x="53" y="0" rx="0.5" ry="0.5" width="3.5" height="3.5" />
    </vue-content-loading>
  </div>
</template>

<script>
  import VueContentLoading from "vue-content-loading"
    export default {
        props: ['pagination'],
        name: "Pagination",
      components: {VueContentLoading}
    }
</script>

<style scoped>

</style>
