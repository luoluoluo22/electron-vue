<template>
  <div id="main">
    <!-- 顶部搜索栏 -->
    <nav-bar></nav-bar>
    <!-- 左侧侧边栏  :template_banner_src='src_list' 可以设置图片地址的列表-->
    <side-bar ></side-bar>

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

<style>
/* 全局通用样式 */
:root {
  /* color */
  --Brand_Color:#60bec2;/* 品牌色 */
  
  --primary_color: #60bec2;
  --btn_bg_color: #fff;

  /* size */
  --btn_width: 120px;
  --btn_height: 40px;
  --font_size: 14px;

  /* shape */
  --transition_speed: all 0.1s ease-out 0s; // 过渡动画时间
  --border_radius: 4px;
  --border_line: #f4f4f7 1px solid; // 分割线
  --outline: 1px solid #60bec2;

  /* shadow */
  --shadow: 
  inset 0 0 15px rgba(55, 84, 170, 0),
  inset 0 0 20px rgba(255, 255, 255, 0),
  10px 10px 18px rgba(55, 84, 170, 0.15),
  -10px -10px 22px white,
  inset 0px 0px 4px rgba(255, 255, 255, 0.2)
}

/* 全局样式 */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /* background-color: #ffe3e3; */
    background-color: var(--primary_color);
  }

  #main {
    background: #f1f3f6;
    height:100vh; /* 1vh=视窗高度的1%，用于高度自适应 */
  }

</style>
