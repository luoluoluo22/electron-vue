<template>
    <!-- 左侧_模板选择 -->
    <div id="l_template">
        <div  class="template_banner" v-for='item in template_banner_src' @click='set_canvas_bg_img'>
            <img :src='item'>
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
       name: 'BG',
       template_banner_src:
     }
   },

   methods: {
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
   }
 }
</script>

<style scoped lang= "scss">
@import "../../../assets/style/mixin.scss";
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
