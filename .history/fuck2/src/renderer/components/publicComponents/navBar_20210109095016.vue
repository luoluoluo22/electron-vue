<template>
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
                <button type="button" id="btn_download" class="btn" @click="download">
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
