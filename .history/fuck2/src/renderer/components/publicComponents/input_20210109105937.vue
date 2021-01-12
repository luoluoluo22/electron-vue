<template>
  <div>
    <input class='input' :placeholder="placeholder" @click='click' v-model="input_content"
    @blur='input_blur' @keyup.enter=' keyEnter'>
  </div>
</template>

<script>
  export default {
    // 　
    props: {
      placeholder: {
        type: String,
        default: '请输入'
      },
      input_content: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        name: 'inputComponent',
        placeholder: '请输入',
        input_content: null
      }
    },
    methods: {
      click: function() {
        console.log(`click${this.name}`)
      },
      input_blur: function() { console.log(`失去了焦点：blur`) },
      keyEnter: function() { console.log(`点击了 Enter ，输入框的信息为${this.input_content}`) }
    }
  }
</script>

<style scoped>

.input {
    width: 420px;
    height: 40px;
    outline: none;
    font-size: 14px;
    text-indent: 10px;
    padding: 5px 0 5px 14px;
    border: 0;
    border-radius: 3px;
    background-color: rgba(255, 255, 255, 0.9);
    box-sizing: border-box;
}

.input:focus {
    transition:all 0.1s ease-out 0s;/*所有样式都进行过渡，过渡总时间，先慢后快，延迟时间*/
    box-shadow:
        inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;
}
</style>
