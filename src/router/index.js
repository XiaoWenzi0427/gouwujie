import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
const Category=()=>import('@/views/category/Category')
const Home=()=>import('@/views/home/Home')
const ShopCart=()=>import('@/views/shopCart/ShopCart')
const Profile=()=>import('@/views/profile/Profile')
const Pop=()=>import('@/components/homechild/Pop')
const New=()=>import('@/components/homechild/New')
const Sell=()=>import('@/components/homechild/Sell')
// import News from "../components/homechild/News";

const routes = [
  {path:'',redirect:'/home/pop'},
  {
    path:'/home',
    component:Home,
    children:[
      {
        path:'pop',
        component:Pop
      },
      {
        path:'new',
        component:New
      },
      {
        path:'sell',
        component:Sell
      },
    ],
  },
  {path:'/category',component:Category},
  {path:'/profile',component:Profile},
  {path:'/shopcart',component:ShopCart},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
