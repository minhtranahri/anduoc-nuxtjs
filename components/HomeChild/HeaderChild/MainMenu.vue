<template>
  <div class="main-menu-fix">
    <div id="list-menu" class="g1180">
      <div id="slimScrollDiv">
        <nav id="menu" class="menu">
          <p class="cate-menu">
            <i class="mcon-bars"></i>
            <span>Danh mục sản phẩm</span>
          </p>
          <ul>
            <li v-for="(item, index) in menu" :key="index" v-if="index < 7">
              <nuxt-link :title="item.name" :to="item.link_web">
                <i class="mcon-angle-right" aria-hidden="true"></i>{{item.name}}
              </nuxt-link>
              <ul class="sub-menu">
                <p class="title-sub-menu"><nuxt-link :to="item.link_web" :title="item.name">{{item.name}}</nuxt-link></p>
                <li v-for="(sub, index) in item.child" :key="index" class=""><nuxt-link :to="sub.link_web" :title="sub.name">{{sub.name}}</nuxt-link></li>
              </ul>
            </li>
            <li class="news-active">
            </li>
          </ul>
        </nav>
      </div>
      <div id="policy-header">
        <nuxt-link to="/tin-tuc">Tin tức - sự kiện</nuxt-link>
        <nuxt-link to="" class="si nth1"><i class="mcon-cart-shiping"></i> Giao hàng toàn quốc</nuxt-link>
        <nuxt-link to="" class="si nth3"><i class="mcon-shipping-timed"></i> Đổi trả trong 10 ngày</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MainMenu",
        data(){
          return {
            menu: null
          }
        },
        mounted() {
          this.$axios.get('http://dev.anduoc.vn/api/navigate').then(response => this.menu = response.data.data)
        }
    }
</script>

<style scoped>

</style>
