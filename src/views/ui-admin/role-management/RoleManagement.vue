<template lang="html">
  <section class="tables">
    <h4 class="card-title">Quản Lý Quyền</h4>
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <b-form-group hidden>
                <b-form-input type="text" v-model="roleModel.id"></b-form-input>
              </b-form-group>
              <div class="col-md-3">
                <b-form-group label="Tên quyền 1" label-for="input14">
                  <b-form-input
                    type="text"
                    v-model="roleModel.tencd"
                    placeholder="Nhập tên quyền..."
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-3">
                <b-form-group label="Tên quyền 2" label-for="input14">
                  <b-form-input
                    type="text"
                    v-model="roleModel.tenkd"
                    placeholder="Nhập tên quyền..."
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-1">
                <b-form-group label="Sử dụng" label-for="input14">
                  <input
                    type="checkbox"
                    :v-model="roleModel.sudung"
                    :checked="roleModel.sudung === 1"
                    @change="check($event)"
                  />
                </b-form-group>
              </div>
              <div class="col-md-3" style="margin-top: 22px;">
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
                  <a
                    class="btn btn-outline-info btn-sm"
                    @click="editRole(data.item)"
                    >Edit</a
                  >
                  <a
                    class="btn btn-outline-danger btn-sm"
                    @click="deleteRole(data.item.id)"
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
      roleModel: {},
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
          label: "Tên quyền 1"
        },
        {
          key: "tenkd",
          label: "Tên quyền 2"
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
    this.search()
  },
  methods: {
    search() {
      HTTP.post("role/search").then(this.handleSearchSuccess);
    },

    add() {
      if (
        this.roleModel.tencd === undefined ||
        this.roleModel.tenkd === undefined
      ) {
        return;
      }
      HTTP.post("role/add", this.roleModel).then(this.handleAddSuccess);
    },

    deleteRole(id) {
      if (id === undefined) {
        return;
      }
      HTTP.delete("role/delete/" + id).then(this.handleDeleteSuccess);
    },

    editRole(role) {
      if (role === undefined || role === null) {
        return;
      }
      this.roleModel = role;
    },

    update() {
      if (
        this.roleModel.tencd === undefined ||
        this.roleModel.tenkd === undefined
      ) {
        return;
      }
      HTTP.post("role/update", this.roleModel).then(this.handleUpdateSuccess);
    },

    handleSearchSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }
      this.roleModel = {};
      this.items = res.data.roles;
    },

    handleAddSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }
      this.roleModel = {};
      this.search();
    },

    handleDeleteSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }
      this.roleModel = {};
      this.search();
    },

    handleUpdateSuccess(res) {
      if (res === null || res === undefined) {
        return;
      }
      this.roleModel = {};
      this.search();
    },

    check(event) {
      if (event === null || event === undefined) {
        return;
      }
      let checked = event.target.checked;
      this.roleModel.sudung = checked ? 1 : 0;
    }
  }
};
</script>