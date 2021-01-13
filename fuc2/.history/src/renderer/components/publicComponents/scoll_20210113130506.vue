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
      this.bs = new Bs('.wrapper', {movable: true,
        zoom: true})

      this.wrapperScroll = new BScroll(this.$refs.wrapper, {
        click: true, // better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件，我们会给派发的 event 参数加一个私有属性 _constructed，值为 true。
        probeType: 2, // 这个属性设置之后可以监听得到了
        mouseWheel: true
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initBs()
    })
  }
};
</script>


<style scoped lang = "scss">
@import "../../assets/style/mixin.scss";
  .wrapper{
    height: 600px;
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
