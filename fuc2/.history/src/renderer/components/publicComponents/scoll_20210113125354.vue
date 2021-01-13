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
import axios from 'axios';
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

</style>
