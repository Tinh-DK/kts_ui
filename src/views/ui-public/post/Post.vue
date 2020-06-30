<template>
  <div>
    <div class="section">
      <!-- container -->
      <div class="container">
        <!-- row -->
        <div class="row">
          <!-- Post content -->
          <div class="col-md-8">
            <p class="mb-5">
              <img :src="content.hinhanh" alt="Image" class="img-fluid" />
            </p>
            <h2>{{content.tencd}}</h2>
            <div class="post-meta d-flex mb-5">
              <div class="bio-pic mr-3">
                <img src="@/assets/images/person_1.jpg" alt="Image" class="img-fluidid" />
              </div>
              <div class="vcard">
                <span class="d-block">
                  <a href="#">{{content.nguoitao}}</a> in
                  <a href="#">{{content.loaitin}}</a>
                </span>
                <span class="date-read">{{content.ngaytao}}</span>
              </div>
            </div>
            <div class="section-row sticky-container">
              <div class="main-post" v-html="content.noidung"></div>
              <div class="post-shares sticky-shares">
                <a href="#" class="share-facebook">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#" class="share-twitter">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#" class="share-google-plus">
                  <i class="fa fa-google-plus"></i>
                </a>
                <a href="#" class="share-pinterest">
                  <i class="fa fa-pinterest"></i>
                </a>
                <a href="#" class="share-linkedin">
                  <i class="fa fa-linkedin"></i>
                </a>
                <a href="#">
                  <i class="fa fa-envelope"></i>
                </a>
              </div>
            </div>

            <!-- ad -->
            <div class="section-row text-center">
              <a href="#" style="display: inline-block;margin: auto;">
                <img class="img-responsive" src="@/assets/img/ad-2.jpg" alt />
              </a>
            </div>
            <!-- ad -->

            <!-- author -->
            <div class="section-row">
              <div class="post-author">
                <div class="media">
                  <div class="media-left">
                    <img class="media-object" src="@/assets/img/author.png" alt />
                  </div>
                  <div class="media-body">
                    <div class="media-heading">
                      <h3>John Doe</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <ul class="author-social">
                      <li>
                        <a href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="site-section">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="section-title">
                      <h2>Bài viết liên quan</h2>
                    </div>
                  </div>

                  <!-- post -->
                  <div class="col-md-3" v-for="post in popularArr" :key="post.id">
                    <div class="post">
                      <a class="post-img" v-bind:href="'/post/'+ post.tenkd">
                        <img :src="post.hinhanh" alt />
                      </a>
                      <div class="post-body">
                        <div class="post-meta">
                          <span class="d-block">
                            <a
                              class="post-category"
                              :class="post.style"
                              v-bind:href="'/category/'+ post.loaitinkd"
                            >{{post.loaitin}}</a>
                          </span>
                          <span class="post-date">{{post.ngaytao}}</span>
                        </div>
                        <h3 class="post-title">
                          <a v-bind:href="'/post/'+ post.tenkd">{{post.tencd}}</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CommentPost :model="commentArr" :postid="content.id"></CommentPost>
          </div>

          <!-- aside -->
          <div class="col-md-4">
            <!-- ad -->
            <div class="aside-widget text-center">
              <a href="#" style="display: inline-block;margin: auto;">
                <img class="img-responsive" src="@/assets/img/ad-1.jpg" alt />
              </a>
            </div>
            <!-- /ad -->

            <!-- post widget -->
            <div class="aside-widget">
              <div class="section-title">
                <h2>Trending</h2>
              </div>
              <div class="trend-entry d-flex" v-for="(post, index) in popularArr" :key="post.id">
                <div class="number align-self-start">0{{index + 1}}</div>
                <div class="trend-contents">
                  <h2>
                    <a href="blog-single.html">{{post.tencd}}</a>
                  </h2>
                  <div class="post-meta">
                    <span class="d-block">
                      <a href="#">{{post.nguoitao}}</a> in
                      <a v-bind:href="'/category/'+ post.loaitinkd">{{post.loaitin}}</a>
                    </span>
                    <span class="date-read">{{post.ngaytao}}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- /post widget -->

            <!-- post widget -->
            <div class="aside-widget">
              <div class="section-title">
                <h2>Featured Posts</h2>
              </div>
              <div class="post post-thumb" v-for="post in theloaiArr" :key="post.id">
                <a class="post-img" href="blog-post.html">
                  <img :src="post.hinhanh" alt />
                </a>
                <div class="post-body">
                  <div class="post-meta">
                    <a
                      class="post-category"
                      :class="post.style"
                      v-bind:href="'/category/'+ post.loaitinkd"
                    >{{post.loaitin}}</a>
                    <span class="post-date">{{post.ngaytao}}</span>
                  </div>
                  <h3 class="post-title">
                    <a href="blog-post.html">{{post.tencd}}</a>
                  </h3>
                </div>
              </div>
            </div>
            <!-- /post widget -->

            <!-- catagories -->
            <div class="aside-widget">
              <div class="section-title">
                <h2>Catagories</h2>
              </div>
              <div class="category-widget">
                <ul>
                  <li v-for="item in catagories" :key="item.id">
                    <a v-bind:href="'/category/'+ item.loaitinkd" :class="item.style">
                      {{item.theloai}}
                      <span class="category-custom">{{item.soluong}}0</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- /catagories -->

            <!-- tags -->
            <div class="aside-widget">
              <div class="tags-widget">
                <ul>
                  <li v-for="item in loaitinArr" :key="item.id">
                    <a v-bind:href="'/category/'+ item.tenkd">{{item.tencd}}</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- /tags -->
            <!-- /archive -->
          </div>
          <!-- /aside -->
        </div>
        <!-- /row -->
      </div>
      <!-- /container -->
    </div>
  </div>
</template>
<script>
import { HTTP } from "@/api/https";
import CommentPost from "../../../components/comment/CommentPost";
export default {
  name: "Post",
  components: {
    CommentPost
  },
  data: function() {
    return {
      content: "",
      theloaiArr: [],
      catagories: [],
      loaitinArr: [],
      popularArr: [],
      commentArr: [],
      commentModel: {}
    };
  },
  created() {
    let tenkd = this.$route.params.tenkd;
    this.init(tenkd);
  },
  methods: {
    init(name) {
      HTTP.get("/post/" + name).then(res => {
        if (res === null || res === undefined) {
          return;
        }
        let datapost = res.data.datapost;

        // RECENT POST
        let post = datapost.post;
        if (post.length === 0) {
          return;
        }
        this.content = post[0];

        // CÙNG CHUYÊN MỤC
        this.theloaiArr = datapost.post_category;

        // SỐ LƯỢNG THEO THỂ LOẠI
        this.catagories = datapost.theloai;

        // LOẠI TIN
        this.loaitinArr = datapost.loaitin;
        // POPULAR
        this.popularArr = datapost.popular;
        // COMMENT
        this.commentArr = datapost.comments;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.author-custom {
  font-weight: 400;
}
.category-custom {
  font-weight: 400;
  &.fontend {
    background-color: #0078ff !important;
  }
  &.backend {
    background-color: #ff8700 !important;
  }
}
</style>