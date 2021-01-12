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
                <button type="button" id="btn_download" class="btn" @click="download">
                </button>
            </div>
  </div>
  <div id="top_bg" :style="{backgroundImage:'url('+top_img_url+')'}"></div>
  
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
#top{
  width:100%;
    height: 60px;
    top: 0;
    background-color: #fff;
    line-height:60px;
    position: fixed;
    /* border-bottom: #f4f4f7 1px solid; */
    z-index: 999; /* 最高层 */
}
</style>
