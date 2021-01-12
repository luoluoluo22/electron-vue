<template>
  <div>
    <button type="button" id="btn_download" class="btn" @click="download">
</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'btnComponent'
      }
    }
  }
</script>

<style scoped>
  .btn {
    width:120px;
    height: 40px;
    background-color:rebeccapurple;
  }
</style>
