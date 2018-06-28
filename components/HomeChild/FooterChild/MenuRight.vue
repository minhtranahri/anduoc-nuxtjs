<template>
  <div id="apendMenuRight">
    <ul id="menuRight">
      <li class="drag-cart">
        <nuxt-link to="">
          <p>
            <i class="mcon-shopping-cart-2"></i>
            Giỏ hàng                        <span class="change-I-cart">0</span>
          </p>
        </nuxt-link>
      </li>
      <li class="taikhoan">
        <nuxt-link to="">
          <p>
            <i class="mcon-user-2"></i>
            Tài khoản                    </p>
        </nuxt-link>
      </li>
      <li class="yeuthich">
        <nuxt-link to="">
          <p>
            <i class="mcon-heart"></i>
            Yêu thích                    </p>
        </nuxt-link>
      </li>
      <li class="daxem">
        <nuxt-link to="">
          <p>
            <i class="mcon-eye"></i>
            Đã xem                    </p>
        </nuxt-link>
      </li>
      <li class="scrollTop">
        <p><i class="si"></i></p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "MenuRight"
    }
</script>

<style scoped>

</style>
