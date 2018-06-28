<template>
  <div class="fix-scr fix">
    <div id="search-header">
      <div class="g1180">
        <div class="block-logo">
          <nuxt-link to="/" rel="nofollow" class="logo-checking">
            <img src="/images/store_1496111869_993.png" onerror="this.src = '/images/default.jpg'" alt="Dược phâm khong gia">
          </nuxt-link>
        </div>
        <div class="block-search">
          <div class="action-top">
            <div class="notification parent-tip">
              <nuxt-link to="#">
                <!--<i class="icon-ring" data-noti="1"></i>-->
                <i class="mcon-bell" data-noti="1"></i>
                <div>Thông báo</div>
              </nuxt-link>
              <div class="tooltip">
                <div class="content-tip content-tip-notification">
                  <div class="title-tooltip">
                    <strong>Thông báo</strong>
                  </div>
                  <ul>
                    <li>
                      <nuxt-link to="#">
                        <div class="noti-img">
                          <img />
                        </div>
                        <div class="noti-content">
                          <div class="noti-teaser">
                            <b>Võ Viết Hiểu </b> <span>Đăng tin</span><b> Bán kho, nhà xưởng  tại Xã Điện Nam </b><span>: Bán Ki Ốt và Shophouse khu phố chợ Điện Nam Bắc gần KCN Điện Nam Điện Ngọc giá gốc Chủ đầu tư </span>
                            <span>: Bán Ki Ốt và Shophouse khu phố chợ Điện Nam Bắc gần KCN Điện Nam Điện Ngọc giá gốc Chủ đầu tư </span>
                          </div>
                          <time>11/12/2018</time>
                        </div>
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="user-head parent-tip">
              <nuxt-link to="/dang-nhap.aspx?urlreturn=Lw--">
                <i class="mcon-user-1"></i>
                <div>
                  <span>Tài khoản</span>
                  <span>Đăng nhập</span>
                </div>
              </nuxt-link>

            </div>
            <div class="cart">
              <nuxt-link to="v3_list-cart-page">
                <i class="mcon-shopping-cart-3"></i>
                <span class="title-cart">Giỏ hàng</span>

                <span class="num-in-cart" value="0" id="num-in-cart">0</span>
              </nuxt-link>
            </div>
           </div>
          <form action="/search" id="search" method="GET">
            <input name="keyword" type="text" placeholder="Tìm kiếm sản phẩm tại đây" value="" v-model="keyword">
            <nuxt-link :to="'/search?keyword='+keyword">
              <button class="search-submit"><i class="mcon-search-bold"></i></button></nuxt-link>
            <nuxt-link to="/profile/dang-ban.aspx" class="btn-upload-product"><i class="mcon-cloud-upload"></i>đăng bán</nuxt-link>
          </form>
          <div class="suggest">
            <p><b>Từ khóa phổ biến</b></p>
            <div class="suggest-list">
              <p>Giảm cân New Perfect, Rich Slim, Tăng cường sinh lý nam Ngọc Để Hoàn,</p>
            </div>
            <p class="clear-fix"></p>
          </div>
        </div>
        <div class="clear-fix"></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FixScr",
      data() {
        return {
          keyword: ''
        }
      },
      watch: {
        keyword:function () {
          this.$store.commit('modifiedKey', this.keyword)
        }
      }
    }
</script>

<style scoped>

</style>
