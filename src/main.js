import Vue from 'vue'
import App from './App'
import router from './router'

import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert);

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import layoutMixin from './mixins/layout'
Vue.mixin(layoutMixin);

import VueCarousel from 'vue-carousel'
Vue.use(VueCarousel);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
