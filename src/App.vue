<template lang="html">
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default{
  name: 'app',
  created() {
    // const currentPath = this.$router.history.current.path;

    // if (currentPath === '/') {
    //   return
    // }

    // if (sessionStorage.getItem('authenticated') !== 'true') {
    //   this.$router.push('/admin');
    // }

    // if (currentPath === '/admin') {
    //   this.$router.push('/admin/dashboard');
    // }
  },
}
</script>
<style>
@import "../node_modules/mdi/css/materialdesignicons.min.css";
@import "../node_modules/flag-icon-css/css/flag-icon.min.css";
@import "../node_modules/font-awesome/css/font-awesome.min.css";
</style>
<style lang="scss">
@import "./assets/scss/style";
</style>
