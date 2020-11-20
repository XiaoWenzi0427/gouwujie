<template>
  <div>
    <div id="tabbar">
      <div class="tab-bar-item" @click="itemClick">
        <slot v-if="!isActived" name="slot-img"></slot>
        <slot v-else name="slot-active-img"></slot>
        <div :style="activeStyle">
          <slot name="slot-text"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tar-bar-item",
    data(){
      return{
        // isActived:false
      }
    },
    props:{
      path:String,
      activeColor:{
        type:String,
        default:"deepskyblue"
      }
    },
    computed:{
      isActived(){
        // return this.$router.path==this.path
        return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle(){
        return this.isActived?{color:this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  /*@import "../../assets/css/base.css";*/

  .tab-bar-item{
    text-align: center;
    height: 49px;
  }

</style>
