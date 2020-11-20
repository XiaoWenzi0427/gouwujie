<template>
  <div>
    <NavBar class="home-nav">
      <template v-slot:center>分类</template>
    </NavBar>
    <div class="nav-Tow">
      <div class="nav-tow" v-for="item in cotegoryTitle">
        <router-link :to="/category/+item.sort" active-class="active" class="change">{{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>


<script>
  import {getHomeCategory} from "../../network/category";
  import NavBar from "../../components/common/navBar/NavBar";
  export default {
    name: "category",
    components:{
      NavBar
    },
    data(){
      return{
        cotegoryTitle:[]
      }
    },
    created() {
      getHomeCategory().then(res=>{
        this.cotegoryTitle=res.data.category.list;
        console.log(res.data.category.list)
      })
    }
  }
</script>


<style scoped>
  .home-nav{
    position: fixed;
    color: #fff;
    background: var(--color-tint);
    z-index: 9;
  }
  .nav-Tow{
    margin-top: 44px;
    line-height: 35px;
  }
</style>
