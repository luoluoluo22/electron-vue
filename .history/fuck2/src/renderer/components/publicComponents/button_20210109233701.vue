<template>
  <div>
    <button type="button" class="btn_primary btn" :style="btn_style" @click="btn_click" v-if="btn_type==='primary'"><slot></slot></button>
    <button type="button" class="btn" @click="btn_click" v-else :style="btn_style"><slot></slot></button>
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
 
   name: 'btnCompon',
   data () {
     return {
       name: 'btnComponent',
 
       btn_style: {
         '--color': this.$css.primary_color,
         '--bg_color': this.$css.btn_bg_color,
         '--width': this.$css.btn_width,
         '--border_radius': this.$css.border_radius,
         '--shadow': this.$css.shadow,
         '--font_size': this.$css.font_size,
         '--transition_speed': this.$css.transition_speed,
         '--outline': this.$css.outline,
         '--btn_height': this.$css.btn_height
       }
     }
   },

   methods: {
     btn_click: function() { console.log(`${this.name}进行了点击`) }
   }
 }
</script>

<style scoped >

/* 在此处设置部分通用属性值 */
  
.btn{
    color: var(--color);
    background-color: var(--bg_color);
    border:none;
    cursor: pointer;
    border-radius: var(--border_radius);
    width: var(--width);
    height: var(--btn_height);
    font-size: var(--font_size);
    line-height: var(--btn_height);
}
  
.btn_primary{
    color: var(--bg_color);
    background-color: var(--color);
}

.btn:hover{
    transition:var(--transition_speed);/*所有样式都进行过渡，过渡总时间，先慢后快，延迟时间*/  
    box-shadow:var(--shadow);
}

.btn:focus {
    outline: var(--outline); 
}

.btn:active{
    color: var(--bg_color);
    background-color:var(--color);
}

.btn_primary:active{
    color: var(--color);
    background-color:var(--bg_color);
}

</style>
