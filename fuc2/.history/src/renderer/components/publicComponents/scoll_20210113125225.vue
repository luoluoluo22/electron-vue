<template>

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
