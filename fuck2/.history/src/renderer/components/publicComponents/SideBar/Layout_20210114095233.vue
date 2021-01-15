<template>

  <div>
    <!-- 左侧_模板选择 -->
      <div id="l_template">
        <div  class="template_banner" 
        v-for='item in template_banner_src'>
            <img :src='item'>
        </div>
      </div>
    </div>
</template>

<script>
 
const axios = require('axios')
// let pageNum = '1'
var url = 'https://api-v2.chuangkit.com/copyright/theme/getList.do?_dataType=json&client_type=0'

export default {

   data () {
     return {
       name: 'BG',
       template_banner_src: []
     }
   },

   methods: {
     set_img_src: function(url) {
       let headers = {
         'Access-Control-Allow-Origin': '',
         'cookie': 'gr_user_id=89f2088f-e798-438b-b6e8-b8489e0032a2; _ga=GA1.2.392133364.1605313143; grwng_uid=086b51a3-c01c-4668-ae0a-c4b7ed8f0d86; SEC_SESSION=6DA283243201453A247644AA81040511; Sec_User_id=11321490; 8c9191eb6b6b4d07_gr_last_sent_cs1=11321490; Hm_lvt_5344b558457018b9f67f8372a8214151=1609570335,1609690815,1610538853; _gid=GA1.2.1053008495.1610538862; Hm_lpvt_5344b558457018b9f67f8372a8214151=1610587754; 8c9191eb6b6b4d07_gr_session_id=87d7839a-e2fb-476f-9b0b-52abf79d12c1; 8c9191eb6b6b4d07_gr_last_sent_sid_with_cs1=87d7839a-e2fb-476f-9b0b-52abf79d12c1; 8c9191eb6b6b4d07_gr_session_id_87d7839a-e2fb-476f-9b0b-52abf79d12c1=true; 8c9191eb6b6b4d07_gr_cs1=11321490',
         'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36'

       }

       axios.get(url, {
         headers: headers// 设置header信息
       }).then((res) => {
         console.log(res.data)
         for (let i = 0; i < res.data.length; i++) {
           //  this.template_banner_src.push(res.data[i].preview.url)
         }
       }).catch((error) => { console.log('联网失败', error) });
     }
   },
   mounted: function () {
     this.set_img_src(url) // 初始化图片列表
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
