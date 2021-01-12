<template>
  <div id="main">
    <!-- 顶部搜索栏 -->
    <nav-bar></nav-bar>
    <!-- 左侧侧边栏 -->
    <side-bar :template_banner_src='src_list'></side-bar>

    <!-- 测试按钮 -->
    <btn-component class='test' @click="test">测试按钮</btn-component>
    <but
  </div>
</template>

<script>
  import navBar from './publicComponents/navBar'
  import sideBar from './publicComponents/sideBar'
  import btnComponent from './publicComponents/button'

  const axios = require('axios')
  let urls = []// 图片地址
  let data // 存放图片地址列表

  export default {
    data () {
      return {
        src_list: ['https://st0.dancf.com/02/material_uploader/202012090935-5379.jpg', 'https://st0.dancf.com/02/material_uploader/202012090935-5379.jpg']
      }
    },
    name: 'main-banner-page',
    components: { navBar, sideBar, btnComponent },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      get_bg_url: function(pageNum = '1') {
        return new Promise(resolve => {
          axios({
            method: 'get',
            url: `https://search-v2.hlgdata.com/gd_web/editor/material?page_num=${pageNum}&page_size=40&filter_id=1610349&region_id=1&biz_code=1&endpoint=4&is_free=&from_site=gaoding`
          }).then((res) => {
            console.log('请求结果==' + res.data);
            data = res.data;
            for (let i = 0; i < data.length; i++) {
              urls.push(data[i].preview.url)
            }
            console.log(urls)
            this.$options.data().template_banner = urls
            resolve(urls)
          }).catch(function (error) {
            console.log('失败==' + error);
            alert('联网失败，请检查网络');
          });
        })
      },
      update_bg_urls: async function() {
        this.$options.data().template_banner = await this.$options.methods.get_bg_url();// 获取test()函数的返回值
        console.log(`已执行更新背景`)
      },
      test() {
        console.log(this)
      }
  
    },
    mounted: function () {
      // eslint-disable-next-line no-unused-vars
      // this.update_bg_urls()
      // this.$options.methods.get_bg_url()
      // this.$options.data().template_banner = ['https://st0.dancf.com/02/material_uploader/202012090935-5379.jpg', 'https://st0.dancf.com/02/material_uploader/202012090935-5379.jpg']
      this.$options.data().src_list = ['https://st0.dancf.com/02/material_uploader/202012090935-5379.jpg', 'https://st0.dancf.com/02/material_uploader/202012090935-5379.jpg']
      console.log('数据')
    }
  }
</script>

<style>

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #main {
    background: #f1f3f6;
    height:100vh; /* 1vh=视窗高度的1%，用于高度自适应 */
  }

.test{
  position: absolute;
  top:800px;
  left:600px;
  z-index:999;
}

</style>
