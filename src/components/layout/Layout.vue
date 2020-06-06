<template lang="html">
  <div id="app">
    <div class="container-scroller">
      <app-header/>
      <div class="container-fluid page-body-wrapper">
        <app-sidebar/>
        <div class="main-panel">
          <div class="content-wrapper">
            <router-view/>
          </div>
          <!-- content wrapper ends -->
          <app-footer/>
        </div>
        <!-- main panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </div>
</template>

<script lang="js">
import AppHeader from '../partials/AppHeader'
import AppSidebar from '../partials/AppSidebar'
import AppFooter from '../partials/AppFooter'
export default{
  name: 'Layout',
  components: {
    AppHeader,
    AppSidebar,
    AppFooter
  }
}
</script>
