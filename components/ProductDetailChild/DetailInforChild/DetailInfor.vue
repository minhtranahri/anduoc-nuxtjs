<template>
  <div class="middleProductView">
    <div v-if="this.$store.state.loaded" class="productRate">
      <h1 title="Trà túi lọc diệp hạ châu Ladophar">{{product.name}}</h1>
    </div>
    <div v-if="this.$store.state.loaded" class="BillInformation">
      <p class="price-pro">{{product.price}} VNĐ</p>
      <p>Giá trước đây
        <span style="text-decoration: line-through">{{product.old_price}} VNĐ</span>
      </p>
      <ul class="vote-view">
        <li>
          <div class="rating_user">
            <span class="star-view">

              <i class="mcon-star"></i>

              <i class="mcon-star active"></i>

            </span>
            <span class="star-view">

              <i class="mcon-star"></i>

              <i class="mcon-star active"></i>

            </span>
            <span class="star-view">

              <i class="mcon-star"></i>

              <i class="mcon-star active"></i>

            </span>
            <span class="star-view">

              <i class="mcon-star"></i>

              <i class="mcon-star active"></i>

            </span>
            <span class="star-view">

              <i class="mcon-star"></i>

              <i class="mcon-star active star-width-30"></i>

            </span>
          </div>
        </li>
        <li>
          <span>9</span>
          <span>Đánh giá</span>
        </li>
        <li>
          <span class="large" style="color:#61bc48;">6855</span>
          <span>Lượt đã xem</span>
        </li>
        <li>
          <span class="large large-34">59</span>
          <span>Lượt mua thành công</span>
        </li>
      </ul>
      <p class="save-prodetail">Tiết kiệm
        <b>35%</b>
      </p>
      <div class="ProductInformation">
        <table>
          <tbody>
          <tr>
            <td class="bold">ID sản phẩm</td>
            <td>{{product.id}}</td>
          </tr>
          <tr>
            <td class="bold">Tên sản phẩm</td>
            <td>{{product.name}}</td>
          </tr>
          <tr>
            <td class="bold">Thương hiệu</td>
            <td>{{product.bra_name}}
            </td>
          </tr>
          <tr>
            <td class="bold">Xuất xứ</td>
            <td>Đang cập nhật                                </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-if="this.$store.state.loaded" class="SaleProduct">
      <div>
        <div class="pick">
          <div class="head">Số lượng</div>
          <div class="btn" id="sub">-</div>
          <input class="input" type="text" id="quantity" value="1">

          <div class="btn" id="add">+</div>
          <div class="head head-pro"><span
            class="pro-quantity">{{product.quantity}}</span> sản phẩm có sẵn
          </div>
        </div>
        <div class="quantity-error">
          <p>Xin lỗi chúng tôi không còn đủ sản phẩm này!</p>

        </div>



      </div>

    </div>
    <div v-if="this.$store.state.loaded" class="add-to-cart">
      <div id="buy-btn">
        <button id="buy">Mua ngay</button>
        <button id="cart">

          <a data_id="767" id="id_pro"><i class="mcon-shopping-bag"></i></a>
          Thêm vào giỏ                        </button>
      </div>

    </div>
    <div v-if="this.$store.state.loaded" class="support-online">
      <h2>Hỗ trợ trực tuyến</h2>
      <p>
        <i class="mcon-skype blue"></i>
        <span>Hỗ trợ 1-18008183 </span>
      </p>
      <p>
        <i class="mcon-smile red"></i>
        <span>Hỗ trợ 2-0944944449 </span>
      </p>
    </div>
    <vue-content-loading v-if="!this.$store.state.loaded" :width="100" :height="100" primary="#d8d2d2" secondary="#c1baba" speed="1">
      <rect x="0" y="0" rx="1" ry="1" width="100" height="5" />
      <rect x="0" y="6" rx="1" ry="1" width="60" height="5" />
      <rect x="0" y="15" rx="1" ry="1" width="30" height="5" />
      <rect x="0" y="22" rx="1" ry="1" width="20" height="2" />
      <rect x="22" y="22" rx="1" ry="1" width="20" height="2" />
      <rect x="44" y="22" rx="1" ry="1" width="30" height="2" />
      <rect x="0" y="28" rx="1" ry="1" width="100" height="20" />
      <rect x="0" y="52" rx="1" ry="1" width="20" height="8" />
      <rect x="0" y="62" rx="1" ry="1" width="30" height="11" />
      <rect x="31" y="62" rx="1" ry="1" width="30" height="11" />
      <!--<rect x="0" y="78" rx="0" ry="0" width="60" height="2" />-->
      <!--<rect x="0" y="82" rx="0" ry="0" width="60" height="2" />-->
      <!--<rect x="0" y="86" rx="0" ry="0" width="60" height="2" />-->
      <!--<rect x="0" y="90" rx="0" ry="0" width="60" height="2" />-->
      <!--<rect x="0" y="94" rx="0" ry="0" width="60" height="2" />-->
    </vue-content-loading>
  </div>
</template>

<script>
  import VueContentLoading from "vue-content-loading"
    export default {
        props: ['product'],
        name: "DetailInfor",
      components: {VueContentLoading}
      // watch: {
      //   hots: function () {
      //     console.log(this.product[0].name)
      //   }
      // }
    }
</script>

<style scoped>

</style>
