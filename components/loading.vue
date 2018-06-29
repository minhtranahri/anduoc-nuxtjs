<template>
  <div class="loadingAnimation" v-if="loading">
    <img style="width: 100px" src="/images/giphy.gif">
  </div>
</template>

<script>
    export default {
        name: "loading",
      data: () => ({
        loading: false
      }),
      methods: {
        start () {
          this.loading = true
        },
        finish () {
          this.loading = false
        }
      }
    }
</script>

<style scoped>
  .loadingAnimation{
    text-align: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center; position: fixed;z-index: 1000; top: 0; flex-direction: column;
  }
</style>
