<!--
 * @Author       : yuanrunwei
 * @Date         : 2021-01-07 23:20:34
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2021-01-12 14:07:06
 * @FilePath     : /fuck2/src/renderer/components/publicComponents/button.vue
-->
<template>
  <div >
    <button type="button" class="btn_primary btn"   v-if="btn_type==='primary'"><slot></slot></button>
    <button type="button" class="btn"  v-else ><slot></slot></button>
  </div>
</template>

<script>
 
export default {
   // 父级单位传输数据的入口
   props: {
     btn_type: {
       type: String,
       default: null
     }
   },
 
   data () {
     return {
       name: 'btnComponent'
     }
   },

   methods: {
     btn_click: function() { console.log(`${this.name}进行了点击`) }
   }
 }
</script>

<style scoped lang= "scss">
@import "../../assets/style/mixin.scss";

/* 在此处设置部分通用属性值 */
  
.btn{
    color: $color;
    background-color: #;
    border:none;
    cursor: pointer;
    border-radius: $border_radius;
    width: 200px;
    height: 80px;
    /* width: $btn_width;
    height: $btn_height; */
    font-size: $font_size;
    line-height: $btn_height;

}
  
.btn_primary{
    color: $Brand_Color;
    background-color: $white_color;
}

.btn:hover{
    transition:$transition_speed;/*所有样式都进行过渡，过渡总时间，先慢后快，延迟时间*/  
    z-index:101;
    box-shadow:$shadow;
}

.btn:focus {
    outline: $outline; 
}

.btn:active{
    color: $bg_color;
    background-color :$color;
}

.btn_primary:active{
    color: $color;
    background-color:$bg_color;
}

</style>
