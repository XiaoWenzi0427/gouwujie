<template>
  <div>
    <NavBar class="home-nav">
      <template v-slot:center>分类</template>
    </NavBar>

    <div class="all-cate-nav">
      <div class="nav-Tow">
        <div class="nav-tow" v-for="item in cotegoryTitle" >
          <router-link :to="/category/+item.sort" class="change" active-class="active">{{item.title}}</router-link>
        </div>
      </div>
      <div>&nbsp;</div>
    </div>

    <div class="show-category">
      <router-view></router-view>

    </div>
  </div>
</template>
<script>
  import {getCategory} from "../../network/category";
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
      getCategory().then(res=>{
        this.cotegoryTitle=res.data.category.list;
        console.log(res.data.category.list)
        console.log(res.data.category.list[0].title)
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
  .all-cate-nav{
    float: left;
    position: fixed;
    left: 0;
    overflow-x: scroll;
  }
  .nav-Tow{
    margin-top: 44px;
  }
  .change{
    float: left;
    background: #fee;
    line-height: 30px;
    width: 30vw;
    text-align: center;
  }
  .active{
    background-color: #fff;
    color: var(--high-light);
    position: relative;
    font-weight: bold;
  }
  .active::before{
    content: '';
    position: absolute;
    height: 30px;
    left: 0;
    top: 0;
    width: 4px;
    background: var(--color-tint);
  }
  .show-category{
    margin-top: 45px;
    float: right;
    width: 70vw;
    margin-bottom: 60px;
  }
</style>
