<!--
 * @Date         : 2021-01-13 14:17:19
 * @LastEditTime : 2021-01-14 12:41:44
 * @FilePath     : /fuck2/src/renderer/components/mainBanner.vue
-->
<template>
  <div id="main">
    <!-- 顶部搜索栏 -->
    <!-- <nav-bar></nav-bar> -->
    <!-- 左侧侧边栏  :template_banner_src='src_list' 可以设置图片地址的列表-->
    <!-- <side-bar ></side-bar> -->
    <!-- <button type="button" class="test" :click='test'>调转页面</button> -->

    <!-- webview -->
    <webview 
    ref="webview"
    id="webview"
    :src='websrc' 
    disablewebsecurity
    style='height:100%'
    ></webview>
  </div>
</template>

<script>
  import navBar from './publicComponents/navBar'
  import sideBar from './publicComponents/sideBar'
  const html2canvas = require('html2canvas')// 将html保存为图片
  var domtoimage = require('dom-to-image');
  const fs = require('fs')

  export default {
  
    data () {
      return {
        name: 'mainBanner',
        websrc: 'https://www.gaoding.com/odyssey/design?template_id=33994157'
      }
    },
    components: { navBar, sideBar },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      get_msg() {
        this.$store.dispatch('get_msg_list')
      },
      // 显下载文件
      download () {
        // 将指定元素的内容转换为png,并保存
        console.log('开始合成')
        html2canvas(document.querySelector('#div_canvas')).then(canvas => {
          console.log('开始创建节点')
          document.getElementById('container').appendChild(canvas);
          var data = canvas.toDataURL('image/png').replace(/^data:image\/\w+;base64,/, '')
          fs.writeFile('test.png', data,
            'base64', function (err) {
              if (err) {
                console.log('写入图片文件失败');
              } else {
                // console.log('写入图片文件成功');
              }
            });
        });
      }
    },
    mounted() {
      // this.update_bg_urls()
      // this.$store.commit('current_page', this.name) // 提交到store中修改
      // 异步加载
      // this.get_msg()
      const webview = this.$refs.webview
      let preloadFile
      // console.log(webview)
      if (process.env.NODE_ENV === 'production') {
        preloadFile = `file://${global.__static}/preload.js`
      } else {
        preloadFile = 'file://' + require('path').resolve('static/preload.js')
      }
      console.log(preloadFile)

      webview.setAttribute('preload', preloadFile)
    }
  }
</script>

<style lang = "scss">
@import "../assets/style/mixin.scss";

* {
  @include global; // 初始化样式，清除边框，设置字体
  
  background-color: $color_dev; //浅红色便于查看
}

  #main {
    background: $bg_color;
    height:100vh; /* 1vh=视窗高度的1%，用于高度自适应 */
  }

</style>
