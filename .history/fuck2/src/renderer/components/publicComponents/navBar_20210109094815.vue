<template>
  <div>
  <div id="top">
            <div id="top_main">
                <div id="home">DESIGN</div>

                <!-- 搜索框 -->
                <div id="search">
                    <input class='input' :placeholder="placeholder" @click='history_search' v-model="search_input"
                        @blur='search_blur' @keyup.enter=' sub_search'>
                </div>
                <!-- 候选词 -->
                <div class="candidate" v-if=isVisible>

                    <!-- vue生成部分 -->
                    <ul>
                        <li>{{search_input}}</li>
                        <li v-for='res in search_res'>{{res.li}}</li>
                    </ul>
                </div>

            </div>
            <div id="top_right">
                <button type="button" id="btn_download" class="btn" @click="download"
                    style="margin:10px 30px auto;right:20px;float:right;cursor: pointer; background-color: rgba(rgb(255, 255, 255,0.6)">
                    <svg class="icon" style="margin:10px auto;" aria-hidden="true" title='模板' @click="download">
                        <use xlink:href="#icon-xiazai"></use>
                    </svg>
                </button>
            </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'btnComponent'
      }
    }
  }
</script>

<style scoped>
  .btn {
    width:120px;
    height: 40px;
    background-color:rebeccapurple;
  }
</style>
