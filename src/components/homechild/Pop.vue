<template>
  <div>
    <FenleiChild :popItem="popItem" text="pop">

    </FenleiChild>
  </div>

</template>

<script>
  import FenleiChild from "./FenleiChild";
  import {getHomePops} from "../../network/home";
  export default {
    name: "News",
    data(){
      return{
        popItem:[]
      }
    },
    components:{
      FenleiChild
    },
    created() {
      getHomePops().then(res=>{
        for (let i =0;i<res.data.list.length;i++){
          this.popItem.push(res.data.list[i])
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
