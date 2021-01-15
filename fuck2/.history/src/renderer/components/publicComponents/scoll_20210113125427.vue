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
    this.initBs()
  }
};
</script>


<style scoped lang = "scss">
@import "../../assets/style/mixin.scss";
  .wrapper{
    height: 500px;
    width: 359.2px;
    border: 1px solid red;
    overflow: hidden;
    .content{
      width: 395.2px;
      min-height: 800px;
      background: green;
    }
  }

著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
</style>
