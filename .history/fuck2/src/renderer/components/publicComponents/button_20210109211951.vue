<template>
  <div>
  {{color}}
    <button type="button" class="btn_primary btn" :style="btn_style" @click="btn_click" v-if="btn_type==='primary'">{{css}}<slot></slot></button>
    
    <button type="button" class="btn" @click="btn_click" v-else :style="btn_style"><slot></slot></button>
  </div>
</template>

<script>
const
 
export default {
   // 父级单位传输数据的入口
   props: {
     btn_type: {
       type: String,
       default: ''
     }
   },
 
   data () {
     return {
       name: 'btnComponent',
 
       btn_style: {
         '--color': this.$css.primaryColor,
         '--bg_color': this.$css.btn_bg_color,
         '--width': this.$css.btn_width,
         '--border_radius': this.$css.border_radius,
         '--shadow': this.$css.shadow
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
    background-color: var(--bg_color);
    color: var(--color);
    border: var(--border);
    border:none;
    cursor: pointer;
    /* text-align: center; */
    border-radius: var(--border_radius);
    width: var(--width);
    height: var(--height);
    /* position: absolute; */
    font-size: 14px;
    line-height: 40px;
}
  
.btn_primary{
    color: #fff;
    background-color: #60bec2;
}

.btn:hover{
    transition:all 0.1s ease-out 0s;/*所有样式都进行过渡，过渡总时间，先慢后快，延迟时间*/  
    box-shadow:var(--shadow);
}

.btn_primary:hover{
    transition:all 0.1s ease-out 0s;/*所有样式都进行过渡，过渡总时间，先慢后快，延迟时间*/  
    box-shadow:var(--shadow);
}



.btn:focus {
    outline: 1px solid #60bec2;
}

.btn:active{
    color: #fff;
    background-color:#60bec2;
}

</style>
