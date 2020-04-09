import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/home/Home')
const AutoMatic = () => import('../views/automatic/AutoMatic')
const ByYourSelf = () => import('../views/byyourself/ByYourSelf')
const Long = () => import('../views/long/Long')
const Company = () => import('../views/company/Company')
const Hitch = () => import('../views/hitch/Hitch')
const Activity = () => import('../views/activity/Activity')
const Register = () => import('../views/register/Register')
const Login = () => import('../views/login/Login')

Vue.use(VueRouter)

// 创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/automatic',
    component: AutoMatic
  },
  {
    path: '/byyourself',
    component: ByYourSelf
  },
  {
    path: '/long',
    component: Long
  },
  {
    path: '/company',
    component: Company
  },
  {
    path: '/hitch',
    component: Hitch
  },
  {
    path: '/activity',
    component: Activity
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 导出router
export default router