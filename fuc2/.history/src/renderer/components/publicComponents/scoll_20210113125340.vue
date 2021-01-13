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
import axios from "axios";
import Bs from 'better-scroll'
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
 
    initBs(){
      new Bs('.wrapper',{})
  }
  },
  mounted() {
    this.initBs()
  },
};

作者：最念倾城
链接：https://www.jianshu.com/p/694487fbcdb2
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
</script>


<style scoped lang = "scss">
@import "../../assets/style/mixin.scss";

</style>
