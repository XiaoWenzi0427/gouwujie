<template>
  <div>
    <CategoryChild :cPopItem="cPopItem" text="pops"></CategoryChild>
  </div>
</template>

<script>
  import CategoryChild from "./CategoryChild";
  import {getCategoryPop} from "../../network/category";

  export default {
    name: "Pop",
    data(){
      return{
        cPopItem:[]
      }
    },
    components:{
      CategoryChild
    },
    created() {
      getCategoryPop().then(res=>{
        this.cPopItem=res.data.list
      })
    }
  }
</script>

<style scoped>

</style>
