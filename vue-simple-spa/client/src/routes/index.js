import Home from '@/components/Home'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Posts from '@/components/Posts'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/Posts',
        name: 'Posts',
        component: Posts
    },
]

export default routes
