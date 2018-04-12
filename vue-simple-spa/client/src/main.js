import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookie from 'vue-cookie'

Vue.use(VueCookie)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')