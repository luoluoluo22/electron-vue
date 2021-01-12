<template>
  <div>
  <!-- 左侧_导航栏 -->
    <div id='left'>
        <!-- <span id='left_nav'>模板</span> -->
        <ol id=''>icon</ol>
        <span>name</span>
    </div>

    <!-- 左侧_模板选择 -->
    <div id="l_template">

        <div class="template_banner" v-for='item in template_banner_src' @click='set_canvas_bg_img'>
            <img :src='item'>
        </div>

    </div>

    </div>
</template>

<script>
const axios = require('axios')
let urls = []// 图片地址
let data // 存放图片地址列表

export default {
  props: {
    // template_banner_src: []
  },
  data () {
    return {
      name: 'side-bar',
      template_banner_src: []
    }
  },
  components: {
  },
  methods: {
    set_canvas_bg_img: function () {

    },
    get_bg_url: function(pageNum = '1') {
      return new Promise(resolve => {
        axios.get(`https://search-v2.hlgdata.com/gd_web/editor/material?page_num=${pageNum}&page_size=40&filter_id=1610349&region_id=1&biz_code=1&endpoint=4&is_free=&from_site=gaoding`).then((res) => {
          console.log('请求结果==' + res.data);
          data = res.data;
          for (let i = 0; i < data.length; i++) {
            urls.push(data[i].preview.url)
          }
          console.log(urls)
          resolve(urls)
        }).catch(function (error) {
          console.log('失败==' + error);
          alert('联网失败，请检查网络');
        });
      })
    },
    update_bg_urls: async function() {
      this.template_banner_src = await this.get_bg_url();// 获取test()函数的返回值
      console.log(`已执行更新背景`)
    }
  },
  mounted: function () {
    this.update_bg_urls()
  }
}
</script>


<style scoped>

/* * {
  box-sizing: border-box;
} */

/* 左侧导航 */
#left{
    width: 60px;
    height: 100%;
    top:0px;
    background-color: var(--bg_color);
    margin:0;
    padding:40px 16px 20px 16px;
    position: fixed;
    border-right:  #f4f4f7 1px solid;

}

#left_nav{
    cursor: pointer;
    color: #6e7792;
}

#left_nav:hover{
    color: #7388c7;
}

#left_nav:active{
    color: #1747d8;
}

/* 右侧模板 */

#l_template{
    -webkit-overflow-scrolling: auto;
    width: 328px;
    height: 100%;
    top:0px;
    left: 60px;
    padding:60px 20px 100px 20px;
    position: fixed;    
    box-sizing: border-box;
    visibility: visible;
    overflow: auto;
    /* visibility: hidden; */
    overflow-y: scroll;
    z-index:97;
    background-color:rgba(255, 255, 255,0.8)

}

/* banner展示模板 */
.template_banner{
    /* width:100%; */
    height:96px;
    margin-top:20px;
    /* font-size: 0;img默认为行内元素 */
    border-radius: var4px;
    overflow: hidden;
    cursor: pointer;
}

.template_banner>img{
    max-width:100%;height:auto;min-width:100%;
}

.template_banner>img:hover{
  border:#60bec2 1px solid;
    box-shadow:
    inset 0 0 15px rgba(55, 84, 170, 0),
    inset 0 0 20px rgba(255, 255, 255, 0),
    10px 10px 18px rgba(55, 84, 170, 0.15),
    -10px -10px 22px white,
    inset 0px 0px 4px rgba(255, 255, 255, 0.2);
    transition: box-shadow 0.1s;
}

#template_bottom{
    font-size:12px;
    color:#b7bac5;
    margin:40px auto;
    text-align: center;/*文字居中*/
}

/* 左侧模板 */
</style>
