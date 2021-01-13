<template>
  <div class="wrapper">
      <div class="content">
       <ul>
         <li v-for="(item,index) in 30" :key="index">{{item}}</li>
       </ul>
      </div>
  </div>
</template>

<script>
// import axios from 'axios';
import Bs from 'better-scroll'
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {

    initBs() {
      this.bs = new Bs('.wrapper', {})
    }
  },
  mounted() {
    this.$nextTick(() => {
  this._initScroll()
})
    this.initBs()
  }
};
</script>


<style scoped lang = "scss">
@import "../../assets/style/mixin.scss";
  .wrapper{
    height: 200px;
    width: 359.2px;
    border: 1px solid red;
    overflow: hidden;
    .content{
      width: 395.2px;
      min-height: 300px;
      background: green;
    }
  }
</style>
