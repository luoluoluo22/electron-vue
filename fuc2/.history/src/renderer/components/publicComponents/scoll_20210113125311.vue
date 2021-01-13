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

export default {

  data () {
    return {
      name: 'BG',
      template_banner_src: []
    }
  },

  methods: {

  },

  mounted: function () {
    // 当其他dom渲染完成之后执行
    this.$nextTick(() => {
      // this.scroll = new BetterScroll('.better_scroll', {})
    })
  }

}
</script>


<style scoped lang = "scss">
@import "../../assets/style/mixin.scss";

</style>
