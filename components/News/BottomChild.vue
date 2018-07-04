<template>
  <div class="new-bottom">
    <div v-if="this.$store.state.loaded" class="new-category">
      <div v-for="(item, index) in bottomnews" :key="index" class="new-category-item">
        <h3>
          <nuxt-link :to="item.link_web" :title="item.title">
            {{item.title}}
          </nuxt-link>
        </h3>
        <div class="new-category-item-first-image">
          <nuxt-link :to="item.child[0].link_web" :title="item.child[0].title">
            <img :src="item.child[0].picture" onerror="this.src = '/images/default.jpg'" :alt="item.child[0].title">
          </nuxt-link>
        </div>
        <div class="new-category-item-first-text">
          <h4><nuxt-link :to="item.child[0].link_web" :title="item.child[0].title">
            {{item.child[0].title}}
          </nuxt-link></h4>
          <p>{{item.child[0].teaser}}</p>
        </div>
        <ul>
          <li v-for="(sub, index2) in item.child" :key="index2" v-if="index2 != 0">
            <div class="new-category-item-image">
              <nuxt-link :to="sub.link_web" :title="sub.title">
                <img :src="sub.picture" onerror="this.src = '/images/default.jpg'" :alt="sub.title">
              </nuxt-link>
            </div>
            <div class="new-category-item-title">
              <nuxt-link :to="sub.link_web" :title="sub.title">
                {{sub.title}}
              </nuxt-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <vue-content-loading v-if="!this.$store.state.loaded" width="100" height="130" primary="#d8d2d2" secondary="#c1baba" speed="1">
      <rect x="0" y="0" rx="0.5" ry="0.5" width="33" height="18" />
      <rect x="0" y="19" rx="0.5" ry="0.5" width="33" height="1" />
      <rect x="0" y="21" rx="0.5" ry="0.5" width="20" height="1" />

      <rect x="0" y="24" rx="0.5" ry="0.5" width="5" height="7" />
      <rect x="6" y="25" rx="0.5" ry="0.5" width="25" height="1" />
      <rect x="6" y="27" rx="0.5" ry="0.5" width="20" height="1" />

      <rect x="0" y="32" rx="0.5" ry="0.5" width="5" height="7" />
      <rect x="6" y="33" rx="0.5" ry="0.5" width="25" height="1" />
      <rect x="6" y="35" rx="0.5" ry="0.5" width="20" height="1" />

      <rect x="0" y="40" rx="0.5" ry="0.5" width="5" height="7" />
      <rect x="6" y="41" rx="0.5" ry="0.5" width="25" height="1" />
      <rect x="6" y="43" rx="0.5" ry="0.5" width="20" height="1" />


      <rect x="34" y="0" rx="0.5" ry="0.5" width="33" height="18" />
      <rect x="34" y="19" rx="0.5" ry="0.5" width="33" height="1" />
      <rect x="34" y="21" rx="0.5" ry="0.5" width="20" height="1" />

      <rect x="34" y="24" rx="0.5" ry="0.5" width="5" height="7" />
      <rect x="40" y="25" rx="0.5" ry="0.5" width="25" height="1" />
      <rect x="40" y="27" rx="0.5" ry="0.5" width="20" height="1" />

      <rect x="34" y="32" rx="0.5" ry="0.5" width="5" height="7" />
      <rect x="40" y="33" rx="0.5" ry="0.5" width="25" height="1" />
      <rect x="40" y="35" rx="0.5" ry="0.5" width="20" height="1" />

      <rect x="34" y="40" rx="0.5" ry="0.5" width="5" height="7" />
      <rect x="40" y="41" rx="0.5" ry="0.5" width="25" height="1" />
      <rect x="40" y="43" rx="0.5" ry="0.5" width="20" height="1" />


      <rect x="68" y="0" rx="0.5" ry="0.5" width="33" height="18" />
      <rect x="68" y="19" rx="0.5" ry="0.5" width="33" height="1" />
      <rect x="68" y="21" rx="0.5" ry="0.5" width="20" height="1" />

      <rect x="68" y="24" rx="0.5" ry="0.5" width="5" height="7" />
      <rect x="74" y="25" rx="0.5" ry="0.5" width="25" height="1" />
      <rect x="74" y="27" rx="0.5" ry="0.5" width="20" height="1" />

      <rect x="68" y="32" rx="0.5" ry="0.5" width="5" height="7" />
      <rect x="74" y="33" rx="0.5" ry="0.5" width="25" height="1" />
      <rect x="74" y="35" rx="0.5" ry="0.5" width="20" height="1" />

      <rect x="68" y="40" rx="0.5" ry="0.5" width="5" height="7" />
      <rect x="74" y="41" rx="0.5" ry="0.5" width="25" height="1" />
      <rect x="74" y="43" rx="0.5" ry="0.5" width="20" height="1" />
    </vue-content-loading>
  </div>
</template>

<script>
  import VueContentLoading from "vue-content-loading"

    export default {
        props: ['bottomnews'],
      components: {VueContentLoading},
        name: "BottomChild"
    }
</script>

<style scoped>

</style>
