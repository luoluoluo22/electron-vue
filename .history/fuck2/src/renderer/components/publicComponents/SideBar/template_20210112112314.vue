<template>
  <div >
    template
  </div>
</template>

<script>
 
export default {

   data () {
     return {
       name: 'template'
     }
   },

   methods: {
     //
   }
 }
</script>

<style scoped lang= "scss">

/* 在此处设置部分通用属性值 */
  
.btn{
    color: $color;
    background-color: $white_color;
    border:none;
    cursor: pointer;
    border-radius: $border_radius;
    width: $btn_width;
    height: $btn_height;
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
