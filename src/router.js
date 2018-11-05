import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Jingnews from './views/Jingnews'
import Shanyhs from './views/Shanyhs'
import Login from './views/Login'
import Register from './views/Register'


Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', name: 'index', component: Index},
    {path: '/index', name: 'index', component: Index},
    {path: '/jingnews', name: 'jingnews', component: Jingnews},
    {path: '/shanyhs', name: 'shanyhs', component: Shanyhs},
    {path: '/login', name: 'login', component: Login,meta: {
            requireAuth: true,            // 添加该字段，表示进入这个路由是需要登录的
        },},
    {path: '/register', name: 'register', component: Register}
  ]
})
