<template>
  <div class="pagiantion-product-by-category w100 fl center">
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
</template>

<script>
    export default {
        props: ['pagination'],
        name: "Pagination"
    }
</script>

<style scoped>

</style>
