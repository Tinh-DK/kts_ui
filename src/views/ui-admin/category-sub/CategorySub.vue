<template lang="html">
  <section class="tables">
    <h4 class="card-title">Quản Lý Loại Tin</h4>
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <b-form-group hidden>
                <b-form-input type="text" v-model="subModel.id"></b-form-input>
              </b-form-group>
              <div class="col-md-4">
                <b-form-group label="Thể loại" label-for="input14">
                  <b-form-select
                    :options="categoryOption"
                    v-model="subModel.theloaiid"
                  />
                </b-form-group>
              </div>
              <div class="col-md-4">
                <b-form-group label="Loại tin" label-for="input14">
                  <b-form-input
                    type="text"
                    v-model="subModel.tencd"
                    placeholder="Nhập loại tin..."
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-4">
                <b-form-group label="Sử dụng" label-for="input14">
                  <input
                    type="checkbox"
                    :v-model="subModel.sudung"
                    :checked="subModel.sudung === 1"
                    @change="check($event)"
                  />
                </b-form-group>
              </div>
              <div class="col-md-12">
                <b-button variant="success" class="mr-2" @click="add"
                  >Thêm</b-button
                >
                <b-button variant="info" class="mr-2" @click="update"
                  >Cập nhật</b-button
                >
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
            <div class="row">
              <div class="col-md-4">
                <b-form-group label="">
                  <b-form-select :options="delOption" v-model="delFlg" />
                </b-form-group>
              </div>
              <div class="col-md-4">
                <b-button variant="primary" class="btn-fw" @click="search"
                  >Tìm kiếm</b-button
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
export default {
  name: "role-management",
  components: {
    HTTP
  },
  data() {
    return {
      categoryOption: [],
      delFlg: "",
      subModel: {},
      delOption: [
        { value: "", text: "All" },
        { value: 0, text: "Active" },
        { value: 1, text: "Inactive" }
      ],
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
          key: "theloai",
          label: "Thể loại",
          sortable: true
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
      HTTP.post("sub/init").then(this.handleInitSuccess);
    },

    handleInitSuccess(res) {
      if (res === undefined || res === null) {
        return;
      }
      let categorys = res.data.categorys;
      if (categorys.length === 0) {
        return;
      }
      this.roleOption = [];
      // this.userModel.roleid = roles[0].id;
      categorys.forEach(element => {
        this.categoryOption.push({ value: element.id, text: element.tencd });
      });
    },
    search() {
      let param = {
        del_flg: this.delFlg
      };
      HTTP.post("sub/search", param).then(this.handleSearchSuccess);
    },

    add() {
      if (this.subModel.tencd === undefined) {
        return;
      }
      let tenkd_tem = this.subModel.tencd;
      tenkd_tem = this.removeAccents(tenkd_tem);
      tenkd_tem = tenkd_tem.toLowerCase();
      let tem = tenkd_tem.replace(/ /g, "-");
      this.subModel.tenkd = tem;

      HTTP.post("sub/add", this.subModel).then(this.handleAddSuccess);
    },

    deleteRole(id) {
      if (id === undefined) {
        return;
      }
      HTTP.delete("sub/delete/" + id).then(this.handleDeleteSuccess);
    },

    editRole(role) {
      if (role === undefined || role === null) {
        return;
      }
      this.subModel = role;
    },

    update() {
      if (
        this.subModel.tencd === undefined
      ) {
        return;
      }
      HTTP.post("sub/update", this.subModel).then(
        this.handleUpdateSuccess
      );
    },

    handleSearchSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }
      this.subModel = {};
      this.items = res.data.categorys;
    },

    handleAddSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }
      this.subModel = {};
      this.search();
    },

    handleDeleteSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }
      this.subModel = {};
      this.search();
    },

    handleUpdateSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }
      this.subModel = {};
      this.search();
    },

    check(event) {
      if (event === null || event === undefined) {
        return;
      }
      let checked = event.target.checked;
      this.subModel.sudung = checked ? 1 : 0;
    },
    removeAccents(str) {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
  }
};
</script>

<style scoped lang="scss">
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
        &:nth-child(1),
        &:nth-child(5),
        &:nth-child(6),
        &:nth-child(7) {
          text-align: center !important;
        }
      }
    }
  }
}
</style>
