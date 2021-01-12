<template>
  <div>
    <button type="button" class="btn_primary" @click="btn_click" v-if="btn_type==='primary'"><slot></slot></button>
    <button type="button" class="btn" @click="btn_click" v-else><slot></slot></button>
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
        name: 'btnComponent'
      }
    },

    methods: {
      btn_click: function() { console.log(`${this.name}进行了点击`) }
    }
  }
</script>

<style scoped>
  
.btn{

    display: inline-block;
    color: #2c2c2c;
    background-color: #fff;
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

.hover{
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

*:focus {
    color: #fff;
    background-color: #60bec2;
    outline:none;/* 外框样式 */
    
}

*:active{
    border:none;
    color: #fff;
    background-color:#60bec2;
}



</style>
