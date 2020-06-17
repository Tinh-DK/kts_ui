<template lang="html">
  <section class="app-sidebar">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <div class="nav-link">
            <div class="profile-image">
              <img src="../../assets/images/faces/face4.jpg" alt="image" />
              <span class="online-status online"></span>
            </div>
            <div class="profile-name">
              <p class="name">{{username}}</p>
              <p class="designation">{{rolename}}</p>
              <div class="badge badge-teal mx-auto mt-3">Online</div>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/dashboard"
            ><img
              class="menu-icon"
              src="../../assets/images/menu_icons/01.png"
              alt="menu icon"
            /><span class="menu-title">Trang Chủ</span></router-link
          >
        </li>
        <li class="nav-item">
          <span class="nav-link" v-b-toggle="'sample-pages'">
            <img class="menu-icon" src="../../assets/images/menu_icons/04.png" alt="menu icon"><span class="menu-title">Quản Lý Bài Viết</span><i class="menu-arrow"></i>
          </span>
          <b-collapse id="sample-pages">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item"><router-link class="nav-link" to="/admin/post-management">Danh sách bài viết</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/admin/post-add">Thêm bài viết</router-link></li>
            </ul>
          </b-collapse>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/parent-category"
            ><img
              class="menu-icon"
              src="../../assets/images/menu_icons/07.png"
              alt="menu icon"
            /><span class="menu-title">Quản Lý Thể Loại</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/sub-category"
            ><img
              class="menu-icon"
              src="../../assets/images/menu_icons/08.png"
              alt="menu icon"
            /><span class="menu-title">Quản Lý Loại Tin</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/role-management"
            ><img
              class="menu-icon"
              src="../../assets/images/menu_icons/03.png"
              alt="menu icon"
            /><span class="menu-title">Quản Lý Quyền</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/user-management"
            ><img
              class="menu-icon"
              src="../../assets/images/menu_icons/09.png"
              alt="menu icon"
            /><span class="menu-title">Quản Lý Người Dùng</span></router-link
          >
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'app-sidebar',
  data: function () {
    return {
      username: "",
      rolename: ""
    }
  },
  created() {
    this.username = sessionStorage.getItem('username')
    this.rolename = sessionStorage.getItem('quyen')
  }
}
</script>

<style scoped lang="scss"></style>
