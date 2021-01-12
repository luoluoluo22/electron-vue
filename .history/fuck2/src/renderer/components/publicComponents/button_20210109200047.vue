<template>
  <div>
  {{color}}
    <button type="button" class="btn_primary btn" @click="btn_click" v-if="btn_type==='primary'">{{css}}<slot></slot></button>
    
    <button type="button" class="btn" @click="btn_click" v-else :style="{'--width': widthvar}"><slot></slot></button>
  </div>
</template>

<script>
 
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
       color: this.$css.primaryColor,
       widthvar: '200px',
       border_radius:'4px'
     }
   },

   methods: {
     btn_click: function() { console.log(`${this.name}进行了点击`) }
   }
 }
</script>

<style scoped>

/* 在此处设置部分通用属性值 */
:root {
    --border-radius: {{ accentColor }};
  }
  
.btn{

    display: inline-block;
    color: color;
    background-color: #fff;
    border:none;
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
    width:var(--width);
    height:40px;
    /* position: absolute; */
    font-size: 14px;
    line-height: 40px;
}
  
.btn_primary{

    display: inline-block;
    color: #fff;
    background-color: #60bec2;
    border:none;
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
    width:120px;
    height:40px;
    /* position: absolute; */
    font-size: 14px;
    line-height: 40px;
}

.btn:hover{
    transition:all 0.1s ease-out 0s;/*所有样式都进行过渡，过渡总时间，先慢后快，延迟时间*/  
    box-shadow:
        inset 0 0 15px rgba(55, 84, 170, 0),
        inset 0 0 20px rgba(255, 255, 255, 0),
        10px 10px 18px rgba(55, 84, 170, 0.15),
        -10px -10px 22px white,
        inset 0px 0px 4px rgba(255, 255, 255, 0.2);
    /* transition: box-shadow 0.3s; */
    /* box-shadow: inset 7px 7px 15px rgba(55, 84, 170, 0.15), inset -7px -7px 20px white, 0px 0px 4px rgba(255, 255, 255, 0.2); */
}

.btn:focus {
    border-radius: 4px;
    outline: 1px solid #60bec2;
    
}

.btn:active{
    border:none;
    color: #fff;
    background-color:#60bec2;
}



</style>
