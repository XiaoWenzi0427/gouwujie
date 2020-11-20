<template>
  <div>
    <CategoryChild :cKuZiItem="cKuZiItem" text="kuzis"></CategoryChild>
  </div>
</template>

<script>
  import CategoryChild from "./CategoryChild";
  import {getCategoryKuZi} from "../../network/category";

  export default {
    name: "KuZi",
    data(){
      return{
        cKuZiItem:[]
      }
    },
    components:{
      CategoryChild
    },
    created() {
      getCategoryKuZi().then(res=>{
        this.cKuZiItem=res.data.list
      })
    }
  }
</script>

<style scoped>

</style>
