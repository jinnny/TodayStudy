import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCarousel from 'vue-carousel'
import axios from 'axios'
import { store } from './store/index.js'


Vue.use(VueCarousel)
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
