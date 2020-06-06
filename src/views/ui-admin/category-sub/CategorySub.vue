<template lang="html">
  <section class="tables">
    <h4 class="card-title">Sub Category</h4>
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <b-form-group hidden>
                <b-form-input type="text" v-model="roleModel.id"></b-form-input>
              </b-form-group>
              <div class="col-md-6">
                <b-form-group label="Tên quyền 1">
                  <b-form-input
                    type="text"
                    placeholder="Nhập tên quyền..."
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group label="Tên quyền 2">
                  <b-form-input
                    type="text"
                    placeholder="Nhập tên quyền..."
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-12">
                <b-button type="submit" variant="success" class="mr-2"
                  >Thêm</b-button
                >
                <b-button variant="light">Xóa</b-button>
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
              <div class="col-md-6">
                <b-form-group label="">
                  <b-form-select :options="statusArr" />
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-button variant="primary" class="btn-fw">Tìm kiếm</b-button>
              </div>
            </div>
            <b-table bordered responsive :items="items"></b-table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const itemsTwo = [
  { Status: true, age: 40, first_name: "Dickerson", last_name: "Macdonald" },
  { Status: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
  {
    Status: false,
    age: 89,
    first_name: "Geneva",
    last_name: "Wilson",
    _rowVariant: "danger"
  },
  {
    Status: true,
    age: 40,
    first_name: "Thor",
    last_name: "Macdonald",
    _cellVariants: { Status: "success", age: "info", first_name: "warning" }
  },
  { Status: false, age: 29, first_name: "Dick", last_name: "Dunlap" }
];
export default {
  name: "category-sub",
  data() {
    return {
      roleModel: {},
      statusArr: [
        { value: 1, text: "Tất cả" },
        { value: 2, text: "Đã xóa" },
        { value: 3, text: "Đang sử dụng" }
      ],
      itemsTwo: itemsTwo,
      items: [
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald"
        },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" }
      ],
      fields: {
        last_name: {
          label: "Person last name",
          sortable: true
        },
        first_name: {
          label: "Person first name",
          sortable: false
        },
        foo: {
          // This key overrides `foo`!
          key: "age",
          label: "Person age",
          sortable: true
        }
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.table-responsive {
  border-top: 1px solid #f3f3f3;
}
</style>
