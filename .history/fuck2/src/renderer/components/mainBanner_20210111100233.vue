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
  --test:#ffe3e3
}

:root {
  --Hi: 'red';
  --Name: var(--Hi)',world';
}

/* 全局样式 */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /* background-color: #ffe3e3; */
    background-color: var(--test);
  }

  #main {
    background: #f1f3f6;
    height:100vh; /* 1vh=视窗高度的1%，用于高度自适应 */
  }

</style>
