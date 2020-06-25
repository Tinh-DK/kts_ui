<template>
  <div id="app">
      <PublicHeader/>
      <router-view />
      <PublicFooter/>
  </div>
</template>

<script>
import PublicHeader from '../partials/PublicHead'
import PublicFooter from '../partials/PublicFooter'
export default{
  name: 'public',
  components: {
    PublicHeader,
    PublicFooter
  }
}
</script>
<style lang="css">
    @import "./Layout.css";
    @import "./LayoutCustom.css";
</style>

