<template lang="html">
  <section class="tables">
    <h4 class="card-title">Quản Lý Thể Loại</h4>
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <b-form-group hidden>
                <b-form-input type="text" v-model="categoryModel.id"></b-form-input>
              </b-form-group>
              <div class="col-md-4">
                <b-form-group label="Tên thể loại" label-for="input14">
                  <b-form-input
                    style="height: 38px;"
                    type="text"
                    v-model="categoryModel.tencd"
                    placeholder="Nhập tên thể loại..."
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-2">
                <b-form-group horizontal label="Style" label-for="input14">
                  <b-form-select
                    v-model="categoryModel.style"
                    :options="styleOption"
                  />
                </b-form-group>
              </div>
              <div class="col-md-1">
                <b-form-group label="Sử dụng" label-for="input14">
                  <input
                    type="checkbox"
                    :v-model="categoryModel.sudung"
                    :checked="categoryModel.sudung === 1"
                    @change="check($event)"
                  />
                </b-form-group>
              </div>
              <div class="col-md-4" style="margin-top: 22px">
                <b-button variant="success" class="mr-2" @click="add"
                  >Thêm</b-button
                >
                <b-button variant="info" class="mr-2" @click="update"
                  >Cập nhật</b-button
                >
              </div>
            </div>
            <b-table bordered hover responsive :items="items" :fields="fields">
              <template v-slot:cell(trangthai)="data">
                <label v-if="data.item.sudung === 1" class="badge badge-success"
                  >Active</label
                >
                <label v-if="data.item.sudung === 0" class="badge badge-danger"
                  >Inactive</label
                >
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
import moment from "moment";
export default {
  name: "role-management",
  components: {
    HTTP
  },
  filters: {
    formatDate: function(value) {
      if (value) {
        return moment(String(value)).format("YYYY/MM/DD hh:mm:ss");
      }
    }
  },
  data() {
    return {
      delFlg: "",
      categoryModel: {
        style: null
      },
      delOption: [
        { value: "", text: "All" },
        { value: 0, text: "Active" },
        { value: 1, text: "Inactive" }
      ],
      styleOption: [],
      items: [],
      fields: [
        {
          key: "id",
          label: "#"
        },
        {
          key: "tencd",
          label: "Tên có dấu"
        },
        {
          key: "tenkd",
          label: "Tên không dấu"
        },
        {
          key: "style",
          label: "Style"
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
    this.search();
  },
  methods: {
    init() {
      HTTP.get("/category/init")
        .then(this.handleInitSuccess)
        .catch(this.handleInitError);
    },

    handleInitSuccess(res) {
      let style = res.data.styles;
      this.styleOption.push({
        value: null,
        text: "Select style..."
      });
      style.forEach(element => {
        let item = {
          value: element.name,
          text: element.name
        };
        this.styleOption.push(item);
      });
    },

    search() {
      HTTP.post("category/search").then(this.handleSearchSuccess);
    },

    add() {
      if (this.categoryModel.tencd === undefined) {
        return;
      }
      let tenkd_tem = this.categoryModel.tencd;
      tenkd_tem = this.removeAccents(tenkd_tem);
      tenkd_tem = tenkd_tem.toLowerCase();
      let tem = tenkd_tem.replace(/ /g, "-");
      this.categoryModel.tenkd = tem;

      HTTP.post("category/add", this.categoryModel).then(this.handleAddSuccess);
    },

    deleteRole(id) {
      if (id === undefined) {
        return;
      }
      HTTP.delete("category/delete/" + id).then(this.handleDeleteSuccess);
    },

    editRole(role) {
      if (role === undefined || role === null) {
        return;
      }
      this.categoryModel = role;
    },

    update() {
      if (this.categoryModel.tencd === undefined) {
        return;
      }
      HTTP.post("category/update", this.categoryModel).then(
        this.handleUpdateSuccess
      );
    },

    handleSearchSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }
      this.categoryModel = {};
      this.items = res.data.categorys;
    },

    handleAddSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }
      this.categoryModel = {};
      this.search();
    },

    handleDeleteSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }
      this.categoryModel = {};
      this.search();
    },

    handleUpdateSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }
      this.categoryModel = {};
      this.search();
    },

    check(event) {
      if (event === null || event === undefined) {
        return;
      }
      let checked = event.target.checked;
      this.categoryModel.sudung = checked ? 1 : 0;
    },
    removeAccents(str) {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
  }
};
</script>
<style lang="scss">
.table-responsive {
  border-top: 1px solid #f3f3f3;
  .table {
    thead {
      th {
        background-color: slategray;
        border-bottom: slategray;
        color: #ffffff;
        text-align: center !important;
        position: sticky;
        top: 0px;
        z-index: 1000;
      }
    }
    tbody {
      td {
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>