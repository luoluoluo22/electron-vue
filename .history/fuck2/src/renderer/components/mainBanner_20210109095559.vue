<template>
  <div id="wrapper">
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
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

</style>
