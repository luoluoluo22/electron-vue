<!--
 * @Author       : yuanrunwei
 * @Date         : 2021-01-07 23:17:11
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2021-01-12 14:25:00
 * @FilePath     : /fuck2/src/renderer/components/mainBanner.vue
-->
<template>
  <div id="main">
    <!-- 顶部搜索栏 -->
    <nav-bar></nav-bar>
    <!-- 左侧侧边栏  :template_banner_src='src_list' 可以设置图片地址的列表-->
    <side-bar ></side-bar>
    <!-- <button type="button" class="test" :click='test'>调转页面</button> -->
  </div>
</template>

<script>
  import navBar from './publicComponents/navBar'
  import sideBar from './publicComponents/sideBar'

  export default {
    name: 'main-banner-page',
    data () {
      return {
      }
    },
    components: { navBar, sideBar },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    },
    mounted: function () {
      // this.update_bg_urls()
    }
  }
</script>

<style lang = "scss">
@import "../assets/style/mixin.scss";

* {
  @include
  
  background-color: $color_dev; //浅红色便于查看

  font-size:$font_size;
}

  #main {
    background: #f1f3f6;
    height:100vh; /* 1vh=视窗高度的1%，用于高度自适应 */
  }

</style>
