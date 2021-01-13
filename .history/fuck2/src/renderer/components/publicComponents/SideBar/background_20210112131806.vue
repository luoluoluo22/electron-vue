<template>
  <div >
    <input></input>
    background
  </div>
</template>

<script>
 
export default {

   data () {
     return {
       name: 'background'
     }
   },

   methods: {
     //
   }
 }
</script>

<style scoped lang= "scss">

div{
  z-index:999;
  margin-top:200px;
  top: 800px;
  left: 900px;
  position:absolute;
}
</style>
