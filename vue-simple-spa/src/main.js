import Vue from 'vue'
import App from './App'
// import router from './router'
import VueCookie from 'vue-cookie'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'

Vue.use(VueCookie)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: Signup
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')