<template>
  <div class="section">
    <!-- container -->
    <div class="container">
      <!-- row -->
      <div class="row">
        <div class="col-md-8">
          <div class="row">
            <!-- post -->
            <div class="col-md-12" v-if="data1.length > 0">
              <div class="post post-thumb">
                <a class="post-img" v-bind:href="'/post/'+ data1[0].tenkd">
                  <img :src="data1[0].hinhanh" :alt="data1[0].tencd" :title="data1[0].tencd" />
                </a>
                <div class="post-body">
                  <div class="post-meta">
                    <a
                      class="post-category"
                      :class="data1[0].style"
                      v-bind:href="'/category/'+ data1[0].loaitinkd"
                    >{{data1[0].loaitin}}</a>
                    <span class="post-date">{{data1[0].ngaytao}}</span>
                  </div>
                  <h3 class="post-title">
                    <a v-bind:href="'/post/'+ data1[0].tenkd">{{data1[0].tencd}}</a>
                  </h3>
                </div>
              </div>
            </div>
            <!-- /post -->

            <!-- post -->
            <div class="col-md-6" v-for="(post, index) in data1" :key="post.id" v-if="index > 0">
              <div class="post">
                <a class="post-img" v-bind:href="'/post/'+ post.tenkd">
                  <img :src="post.hinhanh" :alt="post.tencd" :title="post.tencd" />
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
                    <a v-bind:href="'/post/'+ post.tenkd">{{post.tencd}}</a>
                  </h3>
                </div>
              </div>
            </div>
            <!-- /post -->

            <!-- post -->
            <!-- /post -->

            <div class="clearfix visible-md visible-lg"></div>

            <!-- ad -->
            <div class="col-md-12">
              <div class="section-row">
                <a href="#">
                  <img class="img-responsive center-block" src="@/assets/img/ad-2.jpg" alt />
                </a>
              </div>
            </div>
            <!-- ad -->

            <!-- post -->
            <div class="col-md-12" v-for="post in data2" :key="post.tenkd">
              <div class="post post-row">
                <a class="post-img" v-bind:href="'/post/'+ post.tenkd">
                  <img :src="post.hinhanh" :alt="post.tencd" :title="post.tencd" />
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
                    <a v-bind:href="'/post/'+ post.tenkd">{{post.tencd}}</a>
                  </h3>
                  <p>{{post.tomtat}}</p>
                </div>
              </div>
            </div>
            <!-- /post -->

            <div class="col-md-12">
              <div class="section-row">
                <button class="primary-button center-block">Xem Thêm</button>
              </div>
            </div>
          </div>
        </div>

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
              <h2>Most Read</h2>
            </div>

            <div class="post post-widget" v-for="post in popularArr" :key="post.id">
              <a class="post-img" v-bind:href="'/post/'+ post.tenkd">
                <img :src="post.hinhanh" :alt="post.tencd" :title="post.tencd" />
              </a>
              <div class="post-body">
                <h3 class="post-title">
                  <a v-bind:href="'/post/'+ post.tenkd" :title="post.tencd">{{post.tencd}}</a>
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
                <li>
                  <a href="#" class="cat-1">
                    Web Design
                    <span>340</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="cat-2">
                    JavaScript
                    <span>74</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="cat-4">
                    JQuery
                    <span>41</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="cat-3">
                    CSS
                    <span>35</span>
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
                <li>
                  <a href="#">Chrome</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
                <li>
                  <a href="#">Tutorial</a>
                </li>
                <li>
                  <a href="#">Backend</a>
                </li>
                <li>
                  <a href="#">JQuery</a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="#">JavaScript</a>
                </li>
                <li>
                  <a href="#">Website</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- /tags -->

          <!-- archive -->
          <div class="aside-widget">
            <div class="section-title">
              <h2>Archive</h2>
            </div>
            <div class="archive-widget">
              <ul>
                <li>
                  <a href="#">Jan 2018</a>
                </li>
                <li>
                  <a href="#">Feb 2018</a>
                </li>
                <li>
                  <a href="#">Mar 2018</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- /archive -->
        </div>
      </div>
      <!-- /row -->
    </div>
    <!-- /container -->
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import { HTTP } from "@/api/https";
export default {
  name: "home",
  data: function() {
    return {
      data1: [],
	  data2: [],
	  popularArr: []
    };
  },
  created() {
    this.init();
    let tenkd = this.$route.params.tenkd;
    // Get by loai tin
    if (tenkd !== undefined) {
      this.search_by_sub_category(tenkd);
      return;
    }
    // Get by the loai
    let cateogry = this.$route.query.name;
    if (cateogry !== undefined) {
      this.search_by_category(cateogry);
    }
  },
  methods: {
    init() {
      HTTP.get("category/init-by-category").then(res => {
        if (res === undefined || res ===  null) {
			return
		}
		let data = res.data.data
		this.popularArr = data['popular']
      });
    },
    search_by_sub_category(tenkd) {
      let param = {
        loaitin: tenkd
      };
      HTTP.post("post/list-post-by-sub-category", param).then(
        this.handleSearchSuccess
      );
    },

    search_by_category(cateogry) {
      let param = {
        theloai: cateogry
      };
      HTTP.post("post/list-post-by-category", param).then(
        this.handleSearchSuccess
      );
    },

    handleSearchSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }
	  let data = res.data.posts;
	  this.data1 = []
	  this.data2 = []
      for (let i = 0; i < data.length; i++) {
        if (i <= 2) {
          this.data1.push(data[i]);
        } else {
          this.data2.push(data[i]);
        }
	  }
	  this.data2 = this.data1
    },

    handleInitSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>