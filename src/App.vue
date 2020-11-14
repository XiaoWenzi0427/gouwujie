<template>
  <div>
    <Tarbar></Tarbar>
    <router-view/>
  </div>
</template>

<script>
  import Tarbar from './components/common/tabbar/Tarbar'
  export default {
    name:'App',
    components:{
      Tarbar
    }
  }

</script>
<style>
  @import "assets/css/bace.css";
</style>
