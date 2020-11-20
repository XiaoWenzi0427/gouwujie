<template>
  <div>
    <FenleiChild :newItem="newItem" text="news"></FenleiChild>
  </div>
</template>

<script>
  import FenleiChild from "./FenleiChild";
  import {getHomeNews} from "../../network/home";
  export default {
    name: "News",
    data(){
      return{
        newItem:[]
      }
    },
    components:{
      FenleiChild
    },
    created() {
      getHomeNews().then(res=>{
        for (let i =0;i<res.data.list.length;i++){
          this.newItem.push(res.data.list[i])
          // this.imagesBtn.push(res.data.recommend.list[i])
        }
        // this.popItem=res.data.list
        console.log(res.data)
        console.log(res.data.list)
        console.log(res.data.list[0].show)

      })
    }
  }
</script>

<style scoped>

</style>
