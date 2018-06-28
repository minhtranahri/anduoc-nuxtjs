<template>
    <div v-if="reviewsData != null">
      <div class="product-evaluate-content">
        <script>
        //user.set(0, '', 786, 1, 0, '/dang-nhap.aspx?urlreturn=L3N1YS1nbHVjZXJuYS1odW9uZy12YW5pLWFiYm90dC1sb24tNDAwZy1wNzg2Lmh0bWw-');
        </script>
        <div class="result_rating w40">
          <div class="wrap_star_reviews w40">
            <div class="start_review"><i class="mcon-star"></i><span class="point-review">{{reviewsData.average}}</span></div>
            <div class="text_star_reviews">
              Sản phẩm như mô tả
              <br>
              ({{reviewsData.total}} đánh giá)
            </div>
          </div>
          <div class="content_detail_star_reviews w60">
            <div class="item_detail_star_reviews">
              <span class="number_star">5 <i class="mcon-star"></i></span>
              <span class="percent_bar">
                <span :style="'width: '+percentGenerate(reviewsData.count_el[5],rating1[4])+'%'">

                </span>
              </span>
              <span class="percent_star">{{Math.trunc(percentGenerate(reviewsData.count_el[5],rating1[4]))}}%</span>
            </div>
            <div class="item_detail_star_reviews">
              <span class="number_star">4 <i class="mcon-star"></i></span>
              <span class="percent_bar">
                                           <span :style="'width: '+percentGenerate(reviewsData.count_el[4],rating1[3])+'%'"></span>
                                       </span>
              <span class="percent_star">{{Math.trunc(percentGenerate(reviewsData.count_el[4],rating1[3]))}}%</span>
            </div>
            <div class="item_detail_star_reviews">
              <span class="number_star">3 <i class="mcon-star"></i></span>
              <span class="percent_bar">
                                           <span :style="'width: '+percentGenerate(reviewsData.count_el[3],rating1[2])+'%'"></span>
                                       </span>
              <span class="percent_star">{{Math.trunc(percentGenerate(reviewsData.count_el[3],rating1[2]))}}%</span>
            </div>
            <div class="item_detail_star_reviews">
              <span class="number_star">2 <i class="mcon-star"></i></span>
              <span class="percent_bar">
                                           <span :style="'width: '+percentGenerate(reviewsData.count_el[2],rating1[1])+'%'"></span>
                                       </span>
              <span class="percent_star">{{Math.trunc(percentGenerate(reviewsData.count_el[2],rating1[1]))}}%</span>
            </div>
            <div class="item_detail_star_reviews">
              <span class="number_star">1 <i class="mcon-star"></i></span>
              <span class="percent_bar">
                                           <span :style="'width: '+percentGenerate(reviewsData.count_el[1],rating1[0])+'%'"></span>
                                       </span>
              <span class="percent_star">{{Math.trunc(percentGenerate(reviewsData.count_el[1],rating1[0]))}}%</span>
            </div>
          </div>
        </div>
        <div id="form-reviews" class="product-evaluate-box w100 focus">
            <!--<div class="message-eval">-->
              <!--<span>Bạn đánh giá sản phẩm này được mấy  <i class="mcon-star" aria-hidden="true"></i></span>-->
            <!--</div>-->
            <!--<div id="login_revivews">-->
             <!--&lt;!&ndash;<a href="/dang-nhap.aspx?urlreturn=L3N1YS1nbHVjZXJuYS1odW9uZy12YW5pLWFiYm90dC1sb24tNDAwZy1wNzg2Lmh0bWw-">Đăng nhập để đánh giá</a>&ndash;&gt;-->
            <!--</div>-->
            <div class="tab_rev product-evaluate-box-rate" style="margin-top: 2%">
              <p>Đánh giá: </p>

              <section id="rating_product" class="rating">
                <input type="radio" id="star5" name="rating" value="5" v-model="rating"/>
                <label class="mcon" for="star5" title="Tuyệt vời"></label>
                <input type="radio" id="star4" name="rating" value="4" v-model="rating"/>
                <label class="mcon" for="star4" title="Hài lòng"></label>
                <input type="radio" id="star3" name="rating" value="3" v-model="rating"/>
                <label class="mcon" for="star3" title="Bình thường"></label>
                <input type="radio" id="star2" name="rating" value="2" v-model="rating"/>
                <label class="mcon" for="star2" title="Không hài lòng"></label>
                <input type="radio" id="star1" name="rating" value="1" v-model="rating"/>
                <label class="mcon" for="star1" title="Tồi tệ"></label>
              </section>
              <p class="status_rating">Mức độ hài lòng!</p>
              <div id="SubmitReviews" class="btnLogin">
                <button @click="postReview()">Đăng</button>
              </div>
            </div>
            <div class="tab_rev product-evaluate-box-content">
              <i class="error_reviews"></i>
              <!--                                <p> --><!--</p>-->
              <textarea @click="focus()" id="comment" class="content_reviews" name="content_reviews" spellcheck="false"
                        placeholder="Nhập nội dung đánh giá (tối thiểu 30 ký tự)"
                        style="" v-model="content">
              </textarea>
            </div>
        </div>
      </div>
      <div class="product-facebook-comment">
        <div class="product-facebook-comment-content">
          <div id="box-reviews">
            <div v-for="(item, index) in reviewsData.child" :key="index" class="item-reviews" :id="'reviews-'+item.id" :data-id="item.id">
              <div class="ava-user-rev"
                   :style="'background-image: url(\'http://graph.facebook.com/'+item.fbId_user+'/picture?type=square\')'"></div>
              <div class="reviews_main">
                <h4 class="name-user">
                <span class="avat-cm">
                    <div class="avatar-user" :style="'background-image: url(\'http://graph.facebook.com/'+item.fbId_user+'/picture?type=square\')'"></div>
                </span>
                  <div class="box-user-rev">
                    <a :href="'http://facebook.com/'+item.fbId_user" target="_blank">{{item.use_name}}</a>
                    <div class="rating_user">
                      <i v-for="(n, index) in parseInt(item.point)" :key="index" v-if="item.point !== 0" class="mcon-star active"></i>
                        <span>2 tháng trước</span>
                    </div>
                  </div>
                </h4>

                <p class="content-reviews"><span>{{item.content}}</span></p>
              </div>
              <div class="bottom-reviews">
                <a class="reply">Trả lời</a>
              </div>

              <div class="sub-reviews sub-reviews-fix" id="sub-reviews-79">
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
    export default {
        props: ['reviews', 'products'],
        name: "ProductReviews",
        data() {
          return {
            rating: 0,
            content: '',
            reviewsData: null,
            rating1: [0,0,0,0,0],
            temp: false
          }
        },

        mounted() {
          this.reviewsData = this.reviews;
          console.log(this.reviews.total);
        },

        watch: {
          rating: function () {
            this.tempPercentGenerate(this.rating)
          }
        },

        methods: {
          callApi: function() {
            this.$axios
              .get('http://dev.anduoc.vn/api/product/'+this.$route.params.id)
              .then(response => {
                this.reviewsData = response.data.data.reviews;
              });
          },
          percentGenerate: function (items,temp) {
           if(isNaN(items)){
             return temp == 0?0:temp/(this.reviews.total+temp)*100;
           }
           else{
             if(this.temp == false){
               return ((items+temp)/(this.reviews.total+temp))*100;
             }
             else {
               return ((items+temp)/(this.reviews.total+1))*100;
             }
           }
          },
          postReview: function () {
            this.$axios
              .post('http://dev.anduoc.vn/api/reviews',
              'id_user=1' +
              '&id_object='+ this.products.id +
              '&rev_type=1' +
              '&fbId_user=100004752368436' +
              '&name_user=Thu+Trang' +
              '&rating='+ this.rating +
              '&content_reviews='+ this.content +
              '&rev_parent_id=0'
            ).then(response => {
              if(response){
                this.callApi();
                this.rating1 = [0,0,0,0,0];
              }
            })
          },
          tempPercentGenerate: function(level){
            this.temp=true;
            for(var i = 0; i <=4; i++){
              if(i+1 == level){
                this.rating1[i] = 1;
              }
              else this.rating1[i] = 0;
            }
          },
          focus: function () {
            // $("body").css({"opacity":"0.3"});
            // $("#comment").css({"background":"rgba(255, 255, 255, 1)"});
          }
        },
    }
</script>

<style scoped>

</style>
