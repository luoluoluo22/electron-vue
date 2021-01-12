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

  .main{
    background: #f1f3f6;
    height:1
  }

</style>
