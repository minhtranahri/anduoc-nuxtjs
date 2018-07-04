<template>
  <div class="new_top">
    <div v-if="this.$store.state.loaded" class="new_top-left">
      <div class="content">
        <nuxt-link :to="topnews.first_new.link_web" :title="topnews.first_new.title">
          <img :src="topnews.first_new.picture" onerror="this.src = '/images/default.jpg'"  />
        </nuxt-link>
        <h4 class="new-lead">
          <nuxt-link :to="topnews.first_new.link_web" :title="topnews.first_new.title">
            {{topnews.first_new.title}}
          </nuxt-link>
        </h4>
        <p>{{topnews.first_new.teaser}}</p>
        </div>
    </div>
    <div v-if="this.$store.state.loaded" class="new_top-right">
      <ul>
        <li v-for="(item, index) in topnews.news" :key="index">
          <div class="content">
            <div class="new_top-right-image">

              <img :src="item.picture" onerror="this.src = '/images/default.jpg'" :alt="item.title" :title="item.title"  />
            </div >
            <div class="content-text">
              <h4>
                <nuxt-link :to="item.link_web" :title="item.title">
                  {{item.title}}
                </nuxt-link>
              </h4>
              <p>{{item.teaser}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <vue-content-loading v-if="!this.$store.state.loaded" width="100" height="37" primary="#d8d2d2" secondary="#c1baba" speed="1">
      <rect x="0" y="0" rx="0.5" ry="0.5" width="50" height="30" />
      <rect x="0" y="31" rx="0.5" ry="0.5" width="50" height="3" />

      <rect x="51" y="0" rx="0.5" ry="0.5" width="10" height="10" />
      <rect x="62" y="2" rx="0.5" ry="0.5" width="37" height="1" />
      <rect x="62" y="3.5" rx="0.5" ry="0.5" width="37" height="1" />
      <rect x="62" y="5" rx="0.5" ry="0.5" width="20" height="1" />

      <rect x="51" y="12" rx="0.5" ry="0.5" width="10" height="10" />
      <rect x="62" y="14" rx="0.5" ry="0.5" width="37" height="1" />
      <rect x="62" y="15.5" rx="0.5" ry="0.5" width="37" height="1" />
      <rect x="62" y="17" rx="0.5" ry="0.5" width="20" height="1" />

      <rect x="51" y="24" rx="0.5" ry="0.5" width="10" height="10" />
      <rect x="62" y="26" rx="0.5" ry="0.5" width="37" height="1" />
      <rect x="62" y="27.5" rx="0.5" ry="0.5" width="37" height="1" />
      <rect x="62" y="29" rx="0.5" ry="0.5" width="20" height="1" />
    </vue-content-loading>
  </div>
</template>

<script>
  import VueContentLoading from 'vue-content-loading';

    export default {
        props: ['topnews'],
        components: {VueContentLoading},
        name: "TopNews"
    }
</script>

<style scoped>

</style>
