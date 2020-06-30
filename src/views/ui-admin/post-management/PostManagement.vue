<template>
  <section class="tables">
    <h4 class="card-title">Quản Lý Bài Viết</h4>
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-4">
                <b-form-group label-for="input14">
                  <b-form-input type="text" placeholder="Tên bài viết, thể loại, loại tin ...."></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4">
                <b-button variant="info" class="mr-2 btn-sm">Tìm kiếm</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <div style="margin-bottom: 20px;">
              <b-button variant="secondary" class="mr-2 btn-sm" @click="updateStatusPost('chonloc')">Chọn Lọc</b-button>
              <b-button variant="secondary" class="mr-2 btn-sm" @click="updateStatusPost('noibat')">Nổi Bật</b-button>
              <b-button variant="secondary" class="mr-2 btn-sm" @click="updateStatusPost('slide')">Slide</b-button>
            </div>
            <b-table bordered hover responsive :items="items" :fields="fields">
              <template v-slot:cell(checkbox)="data">
                <b-form-checkbox v-model="data.item.selected" @change="select(data.item)" />
              </template>
              <template v-slot:cell(img)="data">
                <img :src="data.item.hinhanh" class="img-post-custom" />
              </template>
              <template v-slot:cell(trangthai)="data">
                <label v-if="data.item.sudung === 1" class="badge badge-success">Active</label>
                <label v-if="data.item.sudung === 0" class="badge badge-danger">Inactive</label>
              </template>
              <template v-slot:cell(hanhdong)="data">
                <div>
                  <a class="btn btn-outline-info btn-sm" @click="editRole(data.item)">Edit</a>
                  <a class="btn btn-outline-danger btn-sm" @click="deleteRole(data.item.id)">Xóa</a>
                </div>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { HTTP } from "@/api/https";
export default {
  name: "post-management",
  data() {
    return {
      items: [],
      fields: [
        {
          key: "id",
          label: "#"
        },
        { key: "checkbox", label: "#" },
        {
          key: "img",
          label: "Hình ảnh"
        },
        {
          key: "tencd",
          label: "Tên bài viết"
        },
        {
          key: "nguoitao",
          label: "Người tạo"
        },
        {
          key: "loaitin",
          label: "Loại tin"
        },
        {
          key: "ngaytao",
          label: "Ngày"
        },
        {
          key: "trangthai",
          label: "Trạng thái"
        },
        {
          key: "hanhdong",
          label: "Hành động"
        }
      ]
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      HTTP.post("/post/search")
        .then(this.handleInitSuccess)
        .catch(this.handleInitError);
    },

    handleInitSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }
      this.items = res.data.posts;
    },

    select(post) {
      post.selected = !post.selected;
    },

    updateStatusPost (key) {
      let postIDArr = [];
      this.items.forEach(element => {
        if (element.selected) {
          postIDArr.push(element.id);
        }
      });
      let model = {
        data: postIDArr,
        key: key
      };
      HTTP.post("/post/update-post", model).then(res => {
        if (res === null || res === undefined) {
          return;
        }
        this.init();
      });
    }
  }
};
</script>

<style scoped lang="scss">
.img-post-custom {
  width: auto;
  height: 50px;
}
</style>
<style lang="scss">
.table-responsive {
  .table {
    thead {
      th {
        text-align: center !important;
      }
    }
    tbody {
      td {
        &:hover {
          cursor: pointer;
        }
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(7),
        &:nth-child(8),
        &:nth-child(9) {
          text-align: center !important;
        }
      }
    }
  }
}
</style>
