<template>
  <div id="main">
  <!-- 顶部　 -->
   <nav-bar></nav-bar>
   <side-bar></side-bar>
  </div>
</template>

<script>
  import navBar from './publicComponents/navBar'

  export default {
    name: 'main-banner-page',
    components: { navBar },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
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
