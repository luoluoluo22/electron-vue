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

const axios = require('axios')
let pageNum = 1
let url = `https://search-v2.hlgdata.com/gd_web/editor/material?page_num=${pageNum}&page_size=40&filter_id=1610349&region_id=1&biz_code=1&endpoint=4&is_free=&from_site=gaoding`

export default {

  data () {
    return {
      name: 'BG',
      template_banner_src: []
      url:
    }
  },

  methods: {
    set_img_src: function(url) {
      console.log(url)
      axios.get(url).then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          this.template_banner_src.push(res.data[i].preview.url)
        }
      }).catch((error) => { alert('联网失败', error) });
    }
  },
  mounted: function () {
    console.log(this.url)
    // this.set_img_src(this.url) // 初始化图片列表
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
