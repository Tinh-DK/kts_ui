<template lang="html">
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    debugger
    const currentPath = this.$router.history.current.path;
    if (currentPath === "/") {
      this.$router.push("/");
    } 
    else if (currentPath.includes('admin')) {
      if (sessionStorage.getItem("authenticated") !== "true") {
        this.$router.push("/admin");
      } else if (sessionStorage.getItem("authenticated") === "true") {
        this.$router.push(currentPath);
      }
    }
    else {
      this.$router.push(currentPath);
    }
  }
};
</script>
<style>
@import url("https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css");
@import "../node_modules/mdi/css/materialdesignicons.min.css";
@import "../node_modules/flag-icon-css/css/flag-icon.min.css";
@import "../node_modules/font-awesome/css/font-awesome.min.css";
</style>
<style lang="scss">
@import "./assets/scss/style";
</style>
