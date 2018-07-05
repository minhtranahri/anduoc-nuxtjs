<template>
  <div class="new-content">
    <div v-if="this.$store.state.loaded">
    <h1>{{content.title}}</h1>
    <p>
      <i class="mcon-clock"></i>
      {{content.date}}
    </p>
    <div class="new-content-detail">
      <p>
        <strong>{{content.teaser}}</strong>
      </p>
      <div class="short_desc" v-html="content.description">
      </div>
      <div class="social-network-box">

        <iframe src="https://www.facebook.com/plugins/like.php?to=http%3A%2F%2Fdev.anduoc.vn/3-ly-do-thuyet-phuc-ban-nen-tap-boi-ngay-bay-gio.html-news181.html&width=112&layout=button&action=like&size=small&show_faces=true&share=true&height=65&appId=914235252058138" width="112" height="65" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true">

        </iframe>
        <div class="fb-comments" data-to="" data-numposts="5" width="100%" ></div>
      </div>
    </div>
    </div>
    <vue-content-loading v-if="!this.$store.state.loaded" width="100" height="120" primary="#eeeeee" secondary="#f7f7f7" speed="1">
      <rect x="0" y="1" rx="0.5" ry="0.5" width="100" height="2" />
      <rect x="0" y="4" rx="0.5" ry="0.5" width="100" height="2" />
      <rect x="0" y="7" rx="0.5" ry="0.5" width="40" height="2" />
      <rect x="20" y="11" rx="0.5" ry="0.5" width="60" height="50" />
      <rect x="0" y="63" rx="0.5" ry="0.5" width="100" height="2" />
      <rect x="0" y="66" rx="0.5" ry="0.5" width="100" height="2" />
      <rect x="0" y="69" rx="0.5" ry="0.5" width="100" height="2" />
      <rect x="0" y="72" rx="0.5" ry="0.5" width="100" height="2" />
      <rect x="0" y="75" rx="0.5" ry="0.5" width="100" height="2" />
      <rect x="0" y="78" rx="0.5" ry="0.5" width="100" height="2" />
      <rect x="0" y="81" rx="0.5" ry="0.5" width="100" height="2" />
      <rect x="0" y="84" rx="0.5" ry="0.5" width="100" height="2" />
      <rect x="0" y="87" rx="0.5" ry="0.5" width="100" height="2" />
      <rect x="0" y="90" rx="0.5" ry="0.5" width="100" height="2" />
      <rect x="0" y="93" rx="0.5" ry="0.5" width="100" height="2" />
      <rect x="0" y="96" rx="0.5" ry="0.5" width="60" height="2" />
    </vue-content-loading>
  </div>
</template>

<script>
  import VueContentLoading from "vue-content-loading"
    export default {
      props: ['content'],
      components: {VueContentLoading},
      name: "NewsContent",
    }
</script>

<style scoped>

</style>
