<template>
<div class="wrapper">
       <p>2222222222222</p>
      <div class="content">
       <ul>
         <li v-for="(item,index) in 30" :key="index">{{item}}</li>
       </ul>
      </div>
    </div>
</template>
<script>
import Bs from 'better-scroll'
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5]
    };
  },
  methods: {

    initBs() {
      this.scoll = new Bs('.wrapper', {})
    }
  },
  mounted() {
    this.initBs()
  }
};
</script>
<style lang="less">
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
</style>