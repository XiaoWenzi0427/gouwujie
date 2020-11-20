<template>
  <div id="tabbar">
    <TarBarItem path="/home/pop" active-color="red">
      <template v-slot:slot-img>
        <img src="@/assets/img/2.png" alt="">
      </template>
      <template v-slot:slot-active-img>
        <img src="@/assets/img/1.png" alt="">
      </template>
      <template v-slot:slot-text>
        <div>首页</div>
      </template>
    </TarBarItem>

    <TarBarItem path="/category/pop" active-color="red">
      <template v-slot:slot-img>
        <img src="@/assets/img/2.png" alt="">
      </template>
      <template v-slot:slot-active-img>
        <img src="@/assets/img/1.png" alt="">
      </template>
      <template v-slot:slot-text>
        <div>分类</div>
      </template>
    </TarBarItem>

    <TarBarItem path="/shopcart" active-color="red">
      <template v-slot:slot-img>
        <img src="@/assets/img/2.png" alt="">
      </template>
      <template v-slot:slot-active-img>
        <img src="@/assets/img/1.png" alt="">
      </template>
      <template v-slot:slot-text>
        <div>购物车</div>
      </template>
    </TarBarItem>

    <TarBarItem path="/profile" active-color="red">
      <template v-slot:slot-img>
        <img src="@/assets/img/2.png" alt="">
      </template>
      <template v-slot:slot-active-img>
        <img src="@/assets/img/1.png" alt="">
      </template>
      <template v-slot:slot-text>
        <div>我的</div>
      </template>
    </TarBarItem>
<!--    <slot></slot>-->
  </div>

</template>

<script>
  import TarBarItem from './Tar-bar-item';
  export default {
    name: "Tarbar",

    components:{
      TarBarItem
    }
  }
</script>

<style scoped>
  /*@import "../../assets/css/base.css";*/
  #tabbar{
    width: 100vw;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    background: #f6f6f6;
    box-shadow: 0 -1px rgba(100,100,100,.1);
  }
  /*.tab-bar-item{*/
  /*  height: 49px;*/
  /*}*/

  .tab-bar-item img{
    height: 24px;
    width: 24px;
  }
</style>
