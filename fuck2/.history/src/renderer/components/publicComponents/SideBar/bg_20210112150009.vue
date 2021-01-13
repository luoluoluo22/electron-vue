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
@import "../../assets/style/mixin.scss";
/* 右侧展示模板的背景 */
#l_template{
    -webkit-overflow-scrolling: auto;
    width: 328px;
    height: 100%;
    left: 60px;
    padding:60px 20px 100px 20px;
    position: fixed;    
    visibility: visible;
    overflow: auto;
    overflow-y: scroll;
    z-index:97;
    background-color:rgba(255, 255, 255,0.8)
}

/* banner展示模板 */
.template_banner{
    height:96px;
    margin-top:20px;
    border-radius: $border_radius;
    overflow: hidden;
    cursor: pointer;

    &:hover{
        box-shadow:$box_shadow;
        transition: $transition_speed;
    }

    &>img{
        max-width:100%;height:auto;min-width:100%;
    }
}
</style>
