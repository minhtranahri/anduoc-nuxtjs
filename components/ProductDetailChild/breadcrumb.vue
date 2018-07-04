<template>
  <div class="breadcrumbs">
    <ol v-if="this.$store.state.loaded" class="breadcrumb-page " itemscope itemtype="http://schema.org/BreadcrumbList">
      <li class="item-breadcrumb" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
        <nuxt-link itemprop="item" title="Trang chủ" to="/"><span itemprop="name">Trang chủ</span></nuxt-link>
        <meta itemprop="position" content="1" />
      </li>
      <li v-for="(item, index) in breadcrumb" class="item-breadcrumb" :key="index"  itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
        <nuxt-link itemprop="item" :title="item.name" :to="item.url">
          <span itemprop="name">{{item.name}}</span>
        </nuxt-link>
        <meta itemprop="position" content="2" />
      </li>
    </ol>
    <vue-content-loading v-if="!this.$store.state.loaded" width="100" height="7" primary="#d8d2d2" secondary="#c1baba" speed="1">
      <rect x="0" y="1" rx="0.5" ry="0.5" width="15" height="1" />
      <rect x="16" y="1" rx="0.5" ry="0.5" width="15" height="1" />
      <rect x="32" y="1" rx="0.5" ry="0.5" width="15" height="1" />
    </vue-content-loading>
  </div>
</template>

<script>
  import VueContentLoading from "vue-content-loading"
    export default {
        props: ['breadcrumb'],
      components: {
          VueContentLoading
      },
        name: "breadcrumb"
    }
</script>

<style scoped>

</style>
