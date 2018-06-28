<template>
  <div class="sort-by-options w100 fl">
    <ul class="wrap-sort-by-options w100 fl">
      <li class="item-sort-by-op options w20">
        <nuxt-link to="?sortBy=pop&Order=desc">Phổ biến</nuxt-link>
      </li>
      <li class="item-sort-by-op options  w20">
        <nuxt-link to="?sortBy=time&Order=desc">Mới nhất </nuxt-link>
      </li>
      <li class="item-sort-by-op options w20">
        <nuxt-link to="?sortBy=sales&Order=desc">Bán chạy</nuxt-link>
      </li>
      <li class="item-sort-by-op price options  w20">
        <p>Giá</p>
        <ul class="sub-sort-by-op">
          <li class="item-sort-by-op">
            <nuxt-link to="?sortBy=price&Order=asc">Giá: Thấp đến cao</nuxt-link>
          </li>
          <li class="item-sort-by-op">
            <nuxt-link to="?sortBy=price&Order=desc">Giá: cao đến thấp</nuxt-link>
          </li>
        </ul>
      </li>
      <li class="item-sort-by-op  w20">
        <label for="shop-like">
          <input id="shop-like" type="checkbox">
          <span class="checkmark"></span>
          Shop yêu thích
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Filter"
    }
</script>

<style scoped>

</style>
