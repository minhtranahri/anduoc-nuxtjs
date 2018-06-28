<template>
  <div class="new-bottom">
    <div class="new-category">
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
  </div>
</template>

<script>
    export default {
        props: ['bottomnews'],
        name: "BottomChild"
    }
</script>

<style scoped>

</style>
