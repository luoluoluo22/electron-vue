<template>
  <div>
    <input class='input' :placeholder="placeholder" @click='click' v-model="search_input"
    @blur='search_blur' @keyup.enter=' sub_search'>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'inputComponent',
        placeholder: '请输入'
      }
    },
    methods: {
      click: function() {
        console.log(`click${this.name}`)
      },
      blur: function() {}
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
