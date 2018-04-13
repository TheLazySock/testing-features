import Vue from 'vue'
import Router from 'vue-router'

//main pages
import Home from '@/components/pages/Home'
import Cart from '@/components/pages/Cart'

//adminpage components
import Index from '@/components/pages/admin/Index'
import New from '@/components/pages/admin/New'
import Products from '@/components/pages/admin/Products'
import Edit from '@/components/pages/admin/Edit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        {
          path: '',
          name: 'Products',
          component: Products
        },
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
      ]
    },
  ]
})
