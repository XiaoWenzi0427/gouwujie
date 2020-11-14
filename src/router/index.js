import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
const Category=()=>import('@/views/category/Category')
const Home=()=>import('@/views/home/Home')
const ShopCart=()=>import('@/views/shopCart/ShopCart')
const Profile=()=>import('@/views/profile/Profile')

const routes = [
  {path:'',redirect:Home},
  {path:'/home',component:Home},
  {path:'/category',component:Category},
  {path:'/profile',component:Profile},
  {path:'/shopcart',component:ShopCart},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
