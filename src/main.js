import App from './App'
import VideoPlayer from 'vue-video-player'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import fixed from './filters/index';
import router from './router'
import store from './store/store'
import $ from 'jquery'
console.log($);

Vue.use(VideoPlayer)
Vue.filter('fixed', fixed)
Vue.prototype.$axios = axios
Vue.prototype.$q = $
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
