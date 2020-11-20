<template>
  <div>
    <NavBar class="home-nav">
      <template v-slot:center>购物街</template>
    </NavBar>
    <SwiperA :images='images'></SwiperA>
    <CircleBtn :imagesBtn='imagesBtn'></CircleBtn>
    <div class="nav-Tow">
      <div class="nav-tow" v-for="item in popBtn">
        <router-link :to="/home/+item.sort" active-class="active" class="change">{{item.title}}</router-link>
      </div>
    </div>
    <div>
      <router-view></router-view>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
    </div>
  </div>
</template>
<script>
  import {getHomeMultidta} from "../../network/home";
  import {getHomeMeilishuo} from "../../network/home";
  import NavBar from "../../components/common/navBar/NavBar";
  import SwiperA from "@/components/common/SwiperA";
  import CircleBtn from "../../components/common/CircleBtn";
  export default {
    name: "Home",
    components:{
      NavBar,SwiperA,CircleBtn
    },
    data(){
      return{
        images:[],
        imagesBtn:[],
        popBtn:[],
      }
    },
    created() {
      getHomeMultidta().then(res=>{
        for (let i =0;i<res.data.banner.list.length;i++){
          this.images.push(res.data.banner.list[i])
          this.imagesBtn.push(res.data.recommend.list[i])
        }
      })
      getHomeMeilishuo().then(res=>{
        for (let i =0;i<res.data.filter.list.length;i++){
          this.popBtn.push(res.data.filter.list[i])
        }
      })

    }
  }
</script>

<style scoped>
  /*@import "src/assets/css/bace.css";*/
  .home-nav{
    position: fixed;
    color: #fff;
    background: var(--color-tint);
    z-index: 9;
  }
  .home-div{
    width: 100vw;
    height: 200px;
    /*word-break: break-all;*/
    /*word-wrap: break-word;*/
  }
  .nav-Tow{
    width: 100vw;
    display: flex;
    justify-content: space-around;
  }
  .nav-tow{
  }
  .change{
    line-height: 45px;
  }
  .active{
    position:relative;
    width: 100%;
  }
  .active::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: -6px;
    background: var(--color-tint);
  }
</style>
