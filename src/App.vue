<template>
  <div>
    <router-view/>
    <Tarbar></Tarbar>
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
