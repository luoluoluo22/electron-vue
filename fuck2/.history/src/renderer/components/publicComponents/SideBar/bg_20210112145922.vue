<template>
  <div >
    <!-- 左侧_模板选择 -->
    <div id="l_template" v-show='current_id===0'>

        <div  class="template_banner" v-for='item in template_banner_src' @click='set_canvas_bg_img'>
            <img :src='item'>
        </div>

    </div>
  </div>
</template>

<script>
 
export default {

   data () {
     return {
       name: 'BG'
     }
   },

   methods: {
     //
   }
 }
</script>

<style scoped lang= "scss">

input{
  z-index:999;
  margin-top:200px;
  top: 800px;
  left: 900px;
  position:absolute;
}
</style>
