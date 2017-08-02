// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Vueresource from 'vue-resource'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vueresource)
Vue.use(Vuex)

var store = new Vuex.Store({
	state: {
		count: 0
	}
})
/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
router.push('/notused')
