<template>
  <header id="header">
    <div class="wrap-header">
      <div id="top-header">
      <h1>Thực phẩm không già</h1>
      <div class="g1180">
        <div id="header-hotline">
          <p>
            <i class="mcon-phone-1"></i>
            Hot Line: 18008183 - 0942080080
          </p>
        </div>
        <div id="account-header">
          <div class="account support">
            <nuxt-link to="/" rel="nofollow">
              Hộ trợ và giải đáp
              <i class="mcon-caret-down"></i>
            </nuxt-link>
            <div class="box-acc-support">
              <div class="box-acc-support">
                <nuxt-link to="#" rel="nofollow">Giới thiệu</nuxt-link>
                <nuxt-link to="#" rel="nofollow">Tài khoản của tôi</nuxt-link>
                <nuxt-link to="#" rel="nofollow">Hướng dẫn đổi trả và bảo hành</nuxt-link>
                <nuxt-link to="#" rel="nofollow">Hướng dẫn mua hàng</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <fix-scr></fix-scr>
      <div class="clear-fix"></div>
      <div id="header-res" class="g1180">
      <div class="fa-menu">
        <nuxt-link class="btn-menu" to="">
          <i class="mcon-bars"></i>
        </nuxt-link>
        <div class="menu-res">
          <h4 class="title-menu">
            <nuxt-link to="/" title="Logo anduoc.vn">
              <img src="/images/store_1496111869_993.png" alt="Logo anduoc.vn">
            </nuxt-link>
          </h4>

          <ul class="list-menu-res">
            <li class="item-menu"><nuxt-link to="/"> Trang chủ</nuxt-link></li>
            <li class="item-menu"><nuxt-link to="/tin-tuc"> Tin tức - sự kiện</nuxt-link></li>

            <li class="item-menu"><nuxt-link to="/thuc-pham-chuc-nang" title="Thực phẩm chức năng">Thực phẩm chức năng</nuxt-link><i class="mcon-angle-right"></i>
              <div class="content-sub-menu">
                <h4 title="Thực phẩm chức năng" class="title-menu"><i class="mcon-angle-left" aria-hidden="true"></i> Thực phẩm chức năng</h4>
                <ul class="sub-menu">
                  <li class="item-menu"><nuxt-link title="TPCN - Giảm cân" to="/tpcn-giam-can">TPCN - Giảm cân</nuxt-link></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <div class="fas-search">
        <div class="btn-search-res">
          <form action="/search" class="form-search-res" method="get">
            <input name="keyword" type="text" placeholder="Tìm kiếm" class="text-search-res">
          </form>
          <i class="mcon-search"></i>
        </div>
      </div>

      <div class="fa-cart">
        <nuxt-link to="list-cart-page">
          <i class="mcon-shopping-cart-2"></i>
        </nuxt-link>
        <span id="num-in-cart-mobile">0</span>
      </div>
      <div class="acc-res">
        <div class="btn-acc-res">
          <i class="mcon-user"></i>
        </div>
        <div class="content-acc-ress">
          <h4 class="title-menu">
            menu
          </h4>
          <ul class="list-acc-res">
            <li class="item-menu"  ><nuxt-link to="list-cart-page" id="num-in-cart-1"> Giỏ hàng (<b >0</b>)</nuxt-link></li>
            <li class="item-menu">

            </li>
            <li><nuxt-link to="/dang-nhap.aspx?urlreturn=Lw--"><img src="/images/icon-login-facebook.png" width="100%"/> </nuxt-link></li>

            <li class="item-menu">
              <nuxt-link to="">Tài khoản</nuxt-link>
            </li>
            <li class="item-menu">
              <nuxt-link to="">Yêu thích</nuxt-link>
            </li>
            <li class="item-menu">
              <nuxt-link to="">Đã xem</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
      <main-menu></main-menu>
    </div>
  </header>
</template>

<script>
    import MainMenu from './HeaderChild/MainMenu'
    import FixScr from './HeaderChild/FixScr'

    export default {
        name: "Header",
        components:{
          MainMenu,
          FixScr
        },
    }
</script>

<style scoped>

</style>
