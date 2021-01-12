<template>
  <div id="main">
    <!-- 顶部搜索栏 -->
    <nav-bar></nav-bar>
    <!-- 左侧侧边栏 -->
    <side-bar :template_banner_src='src_list'></side-bar>
  </div>
</template>

<script>
  import navBar from './publicComponents/navBar'
  import sideBar from './publicComponents/sideBar'

  export default {
    data () {
      return {
        src_list: ['https://st0.dancf.com/02/material_uploader/202012090935-5379.jpg', 'https://st0.dancf.com/02/material_uploader/202012090935-5379.jpg']
      }
    },
    name: 'main-banner-page',
    components: { navBar, sideBar },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
    }
  }
</script>

<style>

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #main {
    background: #f1f3f6;
    height:100vh; /* 1vh=视窗高度的1%，用于高度自适应 */
  }

</style>
