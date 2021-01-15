<template>

  <div  class="template_banner">
    <!-- 左侧_模板选择 -->
      <ul>
        <li v-for='item in template_banner_src'>
            <img :src='item'>
        </li>
      </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
const axios = require('axios')
// let BetterScroll = require('better-scroll')

var url = `https://search-v2.hlgdata.com/gd_web/editor/sim_search?page_num=1&page_size=10&q=&sort=&channel_category_id=416&region_id=1&biz_code=1&endpoint=4&is_free=&from_site=gaoding&similar_mid=33970063`

export default {

  data () {
    return {
      name: 'BG',
      template_banner_src: []
    }
  },

  methods: {
    set_img_src: function(url) {
      axios.get(url).then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          this.template_banner_src.push(res.data[i].preview.url)
        }
        console.log(this.template_banner_src)
      }).catch((error) => { alert('联网失败', error) });
    }
  },

  mounted: function () {
    this.set_img_src(url) // 初始化图片列表

    // 当其他dom渲染完成之后执行
    this.$nextTick(() => {
      this.scroll = new BScroll('.better_scroll', {scrollY: true,
        probeType: 1})
    })
  }

}
</script>

<style scoped lang= "scss">
@import "../../../assets/style/mixin.scss";

.better_scroll{
  overflow: hidden;
  height:600px;
  left: 60px;
  bottom:0;
  z-index:97;
}

/* 右侧展示模板的背景 */
#l_template{
    /* -webkit-overflow-scrolling: auto; */
    width: 328px;
    /* height: 100%; */
    top: 0;
    /* height: 800px; */
    padding:60px 20px 100px 20px;
    /* position: fixed;     */
    visibility: visible;
    /* overflow: auto; */
    /* overflow: hidden; */
    /* overflow-y: scroll; */
    background-color:rgba(255, 255, 255,0.8)
}

/* banner展示模板 */
.template_banner{
    /* height:396px; */
    margin-top:20px;
    border-radius: $border_radius;
    /* overflow: hidden; */
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
