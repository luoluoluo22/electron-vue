<template>
  <div id="main">
    <!-- 顶部搜索栏 -->
    <!-- <nav-bar></nav-bar> -->
    <!-- 左侧侧边栏  :template_banner_src='src_list' 可以设置图片地址的列表-->
    <side-bar ></side-bar>
    <!-- <button type="button" class="test" :click='test'>调转页面</button> -->
  </div>
</template>

<script>
  import navBar from './publicComponents/navBar'
  import sideBar from './publicComponents/sideBar'

  export default {
  
    data () {
      return {
        name: 'mainBanner'
      }
    },
    components: { navBar, sideBar },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      get_msg() {
        this.$store.dispatch('get_msg_list')
      }
    },
    mounted: function () {
      // this.update_bg_urls()
      this.$store.commit('current_page', this.name) // 提交到store中修改

      // 异步加载
      this.get
    }
  }
</script>

<style lang = "scss">
@import "../assets/style/mixin.scss";

* {
  @include global; // 初始化样式，清除边框，设置字体
  
  background-color: $color_dev; //浅红色便于查看
}

  #main {
    background: $bg_color;
    height:100vh; /* 1vh=视窗高度的1%，用于高度自适应 */
  }

</style>
