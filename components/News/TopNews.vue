<template>
  <div class="new_top">
    <div class="new_top-left">
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
    <div class="new_top-right">
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
  </div>
</template>

<script>
    export default {
        props: ['topnews'],
        name: "TopNews"
    }
</script>

<style scoped>

</style>
