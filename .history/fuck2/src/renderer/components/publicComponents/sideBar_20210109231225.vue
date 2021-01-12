<template>
<div>
<!-- 左侧_导航栏 -->
  <div id='left'>
      <!-- <span id='left_nav'>模板</span> -->
      <svg class=" icon" aria-hidden="true" title='模板'>
          <use xlink:href="#icon-template-library"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-buju1"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-background"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-ai247"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-seban"></use>
      </svg>

  </div>

  <!-- 左侧_模板选择 -->
  <div id="l_template">

      <div class="template_banner" v-for='item in template_banner_src' @click='set_canvas_bg_img'>
          <img :src='item'>
      </div>
  </div>
  <div id="l_template_bg">
  </div>
</div>
</template>

<script>
const axios = require('axios')
let urls = []// 图片地址
let data // 存放图片地址列表

export default {
  data () {
    return {
      name: 'side-bar',

      template_banner_src: [],

      style: {
        // '--color': this.$css.primary_color,
        // '--bg_color': this.$css.btn_bg_color,
        // '--width': this.$css.btn_width,
        // '--border_radius': this.$css.border_radius,
        // '--shadow': this.$css.shadow,
        // '--font_size': this.$css.font_size,
        // '--transition_speed': this.$css.transition_speed,
        // '--outline': this.$css.outline,
        // '--btn_height': this.$css.btn_height
      }
    }
  },
  components: {
  },
  methods: {
    set_canvas_bg_img: function () {

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
    }
  },
  mounted: function () {
    // eslint-disable-next-line no-unused-vars
    // this.update_bg_urls()
    // this.$options.methods.get_bg_url()
     this.$options.data().template_banner=['https://st0.dancf.com/02/material_uploader/202012090935-5379.jpg']
    console.log('已执行上方函数')
  }
}
</script>


<style scoped>

/* 左侧导航 */
#left{
    width: 60px;
    height: 100%;
    top:0px;
    background-color: rgb(255, 255, 255);
    margin:0;
    padding:40px 16px 20px 16px;
    position: fixed;
    box-sizing: border-box;
    border-right:  #f4f4f7 1px solid;
    /* float: left; */
}

#left_nav{
    cursor: pointer;
    color: #6e7792;
}

#left_nav:hover{
    cursor: pointer;
    color: #7388c7;
}

#left_nav:active{
    cursor: pointer;
    color: #1747d8;
}


/* 左侧导航 */



#l_template{
    -webkit-overflow-scrolling: auto;
    width: 328px;
    height: 100%;
    top:0px;
    left: 60px;
    margin:0;
    padding:60px 20px 100px 20px;
    position: fixed;    
    box-sizing: border-box;
    visibility: visible;
    overflow: auto;
    /* visibility: hidden; */
    overflow-y: scroll;
    z-index:997;
    background-color:rgba(255, 255, 255,0.8)

}



/* banner展示模板 */
.template_banner{
    width:100%;
    height:96px;
    margin-top:20px;
    background-color: #b7bac5;
    font-size: 0;/*img默认为行内元素*/
    overflow: hidden;
}




.template_banner>img{
    max-width:100%;height:auto;min-width:100%;
    border-radius: 4px;
}

.template_banner>img:hover{
    cursor: pointer;
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
