import Vue from 'vue'
import Router from 'vue-router'
import Triggers from '@/components/Triggers'
import Counter from '@/components/Counter'
import Cart from '@/components/Cart'
import GithubUser from '@/components/GithubUser'

Vue.use(Router)

export default new Router({
  routes: [
        {
            path: '/',
            name: 'Triggers',
            component: Triggers,
            children: [{
                path: 'counter',
                component: Counter
            }, {
                path: 'cart',
                component: Cart
            }, {
                path: 'github-user',
                component: GithubUser
            }]
        }
    ]
})