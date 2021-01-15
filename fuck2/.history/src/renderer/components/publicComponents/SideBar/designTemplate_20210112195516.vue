<template>

  <div>
    <!-- 左侧_模板选择 -->
      <div id="l_template">
        <div  class="template_banner" v-for='item in template_banner_src'>
            <img :src='item'>
        </div>
      </div>
    </div>
</template>

<script>
var myurl = `https://www.gaoding.com/api/topics/10100/modules/21171/templets`

const axios = require('axios')
let urls = []// 图片地址
let data // 存放图片地址列表

export default {

  data () {
    return {
      name: 'BG',
      template_banner_src: []
    }
  },

  methods: {
    get_bg_url: function(url) {
      return new Promise(resolve => {
        console.log(url)
        axios.get(url).then((res) => {
          data = res.data;
          console.log('结果:', data)
          for (let i = 0; i < data.length; i++) {
            urls.push(data[i].preview.url)
          }
          console.log('urls结果:', urls)
          resolve(urls)
        }).catch(function (error) {
          console.log('失败==' + error);
          alert('联网失败，请检查网络');
        });
      })
    },
    update_bg_urls: async function(url) {
      this.template_banner_src = await this.get_bg_url();// 获取test()函数的返回值
    }
  },
  mounted: function () {
    this.update_bg_urls(myurl)
  }

}
</script>

<style scoped lang= "scss">
@import "../../../assets/style/mixin.scss";


/* 左侧导航 */
#left{
    width: 60px;
    height: 100%;
    top:0px;
    background-color: $bg_color;
    padding:80px 16px 20px 16px;
    position: fixed;
    border-right:  #f4f4f7 1px solid;

}

#left_nav{
    color: $color;

    &:hover{
    color: $Brand_Color;
    }
    
    &:active{
    color: $Brand_Color;
    }
}





/* 右侧展示模板的背景 */
#l_template{
    -webkit-overflow-scrolling: auto;
    width: 328px;
    height: 100%;
    left: 60px;
    padding:60px 20px 100px 20px;
    position: fixed;    
    visibility: visible;
    overflow: auto;
    overflow-y: scroll;
    z-index:97;
    background-color:rgba(255, 255, 255,0.8)
}

/* banner展示模板 */
.template_banner{
    height:96px;
    margin-top:20px;
    border-radius: $border_radius;
    overflow: hidden;
    cursor: pointer;

    &:hover{
        box-shadow:$box_shadow;
        transition: $transition_speed;
    }

    &>img{
        max-width:100%;height:auto;min-width:100%;
    }
}
</style>
