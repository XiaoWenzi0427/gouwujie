<template>
  <div>
    <CategoryChild :cShangYiItem="cShangYiItem" text="shangyis"></CategoryChild>
  </div>
</template>

<script>
  import CategoryChild from "./CategoryChild";
  import {getCategoryShangYi} from "../../network/category";

  export default {
    name: "ShangYi",
    data(){
      return{
        cShangYiItem:[]
      }
    },
    components:{
      CategoryChild
    },
    created() {
      getCategoryShangYi().then(res=>{
        this.cShangYiItem=res.data.list
      })
    }
  }
</script>

<style scoped>

</style>
