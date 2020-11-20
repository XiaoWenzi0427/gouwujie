<template>
  <div>
    <div v-if="text=='pop'">
      <div class="feileiItem"  v-for="item in popItem">
        <a :href="item.link">
          <img :src="item.showLarge.img" alt="" class="feileiImg">
          <p class="fenleiText">{{item.title}}</p>
        </a>
      </div>
    </div>
    <div v-else-if="text=='news'">
      <div class="feileiItem"  v-for="item in newItem">
        <a :href="item.link">
          <img :src="item.showLarge.img" alt="" class="feileiImg">
          <p class="fenleiText">{{item.title}}</p>
        </a>
      </div>
    </div>
    <div v-else>
      <div class="feileiItem"  v-for="item in sellItem">
        <a :href="item.link">
          <img :src="item.showLarge.img" alt="" class="feileiImg">
          <p class="fenleiText">{{item.title}}</p>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "FenleiChild",
    props:{
      popItem:Array,
      newItem:Array,
      sellItem:Array,
      text:String
    }
  }
</script>

<style scoped>
  .feileiItem{
    float: left;
    /*display: inline-block;*/
    width: 50vw;
    text-align: center;
  }
  .feileiItem a{
    display: inline-block;
    width: 46vw;
    text-align: center;
    margin-top: 2%;
  }
  .feileiImg{
    width: 100%;
    height: 220px;
    border-radius: 3%;

  }
  .fenleiText{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
