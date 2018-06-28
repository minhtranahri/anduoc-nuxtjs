<template>
  <footer>
    <!-- Begin footer -->

    <div class="footer-border">
      <div id="boder-footer">
        <div class="inner-boder g1180">
                    <span>
                    </span>
        </div>
      </div>
      <div class="footer-content">
        <div class="footer-content-top">
          <div class="g1180">
            <div class="w25 fl box-footer-left">
              <div id="logo-footer"><img src="/images/store_1496111869_993.png" alt="Dược phâm khong gia"></div>
              <h3 class="company"> An Dược</h3>
              <p class="address-footer">102 Thái Thịnh, Quận Đống Đa, TP. Hà Nội</p>
            </div>
            <div class="w75 fl box-footer-right">
              <footer-content></footer-content>
            </div>

          </div>


        </div>
      </div>
      <div class="footer-content-bottom">
        <div class="g1180"> <span>© Copyright 2008-2018</span> </div>

      </div>


    </div>
    <!--Begin Menu Right-->
    <menu-right></menu-right>
    <!--End Menu Right-->

    <div class="scroll-top">
      <i class="mcon-angle-up"></i>
    </div>

    <div id="call-me">
      <nuxt-link to="tel:18008183" class="btn-call-now"><i class="mcon-phone-square"></i>Gọi miễn phí</nuxt-link>
    </div>

    <!-- End footer -->
  </footer>
</template>

<script>
    import FooterContent from './FooterChild/FooterContent'
    import MenuRight from './FooterChild/MenuRight'

    export default {
        name: "Footer",
        components:{
          FooterContent,
          MenuRight
        }
    }
</script>

<style scoped>

</style>
