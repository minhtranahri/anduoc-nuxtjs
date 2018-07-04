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
            <li v-for="(item, index) in menu" :key="index" v-if="index < 7 && getLoadedStatus">
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
            <vue-content-loading height=120 width=100 v-if="!this.$store.state.loaded" primary="#d8d2d2" secondary="#c1baba" speed="1">
              <rect x="5" y="0" rx="3" ry="3" width="90" height="10" />
              <rect x="5" y="13" rx="3" ry="3" width="90" height="10" />
              <rect x="5" y="26" rx="3" ry="3" width="90" height="10" />
              <rect x="5" y="39" rx="3" ry="3" width="90" height="10" />
              <rect x="5" y="52" rx="3" ry="3" width="90" height="10" />
              <rect x="5" y="65" rx="3" ry="3" width="90" height="10" />
              <rect x="5" y="78" rx="3" ry="3" width="90" height="10" />
              <rect x="5" y="91" rx="3" ry="3" width="90" height="10" />
              <rect x="5" y="104" rx="3" ry="3" width="90" height="10" />
            </vue-content-loading>
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
    import VueContentLoading from 'vue-content-loading';
    import VclBullet from "vue-content-loading"

    export default {
        name: "MainMenu",
        components: {
          VueContentLoading,
        },
      computed: {
        getLoadedStatus: function () {
          return this.$store.state.loaded;
        }
      },
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
