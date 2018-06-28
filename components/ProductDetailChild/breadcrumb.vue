<template>
  <div class="breadcrumbs">
    <ol class="breadcrumb-page " itemscope itemtype="http://schema.org/BreadcrumbList">
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
  </div>
</template>

<script>
    export default {
        props: ['breadcrumb'],
        name: "breadcrumb"
    }
</script>

<style scoped>

</style>
