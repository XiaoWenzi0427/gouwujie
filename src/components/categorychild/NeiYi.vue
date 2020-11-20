<template>
  <div>
    <CategoryChild :cNeiYiItem="cNeiYiItem" text="neiyis"></CategoryChild>
  </div>
</template>

<script>
  import CategoryChild from "./CategoryChild";
  import {getCategoryNeiYi} from "../../network/category";

  export default {
    name: "NeiYi",
    data(){
      return{
        cNeiYiItem:[]
      }
    },
    components:{
      CategoryChild
    },
    created() {
      getCategoryNeiYi().then(res=>{
        this.cNeiYiItem=res.data.list
      })
    }
  }
</script>

<style scoped>

</style>
