<template>
  <div>
    <div v-if="text=='pops'">
      <div class="c-item" v-for="item in cPopItem">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <p>{{item.title}}</p>
        </a>
      </div>
    </div>
    <div v-else-if="text=='shangyis'">
      <div class="c-item" v-for="item in cShangYiItem">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <p>{{item.title}}</p>
        </a>
      </div>
    </div>
    <div v-else-if="text=='neiyis'">
      <div class="c-item" v-for="item in cNeiYiItem">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <p>{{item.title}}</p>
        </a>
      </div>
    </div>
    <div v-else-if="text=='kuzis'">
      <div class="c-item" v-for="item in cKuZiItem">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <p>{{item.title}}</p>
        </a>
      </div>
    </div>
    <div v-else-if="text=='qunzis'">
      <div class="c-item" v-for="item in cQunZiItem">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <p>{{item.title}}</p>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "CategoryChild",
    props:{
      text:String,
      cPopItem:Array,
      cShangYiItem:Array,
      cNeiYiItem:Array,
      cKuZiItem:Array,
      cQunZiItem:Array
    }
  }
</script>

<style scoped>
  .c-item{
    width: 35vw;
    text-align: center;
    margin-top: 5px;
    float: left;
  }
  .c-item img{
    width: 80%;
  }
</style>
