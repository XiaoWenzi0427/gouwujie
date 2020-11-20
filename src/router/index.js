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

const Pop1=()=>import('@/components/categorychild/Pop')
const ShangYi=()=>import('@/components/categorychild/ShangYi')
const KuZi=()=>import('@/components/categorychild/KuZi')
const QunZi=()=>import('@/components/categorychild/QunZi')
const NeiYi=()=>import('@/components/categorychild/NeiYi')
const NvXie=()=>import('@/components/categorychild/NvXie')
const NanYou=()=>import('@/components/categorychild/NanYou')
const BaoBao=()=>import('@/components/categorychild/BaoBao')
const YunDong=()=>import('@/components/categorychild/YunDong')
const PeiShi=()=>import('@/components/categorychild/PeiShi')
const MeiZhuang=()=>import('@/components/categorychild/MeiZhuang')
const GeHu=()=>import('@/components/categorychild/GeHu')
const JiaJu=()=>import('@/components/categorychild/JiaJu')
const BaiHuo=()=>import('@/components/categorychild/BaiHuo')
const MuYing=()=>import('@/components/categorychild/MuYing')
const ShiPin=()=>import('@/components/categorychild/ShiPin')

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
  {
    path:'/category',
    component:Category,
    children: [
      {
        path:'pop',
        component:Pop1,
      },
      {
        path:'shangyi',
        component:ShangYi,
      },
      {
        path:'kuzi',
        component:KuZi,
      },
      {
        path:'qunzi',
        component:QunZi,
      },
      {
        path:'neiyi',
        component:NeiYi,
      },
      {
        path:'nvxie',
        component:NvXie,
      },
      {
        path:'nanyou',
        component:NanYou,
      },
      {
        path:'baobao',
        component:BaoBao,
      },
      {
        path:'yundong',
        component:YunDong,
      },
      {
        path:'peishi',
        component:PeiShi,
      },
      {
        path:'meizhuang',
        component:MeiZhuang,
      },
      {
        path:'gehu',
        component:GeHu,
      },
      {
        path:'jiaju',
        component:JiaJu,
      },
      {
        path:'baihuo',
        component:BaiHuo,
      },
      {
        path:'muying',
        component:MuYing,
      },
      {
        path:'shipin',
        component:ShiPin,
      },
    ]
  },
  {path:'/profile',component:Profile},
  {path:'/shopcart',component:ShopCart},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
