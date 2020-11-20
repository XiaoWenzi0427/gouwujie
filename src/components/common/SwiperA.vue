<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide div-img" v-for="img in images">
          <img :src='img.image' alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    // name:Swiper,
    data(){
      return{

      }
    },
    updated() {
      let mySwiper = new Swiper('.swiper-container',{
        autoplay:3000,
        loop:true
      })
    },
    props: {
      images:Array
    },
  }
</script>

<style scoped>
  .swiper-container{
    width: 100%;
    margin-top: 45px;
  }
  .div-img{
    width: 100vw;
    height: 30vh;
  }
  .div-img img{
    width: 100%;
    height: 100%;
  }
</style>
