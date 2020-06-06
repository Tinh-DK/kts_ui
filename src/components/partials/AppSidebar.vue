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
              <p class="name">Richard V.Welsh</p>
              <p class="designation">Manager</p>
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
            /><span class="menu-title">Dashboard</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/post-management"
            ><img
              class="menu-icon"
              src="../../assets/images/menu_icons/04.png"
              alt="menu icon"
            /><span class="menu-title">Post Management</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/role-management"
            ><img
              class="menu-icon"
              src="../../assets/images/menu_icons/03.png"
              alt="menu icon"
            /><span class="menu-title">Role Management</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/parent-category"
            ><img
              class="menu-icon"
              src="../../assets/images/menu_icons/07.png"
              alt="menu icon"
            /><span class="menu-title">Parent Category</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/sub-category"
            ><img
              class="menu-icon"
              src="../../assets/images/menu_icons/08.png"
              alt="menu icon"
            /><span class="menu-title">Sub Category</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/admin/user-management"
            ><img
              class="menu-icon"
              src="../../assets/images/menu_icons/09.png"
              alt="menu icon"
            /><span class="menu-title">User Management</span></router-link
          >
        </li>
      </ul>
    </nav>
  </section>
</template>

<script lang="js">
export default {
  name: 'app-sidebar'
}
</script>

<style scoped lang="scss"></style>
