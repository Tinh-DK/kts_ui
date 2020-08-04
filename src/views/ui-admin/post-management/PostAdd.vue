<template>
  <b-row>
    <b-col>
      <b-row style="margin-bottom: 10px;">
        <b-col>
          <b-button variant="primary" class="btn-fw btn-sm" @click="save">Lưu bài viết</b-button>
        </b-col>
      </b-row>
      <div class="card">
        <div class="card-body">
          <b-row>
            <div class="col-md-6">
              <!-- Tiều đề -->
              <b-form-group horizontal label="Tiêu đề" label-for="input14">
                <b-form-input
                  type="text"
                  id="input14"
                  v-model="postModel.tencd"
                  placeholder="Tiêu đề bài viết..."
                ></b-form-input>
              </b-form-group>
              <!-- Danh Mục -->
              <b-form-group horizontal label="Danh mục" label-for="input14">
                <b-form-select
                  v-model="postModel.idtheloai"
                  :options="danhsachtheloai"
                  @change="changeTheLoai(postModel.idtheloai)"
                />
              </b-form-group>
              <!-- Thể Loại -->
              <b-form-group horizontal label="Thể loại" label-for="input14">
                <b-form-select
                  :disabled="postModel.idtheloai === null"
                  v-model="postModel.idloaitin"
                  :options="danhsachloaitin"
                />
              </b-form-group>
              <!-- Tóm tắt -->
            </div>
            <div class="col-md-3">
              <b-form-group horizontal label="Chọn hình ảnh" label-for="input14">
                <input type="file" id="file1" ref="file1" v-on:change="selectImagePost()" />
              </b-form-group>
              <img :src="postModel.hinhanh" alt class="img-fluid-custom" />
            </div>
            <div class="col-md-3">
              <b-form-group horizontal label="Chọn hình ảnh" label-for="input14">
                <input type="file" id="file2" ref="file2" v-on:change="handleImgPost()" />
              </b-form-group>
              <code>{{imgSubPost}}</code>
            </div>
            <div class="col-md-6">
              <b-form-group horizontal label="Tóm tắt" label-for="input14">
                <textarea
                  class="form-control"
                  v-model="postModel.tomtat"
                  placeholder="Tóm tắt bài viết..."
                ></textarea>
              </b-form-group>
            </div>
          </b-row>
          <b-row>
            <b-col>
              <yimo-vue-editor v-model="postModel.noidung"></yimo-vue-editor>
            </b-col>
            <div class="col-md-4">
              <b-form-group horizontal label="Thêm chủ đề" label-for="input14">
                <multiselect
                  v-model="value"
                  :options="options"
                  :multiple="true"
                  :taggable="true"
                  :close-on-select="false"
                  :clear-on-select="false"
                  :preserve-search="true"
                  tag-placeholder="Add this as new tag"
                  placeholder="Search or add a tag"
                  @tag="addTag"
                  label="title"
                  track-by="title"
                  :preselect-first="false"
                ></multiselect>
              </b-form-group>
            </div>
          </b-row>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { HTTP } from "@/api/https";
import Multiselect from "vue-multiselect";
import YimoVueEditor from "yimo-vue-editor";

export default {
  name: "AddPost",
  components: {
    HTTP,
    YimoVueEditor,
    Multiselect
  },
  data() {
    return {
      items: [],
      value: [],
      options: [],
      imgSubPost: "",
      postModel: {
        tencd: "",
        tenkd: "",
        tag: "",
        idloaitin: null,
        idtheloai: null,
        noidung: "",
        tomtat: "",
        hinhanh: "http://placehold.it/100x100"
      },
      danhsachtheloai: [],
      danhsachloaitin: [],
      seriesArr: []
    };
  },
  created() {
    this.init();
    this.getListTags();
  },
  methods: {
    addTag(newTag) {
      const tag = {
        title: newTag
        // you'll need to add other items specific to your objects
      };
      this.options.push(tag);
      this.value.push(tag);
    },

    getListTags() {
      HTTP.get('get-list-tag').then(res=>{
        console.log(res)
      })
    },
    /**
     * Init page add
     */
    init() {
      HTTP.get("/post/init")
        .then(this.handleInitSuccess)
        .catch(this.handleInitError);
    },

    /**
     * Handle init success
     * @param res
     */
    handleInitSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }

      // Categories Arr
      this.danhsachtheloai = [];
      this.danhsachtheloai.push({
        value: null,
        text: "Chọn thể loại..."
      });
      let categories = res.data.theloai;
      categories.forEach(element => {
        let item = {
          value: element.id,
          text: element.tencd
        };
        this.danhsachtheloai.push(item);
      });
    },

    /**
     * Handle change selectbox Danh mục
     * @param iddanhmuc
     */
    changeTheLoai(idtheloai) {
      if (idtheloai === null || idtheloai === undefined) {
        return;
      }
      HTTP.get("/sub/search/" + idtheloai)
        .then(this.handleSearchSuccess)
        .catch(this.handleSearchError);
    },

    /**
     * Search category detail success
     * @param res
     */
    handleSearchSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }
      let detail = res.data.loaitin;
      this.danhsachloaitin = [];
      this.danhsachloaitin.push({
        value: null,
        text: "Chọn loại tin..."
      });
      detail.forEach(element => {
        let item = {
          value: element.id,
          text: element.tencd
        };
        this.danhsachloaitin.push(item);
      });
    },

    /**
     * Save post
     */
    save() {
      // Create tên không có dấu
      let tenkd_tem = this.postModel.tencd;
      tenkd_tem = this.removeAccents(tenkd_tem);
      tenkd_tem = tenkd_tem.toLowerCase();
      let tem = tenkd_tem.replace(/ /g, "-");
      this.postModel.tenkd = tem
      this.postModel.tag = this.value
      this.postModel["user-login"] = sessionStorage.getItem("idnguoidung");
      HTTP.post("post/add", this.postModel)
        .then(this.responseSuccess)
        .catch(this.responseError);
    },

    responseSuccess(res) {
      console.log(res);
      if (res.data) {
        this.$router.push({ path: "/admin/post-management" });
      }
    },

    handleImgPost() {
      let fileTem = this.$refs.file2.files[0];
      const fd = new FormData();

      fd.append("file", fileTem);

      const auth = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      HTTP.post("post/upload-image", fd, auth).then(response => {
        if (response === null || response === undefined) {
          return;
        }
        let data = response.data.url;
        this.imgSubPost =
          "<img src='" +
          this.appConfig.baseURL +
          data +
          "'" +
          " class= " +
          "'img-fluid'" +
          "/>";
      });
    },

    /**
     * Upload image post
     */
    selectImagePost() {
      let fileTem = this.$refs.file1.files[0];
      const fd = new FormData();

      fd.append("file", fileTem);

      const auth = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      HTTP.post("post/upload-image", fd, auth).then(response => {
        if (response === null || response === undefined) {
          return;
        }
        let data = response.data.url;
        this.postModel.hinhanh = this.appConfig.baseURL + data;
      });
    },

    removeAccents(str) {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
  }
};
</script>
<style lang="scss" scoped>
.img-fluid-custom {
  max-width: 150px;
  height: auto;
  width: auto;
  max-height: 150px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
}
.vueditor {
  height: 500px !important;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>