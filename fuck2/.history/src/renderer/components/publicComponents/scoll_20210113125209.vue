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
    set_img_src: function(url) {
      axios.get(url).then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          this.template_banner_src.push(res.data[i].preview.url)
        }
        console.log(this.template_banner_src)
      }).catch((error) => { alert('联网失败', error) });
    }
  },

  mounted: function () {
    this.set_img_src(url) // 初始化图片列表

    // 当其他dom渲染完成之后执行
    this.$nextTick(() => {
      this.scroll = new BetterScroll('.better_scroll', {})
    })
  }

}
</script>


<style scoped lang = "scss">
@import "../../assets/style/mixin.scss";

</style>
