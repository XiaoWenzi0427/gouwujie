<template>
  <div>
    <div class="img-btn" v-for="item in imagesBtn">
      <a :href='item.link'>
        <img :src="item.image" alt="">
      </a>
      <a :href="item.link">{{item.title}}</a>
    </div>
    <div class="img-btn" v-for="item in imagesBtn">
      <a :href='item.link'>
        <img :src="item.image" alt="">
      </a>
      <a :href="item.link">{{item.title}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CircleBtn",
    props:['imagesBtn','imagesBtnLink']
  }
</script>

<style scoped>
  .img-btn{
    width: 25vw;
    float: left;
    text-align: center;
  }
  .img-btn a{
    display: inline-block;
    width: 100%;
  }
  .img-btn a img{
    width: 80%;
    margin-top:10%;
  }
</style>
