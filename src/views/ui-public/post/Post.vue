<template>
  <div>
    <div class="section">
      <!-- container -->
      <div class="container">
        <!-- row -->
        <div class="row">
          <!-- Post content -->
          <div class="col-md-8">
            <p class="mb-3">
              <img :src="content.hinhanh" alt="Image" class="img-fluid" />
            </p>
            <h2>{{content.tencd}}</h2>
            <div class="post-meta d-flex mb-3">
              <div class="bio-pic mr-3">
                <img src="@/assets/images/faces/face3.jpg" alt="Image" class="img-fluidid" />
              </div>
              <div class="vcard">
                <span class>
                  <a href="#">{{content.nguoitao}}</a> in
                  <a href="#">{{content.loaitin}}</a>
                </span>
              </div>
              <div class="post_share ml-sm-auto">
                <span>
                  <i class="fa fa-eye" aria-hidden="true"></i>
                  {{content.soluotxem == null ? 0 : content.soluotxem}}
                </span>
                <span class="date-read">{{content.ngaytao | formatDate}}</span>
              </div>
            </div>
            <div class="post_tags">
              <ul>
                <li class="post_tag" v-for="(name, index) in content.tag" :key="index">
                  <a href="#">{{name}}</a>
                </li>
              </ul>
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
                    <img class="media-object" src="@/assets/images/faces/face3.jpg" alt />
                  </div>
                  <div class="media-body">
                    <div class="media-heading">
                      <h4>{{content.nguoitao}}</h4>
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
                    <h4 style="border-bottom: 1px solid #F4f4f9; line-height: 2;">Bài Viết Liên Quan</h4>
                  </div>

                  <!-- post -->
                  <div class="col-md-4" v-for="post in popularArr" :key="post.id">
                    <div class="post" style="border-radius: 0.25em; background-color: #f7f7f7">
                      <a class="post-img" v-bind:href="'/post/'+ post.tenkd">
                        <img :src="post.hinhanh" style="height: 100px;" class="post-img-custom" />
                      </a>
                      <div class="post-body" style="padding: 10px;">
                        <div class="post-meta">
                          <span class="text-custom">
                            <a
                              :title="post.loaitin"
                              class="post-category"
                              :class="post.style"
                              v-bind:href="'/category/'+ post.loaitinkd"
                            >{{post.loaitin}}</a>
                          </span>
                          <span class="post-date">{{post.ngaytao | formatDate}}</span>
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
            <div class="site-section">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <h4
                      style="border-bottom: 1px solid #F4f4f9; line-height: 2;"
                    >Có Thể Bạn Quan Tâm</h4>
                  </div>

                  <!-- post -->
                  <div class="col-md-4" v-for="post in popularArr" :key="post.id">
                    <div class="post" style="border-radius: 0.25em; background-color: #f7f7f7">
                      <a class="post-img" v-bind:href="'/post/'+ post.tenkd">
                        <img :src="post.hinhanh" style="height: 100px;" class="post-img-custom" />
                      </a>
                      <div class="post-body" style="padding: 10px;">
                        <div class="post-meta">
                          <span class="text-custom">
                            <a
                              class="post-category"
                              :class="post.style"
                              :title="post.loaitin"
                              v-bind:href="'/category/'+ post.loaitinkd"
                            >{{post.loaitin}}</a>
                          </span>
                          <span class="post-date">{{post.ngaytao | formatDate}}</span>
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
          <div class="col-md-4" style="padding-left: 50px;">
            <!-- ad -->
            <div class="aside-widget text-center">
              <a href="#" style="display: inline-block;margin: auto;">
                <img class="img-responsive" src="@/assets/img/ad-1.jpg" alt />
              </a>
            </div>
            <!-- /ad -->

            <!-- post widget -->
            <div class="aside-widget">
              <div style="border-bottom: 1px solid #F4f4f9; margin-bottom: 20px">
                <h4 style="margin-bottom: 10px">BÀI VIẾT LIÊN QUAN</h4>
              </div>
              <div
                class="trend-entry d-flex"
                v-for="post in theloaiArr"
                :key="post.id"
                style="border-bottom: 1px dashed #eceef2;"
              >
                <div class="side_post_image">
                  <div>
                    <img
                      :src="post.hinhanh"
                      :alt="post.tencd"
                      :title="post.tencd"
                      style="width: 90px; height: 70px; border-radius: 5px; margin-right: 20px;"
                    />
                  </div>
                </div>
                <div class="trend-contents">
                  <h2>
                    <a v-bind:href="'/post/'+ post.tenkd">{{post.tencd}}</a>
                  </h2>
                  <div class="post-meta">
                    <span class="d-block">
                      <a href="#">{{post.nguoitao}}</a> in
                      <a v-bind:href="'/category/'+ post.loaitinkd">{{post.loaitin}}</a>
                    </span>
                    <span class="date-read">{{post.ngaytao | formatTime}}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- /post widget -->

            <!-- post widget -->
            <div class="aside-widget">
              <div style="border-bottom: 1px solid #F4f4f9; margin-bottom: 20px">
                <h4 style="margin-bottom: 10px">BÀI VIẾT PHỔ BIẾN</h4>
              </div>
              <div class="post post-thumb" v-for="post in popularArr" :key="post.id">
                <a class="post-img" v-bind:href="'/post/'+ post.tenkd">
                  <img :src="post.hinhanh" style="max-height: 250px; border-radius: 0.25rem" />
                </a>
                <div class="post-body">
                  <div class="post-meta">
                    <a
                      class="post-category"
                      :class="post.style"
                      v-bind:href="'/category/'+ post.loaitinkd"
                    >{{post.loaitin}}</a>
                    <span class="post-date">{{post.ngaytao | formatDate}}</span>
                  </div>
                  <h3 class="post-title">
                    <a v-bind:href="'/post/'+ post.tenkd">{{post.tencd}}</a>
                  </h3>
                </div>
              </div>
            </div>
            <!-- /post widget -->

            <!-- catagories -->
            <div class="aside-widget">
              <div style="border-bottom: 1px solid #F4f4f9; margin-bottom: 10px">
                <h4>CHUYÊN MỤC PHỔ BIẾN</h4>
              </div>
              <div class="category-widget">
                <ul>
                  <li v-for="item in catagories" :key="item.id">
                    <a
                      v-bind:href="'/category/'+ item.loaitinkd"
                      :class="item.style"
                      style="font-weight: 400;"
                    >
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
              <div style="border-bottom: 1px solid #F4f4f9; margin-bottom: 10px">
                <h4>CHỦ ĐỀ</h4>
              </div>
              <div class="tags-widget">
                <ul>
                  <li v-for="item in loaitinArr" :key="item.id">
                    <a
                      v-bind:href="'/category/'+ item.tenkd"
                      style="font-weight: 400;"
                    >{{item.tencd}}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="aside-widget">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBKB11026789%2F&tabs=272&width=340&height=300px&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1130836606940717"
                width="340"
                height="300px"
                style="border:none;overflow:hidden"
                scrolling="no"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
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
import moment from "moment";
import CommentPost from "../../../components/comment/CommentPost";
export default {
  name: "Post",
  components: {
    CommentPost
  },
  filters: {
    formatDate: function(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    },
    formatTime: function(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY hh:mm:ss");
      }
    }
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

        let tag = this.content.tag
        if (tag !== null && tag !== undefined) {
          let tagArr = tag.split(",");
          this.content.tag = tagArr
        }
        else {
          this.content.tag = []
        }


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
  .post_tag {
    display: inline-block;
    width: auto;
    height: 24px;
    border: solid 1px #d7d7d7;
    border-radius: 3px;
    background: transparent;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
    margin-bottom: 30px;
    margin-right: 5px;
    text-transform: uppercase;
  }
  .post_tag a {
    display: block;
    line-height: 22px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
    color: rgba(0,0,0,0.5);
    font-weight: 450;

    &:hover {
      background: #d7d7d7;
    }
  }
</style>