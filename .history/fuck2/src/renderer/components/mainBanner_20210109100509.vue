<template>
  <div id="main">
   <navBar></navBar>
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
    background: #2c3e50;
    height:100vh; /* 1vh=视窗高度的1%，可用于字体的相对缩放 */
  }

</style>
