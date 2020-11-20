<template>
  <div>
    <CategoryChild :cQunZiItem="cQunZiItem" text="qunzis"></CategoryChild>
  </div>
</template>

<script>
  import CategoryChild from "./CategoryChild";
  import {getCategoryQunZi} from "../../network/category";
  export default {
    name: "QunZi",
    data(){
      return{
        cQunZiItem:[]
      }
    },
    components:{
      CategoryChild
    },
    created() {
      getCategoryQunZi().then(res=>{
        this.cQunZiItem=res.data.list
      })
    }
  }
</script>

<style scoped>

</style>
