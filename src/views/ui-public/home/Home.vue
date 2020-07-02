<template>
  <div>
    <!-- Slide -->
    <carousel :per-page="1" :mouse-drag="false">
      <slide v-for="post in slideArr" :key="post.id">
        <div class="site-section">
          <div class="container">
            <div class="half-post-entry d-block d-lg-flex bg-light">
              <div class="img-bg" :style="post.imgbg" :title="post.tencd"></div>
              <div class="contents">
                <span class="caption">{{post.theloai}}</span>
                <h2 :title="post.tencd">
                  <a v-bind:href="'/post/'+ post.tenkd">{{post.tencd}}</a>
                </h2>
                <p class="mb-3">{{post.tomtat}}</p>

                <div class="post-meta text-custom">
                  <a
                    class="post-category"
                    v-bind:href="'/category/'+ post.loaitinkd"
                    :class="post.style"
                  >{{post.loaitin}}</a>
                  <span class="post-date">{{post.ngaytao | formatDate}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
    <!-- End Slide -->

    <!-- Bai viet moi nhat -->
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title">
              <h2>BÀI VIẾT MỚI</h2>
            </div>
          </div>

          <!-- post -->
          <div class="col-md-3" v-for="post in recentArr" :key="post.id">
            <div class="post">
              <a class="post-img" v-bind:href="'/post/'+ post.tenkd">
                <img :src="post.hinhanh" :alt="post.tencd" :title="post.tencd" style="max-height: 150px;"/>
              </a>
              <div class="post-body">
                <div class="post-meta text-custom">
                  <span class="d-block">
                    <a
                      class="post-category"
                      :class="post.style"
                      v-bind:href="'/category/'+ post.loaitinkd"
                    >{{post.loaitin}}</a>
                  </span>
                  <span class="post-date">{{post.ngaytao | formatDate}}</span>
                </div>
                <h3 class="post-title">
                  <a v-bind:href="'/post/'+ post.tenkd" :title="post.tencd">{{post.tencd}}</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End bai viet moi nhat -->
    <div class="site-section" v-if="editorArr.length > 0">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-12">
                <div class="section-title">
                  <h2>BÀI VIẾT CHỌN LỌC</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="post-entry-1">
                  <a v-bind:href="'/post/'+ editorArr[0].tenkd">
                    <img
                      :src="editorArr[0].hinhanh"
                      :alt="editorArr[0].tencd"
                      :title="editorArr[0].tencd"
                      class="img-fluid"
                    />
                  </a>
                  <h2>
                    <a
                      v-bind:href="'/post/'+ editorArr[0].tenkd"
                      :title="editorArr[0].tencd"
                    >{{editorArr[0].tencd}}</a>
                  </h2>
                  <p>{{editorArr[0].tomtat}}</p>
                  <div class="post-meta text-custom">
                    <a
                      class="post-category"
                      :class="editorArr[0].style"
                      v-bind:href="'/category/'+ editorArr[0].loaitinkd"
                    >{{editorArr[0].loaitin}}</a>
                    <span class="post-date">{{editorArr[0].ngaytao | formatDate}}</span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div
                  class="post-entry-2 d-flex"
                  v-for="(post, index) in editorArr"
                  :key="post.id"
                  v-if="index !== 0 && index !== 4"
                >
                  <div class="thumbnail" :style="post.imgbg"></div>
                  <div class="contents">
                    <h2>
                      <a v-bind:href="'/post/'+ post.tenkd">{{post.tencd}}</a>
                    </h2>
                    <div class="post-meta text-custom">
                      <span class="d-block">
                        <a
                          class="post-category"
                          :class="post.style"
                          v-bind:href="'/category/'+ post.loaitinkd"
                        >{{post.loaitin}}</a>
                      </span>
                      <span class="post-date">{{post.ngaytao | formatDate}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="section-title">
              <h2>BÀI VIẾT NỖI BẬT</h2>
            </div>
            <div class="trend-entry d-flex" v-for="(post, index) in trendingArr" :key="post.id">
              <div class="number align-self-start">0{{ index + 1 }}</div>
              <div class="trend-contents">
                <h2>
                  <a v-bind:href="'/post/'+ post.tenkd">{{post.tencd}}</a>
                </h2>
                <div class="post-meta text-custom">
                  <span class="d-block">
                    <a
                      class="post-category"
                      :class="post.style"
                      v-bind:href="'/category/'+ post.loaitinkd"
                    >{{post.loaitin}}</a>
                  </span>
                  <span class="post-date">{{post.ngaytao | formatDate}}</span>
                </div>
              </div>
            </div>

            <p>
              <a href="#" class="more">
                Xem thêm
                <span class="icon-keyboard_arrow_right"></span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- END section -->
    <div class="py-0" v-if="editorArr.length > 0">
      <div class="container">
        <div class="half-post-entry d-block d-lg-flex bg-light">
          <div class="img-bg" :style="editorArr[editorArr.length - 1].imgbg"></div>
          <div class="contents">
            <span class="caption">Editor's Pick</span>
            <h2>
              <a
                v-bind:href="'/post/'+ editorArr[editorArr.length - 1].tenkd"
              >{{editorArr[editorArr.length - 1].tencd}}</a>
            </h2>
            <p class="mb-3">{{editorArr[editorArr.length - 1].tomtat}}</p>
            <div class="post-meta text-custom">
              <span class="d-block">
                <a
                  class="post-category"
                  :class="editorArr[editorArr.length - 1].style"
                  v-bind:href="'/category/'+ editorArr[editorArr.length - 1].loaitinkd"
                >{{editorArr[editorArr.length - 1].loaitin}}</a>
              </span>
              <span class="post-date">{{editorArr[editorArr.length - 1].ngaytao | formatDate}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div v-for="post in categoryArr" :key="post.name">
              <div class="row">
                <div class="col-12">
                  <div class="post-meta text-custom section-title">
                    <span class="d-block category-custom-style">
                      <span class="post-category" :class="post.style">{{post.name}}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="post-entry-1">
                    <a v-bind:href="'/post/'+ post.data[0].tenkd">
                      <img
                        :src="post.data[0].hinhanh"
                        :alt="post.data[0].tencd"
                        :title="post.data[0].tencd"
                        class="img-fluid"
                      />
                    </a>
                    <h2>
                      <a v-bind:href="'/post/'+ post.data[0].tenkd">{{post.data[0].tencd}}</a>
                    </h2>
                    <p>{{post.data[0].tomtat}}</p>
                    <div class="post-meta text-custom">
                      <a
                        class="post-category"
                        :class="post.data[0].style"
                        v-bind:href="'/category/'+ post.data[0].loaitinkd"
                      >{{post.data[0].loaitin}}</a>
                      <span class="post-date">{{post.data[0].ngaytao | formatDate}}</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="post-entry-2 d-flex" v-for="(subpost) in post.data" :key="subpost.id">
                    <div class="thumbnail" :style="subpost.imgbg"></div>
                    <div class="contents">
                      <h2>
                        <a v-bind:href="'/post/'+ subpost.tenkd">{{subpost.tencd}}</a>
                      </h2>
                      <div class="post-meta text-custom">
                        <span class="d-block">
                          <a
                            class="post-category"
                            :class="subpost.style"
                            v-bind:href="'/category/'+ subpost.loaitinkd"
                          >{{subpost.loaitin}}</a>
                        </span>
                        <span class="post-date">{{subpost.ngaytao | formatDate}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="section-title">
              <h2>BÀI VIẾT PHỔ BIẾN</h2>
            </div>

            <div class="trend-entry d-flex" v-for="(post, index) in popularArr" :key="post.id">
              <div class="number align-self-start">0{{index + 1}}</div>
              <div class="trend-contents">
                <h2>
                  <a v-bind:href="'/post/'+ post.tenkd">{{post.tencd}}</a>
                </h2>
                <div class="post-meta text-custom">
                  <span class="d-block">
                    <a
                      class="post-category"
                      :class="post.style"
                      v-bind:href="'/category/'+ post.loaitinkd"
                    >{{post.loaitin}}</a>
                  </span>
                  <span class="post-date">{{post.ngaytao | formatDate}}</span>
                </div>
              </div>
            </div>
            <p>
              <a href="#" class="more">Xem thêm</a>
            </p>
            <div class="aside-widget text-center">
              <a href="#" style="display: inline-block;margin: auto;">
                <img class="img-responsive" src="@/assets/img/ad-1.jpg" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section subscribe bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5 mr-auto">
            <h2>Đăng ký nhận thông báo</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis aspernatur ut at quae omnis pariatur obcaecati possimus nisi ea iste!</p>
          </div>
          <div class="col-md-6 ml-auto">
            <div class="d-flex">
              <input type="email" class="form-control" placeholder="Enter your email" />
              <button type="submit" class="btn btn-secondary">
                <span class="icon-paper-plane"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import { HTTP } from "@/api/https";
import moment from "moment";
export default {
  name: "home",
  data: function() {
    return {
      slideArr: [],
      editorArr: [],
      trendingArr: [],
      recentArr: [],
      popularArr: [],
      categoryArr: []
    };
  },
  created() {
    this.init();
  },
  filters: {
    formatDate: function(value) {
      if (value) {
        return moment(String(value)).format("YYYY/MM/DD hh:mm:ss");
      }
    }
  },
  methods: {
    init() {
      HTTP.get("post/init-index").then(this.handleInitSuccess);
    },

    handleInitSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }
      let data = res.data.posts;

      // SLIDE
      this.slideArr = data.slide;
      this.slideArr.forEach(element => {
        element.imgbg = "background-image: url('" + element.hinhanh + "')";
      });

      // EDITOR
      this.editorArr = data.editor;
      this.editorArr.forEach(element => {
        element.imgbg = "background-image: url('" + element.hinhanh + "')";
      });

      // TRENDING
      this.trendingArr = data.trending;
      this.trendingArr.forEach(element => {
        element.imgbg = "background-image: url('" + element.hinhanh + "')";
      });

      // RECENT
      this.recentArr = data.recent;
      this.recentArr.forEach(element => {
        element.imgbg = "background-image: url('" + element.hinhanh + "')";
      });

      // POPULAR
      this.popularArr = data.popular;
      this.popularArr.forEach(element => {
        element.imgbg = "background-image: url('" + element.hinhanh + "')";
      });

      // CATEGORY
      this.categoryArr = data.category;
      this.categoryArr.forEach(element => {
        element["data"].forEach(item => {
          item.imgbg = "background-image: url('" + item.hinhanh + "')";
        });
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
    color: #0078ff !important;
  }
  &.backend {
    color: #ff8700 !important;
  }
}
</style>