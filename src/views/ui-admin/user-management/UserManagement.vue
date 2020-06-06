<template lang="html">
  <section class="tables">
    <h4 class="card-title">User management</h4>
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <b-form-group hidden>
                <b-form-input type="text" v-model="userModel.id"></b-form-input>
              </b-form-group>
              <div class="col-md-6">
                <b-form-group label="Tên đăng nhập">
                  <b-form-input
                    type="text"
                    v-model="userModel.tendangnhap"
                    placeholder="Tên đăng nhập..."
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Mật khẩu">
                  <b-form-input
                    type="password"
                    v-model="userModel.matkhau"
                    placeholder="Mật khẩu..."
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Nhập lại mật khẩu">
                  <b-form-input
                    type="password"
                    v-model="userModel.matkhaunhaplai"
                    placeholder="Nhập lại mật khẩu..."
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group label="Tên hiển thị">
                  <b-form-input
                    type="text"
                    v-model="userModel.tenhienthi"
                    placeholder="Tên hiển thị..."
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Nhóm quyền" label-for="input14">
                  <b-form-select
                    :options="roleOption"
                    v-model="userModel.roleid"
                  />
                </b-form-group>
                <b-form-group label="Sử dụng" label-for="input14">
                  <input
                    type="checkbox"
                    :v-model="userModel.sudung"
                    :checked="userModel.sudung === 1"
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
                  <a
                    class="btn btn-outline-info btn-sm"
                    @click="editUser(data.item)"
                    >Edit</a
                  >
                  <a
                    class="btn btn-outline-danger btn-sm"
                    @click="deleteUser(data.item.id)"
                    >Xóa</a
                  >
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
      delFlg: "",
      userModel: {},
      roleOption: [],
      delOption: [
        { value: "", text: "Tất cả" },
        { value: 1, text: "Đã xóa" },
        { value: 0, text: "Chưa xóa" }
      ],
      items: [],
      fields: [
        {
          key: "id",
          label: "#",
          sortable: true
        },
        {
          key: "tendangnhap",
          label: "Tên đăng nhập"
        },
        {
          key: "tenhienthi",
          label: "Tên hiển thị"
        },
        {
          key: "tencd",
          label: "Nhóm quyền",
          sortable: true
        },
        {
          key: "ngaytao",
          label: "Ngày",
          sortable: true
        },
        {
          key: "trangthai",
          label: "Trạng thái",
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
      HTTP.post("user/init").then(this.handleInitSuccess);
    },

    handleInitSuccess(res) {
      if (res === undefined || res === null) {
        return;
      }
      let roles = res.data.roles;
      if (roles.length === 0) {
        return;
      }
      this.roleOption = [];
      this.userModel.roleid = roles[0].id;
      roles.forEach(element => {
        this.roleOption.push({ value: element.id, text: element.tencd });
      });
    },

    search() {
      let param = {
        del_flg: this.delFlg
      };
      HTTP.post("user/search", param).then(this.handleSearchSuccess);
    },

    add() {
      if (
        this.userModel.tendangnhap === undefined ||
        this.userModel.matkhau === undefined ||
        this.userModel.tenhienthi === undefined ||
        this.userModel.roleid === undefined
      ) {
        return;
      }
      if (this.userModel.matkhau !== this.userModel.matkhaunhaplai) {
        this.$fire({
          text: "Mật khẩu không khớp!",
          type: "warning"
        });
        return;
      }
      HTTP.post("user/add", this.userModel).then(this.handleAddSuccess);
    },

    deleteUser(id) {
      if (id === undefined) {
        return;
      }
      HTTP.delete("user/delete/" + id).then(this.handleDeleteSuccess);
    },

    editUser(user) {
      if (user === undefined || user === null) {
        return;
      }
      this.userModel = user;
    },

    update() {
      if (
        this.userModel.tendangnhap === undefined ||
        this.userModel.matkhau === undefined ||
        this.userModel.tenhienthi === undefined ||
        this.userModel.roleid === undefined
      ) {
        return;
      }
      if (this.userModel.matkhau !== this.userModel.matkhaunhaplai) {
        this.$fire({
          text: "Mật khẩu không khớp!",
          type: "warning"
        });
        return;
      }
      HTTP.post("user/update", this.userModel).then(this.handleUpdateSuccess);
    },

    handleSearchSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }
      this.items = res.data.users;
      this.items.forEach(element => {
        element.matkhaunhaplai = element.matkhau
      });
    },

    handleAddSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }
      this.userModel = {};
      this.search();
    },

    handleDeleteSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }
      this.userModel = {};
      this.search();
    },

    handleUpdateSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }
      this.userModel = {};
      this.search();
    },

    check(event) {
      if (event === null || event === undefined) {
        return;
      }
      let checked = event.target.checked;
      this.userModel.sudung = checked ? 1 : 0;
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
        &:nth-child(1),
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6) {
          text-align: center !important;
        }
      }
    }
  }
}
</style>
<style lang="css">
.custom-select {
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1;
  color: #495057;
  vertical-align: middle;
}
</style>
