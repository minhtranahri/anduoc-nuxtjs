<template>
  <div class="new-content">
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
</template>

<script>
    export default {
        props: ['content'],
        name: "NewsContent",
    }
</script>

<style scoped>

</style>
