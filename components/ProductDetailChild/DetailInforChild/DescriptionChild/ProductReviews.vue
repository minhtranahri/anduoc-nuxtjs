<template>
    <div>
      <div v-if="dataReview != null" class="product-evaluate-content">
        <script>
        //user.set(0, '', 786, 1, 0, '/dang-nhap.aspx?urlreturn=L3N1YS1nbHVjZXJuYS1odW9uZy12YW5pLWFiYm90dC1sb24tNDAwZy1wNzg2Lmh0bWw-');
        </script>
        <div class="result_rating w40">
          <div class="wrap_star_reviews w40">
            <div class="start_review"><i class="mcon-star"></i><span class="point-review">{{dataReview.average}}</span></div>
            <div class="text_star_reviews">
              Sản phẩm như mô tả
              <br>
              ({{dataReview.total}} đánh giá)
            </div>
          </div>
          <div class="content_detail_star_reviews w60">
            <div class="item_detail_star_reviews">
              <span class="number_star">5 <i class="mcon-star"></i></span>
              <span class="percent_bar">
                <span :style="'width: '+percentGenerate(dataReview.count_el[5],rating1[4])+'%'">

                </span>
              </span>
              <span class="percent_star">{{Math.trunc(percentGenerate(dataReview.count_el[5],rating1[4]))}}%</span>
            </div>
            <div class="item_detail_star_reviews">
              <span class="number_star">4 <i class="mcon-star"></i></span>
              <span class="percent_bar">
                                           <span :style="'width: '+percentGenerate(dataReview.count_el[4],rating1[3])+'%'"></span>
                                       </span>
              <span class="percent_star">{{Math.trunc(percentGenerate(dataReview.count_el[4],rating1[3]))}}%</span>
            </div>
            <div class="item_detail_star_reviews">
              <span class="number_star">3 <i class="mcon-star"></i></span>
              <span class="percent_bar">
                                           <span :style="'width: '+percentGenerate(dataReview.count_el[3],rating1[2])+'%'"></span>
                                       </span>
              <span class="percent_star">{{Math.trunc(percentGenerate(dataReview.count_el[3],rating1[2]))}}%</span>
            </div>
            <div class="item_detail_star_reviews">
              <span class="number_star">2 <i class="mcon-star"></i></span>
              <span class="percent_bar">
                                           <span :style="'width: '+percentGenerate(dataReview.count_el[2],rating1[1])+'%'"></span>
                                       </span>
              <span class="percent_star">{{Math.trunc(percentGenerate(dataReview.count_el[2],rating1[1]))}}%</span>
            </div>
            <div class="item_detail_star_reviews">
              <span class="number_star">1 <i class="mcon-star"></i></span>
              <span class="percent_bar">
                                           <span :style="'width: '+percentGenerate(dataReview.count_el[1],rating1[0])+'%'"></span>
                                       </span>
              <span class="percent_star">{{Math.trunc(percentGenerate(dataReview.count_el[1],rating1[0]))}}%</span>
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
      <vue-content-loading v-if="dataReview == null" width="100" height="70" primary="#d8d2d2" secondary="#c1baba" speed="1">
        <rect x="0" y="0" rx="1" ry="1" width="100" height="20" />

        <circle cx="5" cy="27" r="3" />
        <rect x="10" y="25.5" rx="1" ry="1" width="10" height="1" />
        <rect x="10" y="27.5" rx="1" ry="1" width="15" height="1" />
        <rect x="2" y="31" rx="1" ry="1" width="50" height="1" />
      </vue-content-loading>
      <vue-content-loading v-if="!commentLoadStatus" width="100" height="10" primary="#d8d2d2" secondary="#c1baba" speed="1">
        <!--<rect x="0" y="0" rx="1" ry="1" width="100" height="20" />-->

        <circle cx="5" cy="5" r="3" />
        <rect x="10" y="3.5" rx="1" ry="1" width="10" height="1" />
        <rect x="10" y="5.5" rx="1" ry="1" width="15" height="1" />
        <rect x="2" y="9" rx="1" ry="1" width="50" height="1" />
      </vue-content-loading>
      <div v-if="dataReview != null" class="product-facebook-comment">
        <div class="product-facebook-comment-content">
          <div id="box-reviews">
            <div v-for="(item, index) in dataReview.child" :key="index" class="item-reviews" :id="'reviews-'+item.id" :data-id="item.id">
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
                        <span>{{item.date_create}}</span>
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
  import VueContentLoading from "vue-content-loading"
  import VclFacebook from "vue-content-loading"

    export default {
        props: ['reviews', 'products'],
        name: "ProductReviews",
      components: {VueContentLoading, VclFacebook},
        data() {
          return {
            rating: 0,
            content: '',
            commentLoadStatus: true,
            rating1: [0,0,0,0,0],
            temp: false
          }
        },

        computed: {
          dataReview: function () {
            return this.reviews
          }
        },

        mounted() {
          console.log(this.reviews)
        },

        watch: {
          rating: function () {
            this.tempPercentGenerate(this.rating)
          }
        },

        methods: {
          toggleCommentLoadStatus: function() {
            this.commentLoadStatus = !this.commentLoadStatus
          },
          recallApi: function() {
            this.$axios
              .get('http://dev.anduoc.vn/api/product/'+this.$route.params.id)
              .then(response => {
                this.reviews = response.data.data.reviews;``
                if(response){
                  this.toggleCommentLoadStatus()
                }
              });
          },
          percentGenerate: function (items, tempValue) {
           if(isNaN(items)){
             return tempValue == 0?0:tempValue/(this.reviews.total+tempValue)*100;
           }
           else{
             if(!this.temp){
               return (items/(this.reviews.total))*100;
             }
             else {
               return ((items+tempValue)/(this.reviews.total+1))*100;
             }
           }
          },
          postReview: async function () {
            if(this.$store.state.loaded == true){
              await this.toggleCommentLoadStatus()
            }
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
                this.recallApi();
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
