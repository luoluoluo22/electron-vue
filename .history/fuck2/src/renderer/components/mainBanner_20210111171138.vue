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

<style>
/* 全局通用样式 */
:root {
  /* main color */
  --Brand_Color:#60bec2;/* 品牌色 */

  /* 文本、背景、边框、按钮颜色 */
  --color: #303133;  /* 默认颜色 */
  --color_primary: #606266;  /* 强调颜色、主色 */
  --color_3: #909399;  /* 最次文字 */
  --color_4: #C0C4CC;  /* 占位文字 */

  --bg_color: #f1f3f6;  /* 大背景浅灰色 */

  /* 字体 大小、样式、粗细、颜色 */
  --font_size: 14px;
  --font_size_title: 18px;

  /* 基础颜色 */
  --white_color: #fff;  /* 白 */
  --black_color: #000;  /* 黑 */

  /* size button*/
  --btn_width: 120px;
  --btn_height: 40px;

  /* shape */
  --transition_speed: all 0.1s ease-out 0s; 
  --border_radius: 4px;
  --border_line: #f4f4f7 1px solid;
  --outline: 1px solid #60bec2;

  /* shadow 按钮hover */
  --shadow: 
    inset 0 0 15px rgba(55, 84, 170, 0),
    inset 0 0 20px rgba(255, 255, 255, 0),
    10px 10px 18px rgba(55, 84, 170, 0.15),
    -10px -10px 22px white,
    inset 0px 0px 4px rgba(255, 255, 255, 0.2);
  --box_shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1)  /* 浅色投影 */
}

/* 全局样式 */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /* background-color: #ffe3e3; */
    background-color: #ffe3e3; /* 浅红色便于查看 */
  }

  #main {
    background: #f1f3f6;
    height:100vh; /* 1vh=视窗高度的1%，用于高度自适应 */
  }

  button{
    top:400px;
    left: 400px;
    position: relative;
    z-index:999;
  }

</style>
