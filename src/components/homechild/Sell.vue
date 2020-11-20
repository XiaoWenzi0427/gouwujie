<template>
  <FenleiChild :sellItem="sellItem" text="sell"></FenleiChild>
</template>

<script>
  import FenleiChild from "./FenleiChild";
  import {getHomeSells} from "../../network/home";
  export default {
    name: "Chose",
    data(){
      return{
        sellItem: []
      }
    },
    components:{
      FenleiChild
    },
    created() {
      getHomeSells().then(res=>{
        // for (let i =0;i<res.data.list.length;i++){
        //   this.sellItem.push(res.data.list[i])
          // this.imagesBtn.push(res.data.recommend.list[i])
        // }
        this.sellItem=res.data.list
        console.log(res.data)
        console.log(res.data.list)
        console.log(res.data.list[0].show)

      })
    }
  }
</script>

<style scoped>

</style>
