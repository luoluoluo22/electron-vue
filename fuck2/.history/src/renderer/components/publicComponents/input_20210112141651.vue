<!--
 * @Author       : yuanrunwei
 * @Date         : 2021-01-09 10:34:04
 * @LastEditors  : yuanrunwei
 * @LastEditTime : 2021-01-12 14:16:50
 * @FilePath     : /fuck2/src/renderer/components/publicComponents/input.vue
-->
<template>
  <div>
    <input class='input' :placeholder='placeholder' @click='click' v-model="input_content"
    @blur='input_blur' @keyup.enter=' keyEnter'>
  </div>
</template>

<script>
  export default {
    // 父级单位传输数据的入口
    props: {
      placeholder: {
        type: String,
        default: '请输入'
      },
      input_content: {
        type: String,
        default: '请输入'
      }
    },

    // 子组件独立的默认数据
    data () {
      return {
        name: 'inputComponent'
      }
    },

    // 子组件独立的方法
    methods: {
      click: function() {
        console.log(`${this.name}被click了`)
      },
      input_blur: function() { console.log(`${this.name}失去了焦点：blur`) },
      keyEnter: function() { console.log(`${this.name}点击了 Enter ，输入框的信息为${this.input_content}`) }
    }
  }
</script>

<style scoped lang= "scss">
@import "../../assets/style/mixin.scss";

.input {
    width: 420px;
    height: $btn_height;
    outline: none;
    font-size: 14px;
    text-indent: 10px;
    padding: 5px 0 5px 14px;
    border: none;
    border-radius: $border_radius;
    background-color: rgba(255, 255, 255, 0.9);
    box-sizing: border-box;

    &:focus {
    transition:$transition_speed;/*所有样式都进行过渡，过渡总时间，先慢后快，延迟时间*/
    box-shadow:
        inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;
    }
}

</style>
