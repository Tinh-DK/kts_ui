<template lang="html">
  <section class="tables">
    <h4 class="card-title">Post management</h4>
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <b-form-group label="Status">
                  <b-form-select :options="statusArr" />
                </b-form-group>
              </div>
              <div class="col-md-6" style="margin-top: 28px">
                <b-button variant="primary" class="btn-fw">Tìm kiếm </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Danh sách bài viết</h4>
            <b-table bordered responsive :items="items"> </b-table>
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
  name: "post-management",
  data() {
    return {
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

<style scoped lang="scss"></style>
