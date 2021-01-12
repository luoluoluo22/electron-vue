<template>
  <div>
  <!-- 左侧_导航栏 声明式导航 -->
    <div id='left'>
      <!-- 将路由跳转的元素渲染成i标签 -->
      <!-- <router-link to='/' tag='i' class="iconfont icon-template-library" active-class='active_sider'></router-link> -->
      <i v-for='(data,index) in side_list' :key="data.id" @click='selct_is_me(data.id)' :class='i_class' ></i>
      <!-- <i class="iconfont icon-background"></i>
      <i class="iconfont icon-ai247"></i>
      <i class="iconfont icon-seban"></i> -->
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
      template_banner_src: [],
      current_id: null,
      side_list: [{
        id: 0,
        name: 'template-library',
        class: 'icon-template-library iconfont'
      },
      {
        id: 1,
        name: 'background',
        class: 'icon-background iconfont'

      },
      {
        id: 2,
        name: 'ai247',
        class: 'icon-ai247 iconfont'
      },
      {
        id: 3,
        name: 'seban',
        class: 'icon-seban iconfont'
      }
      ]
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
    },
    selct_is_me(i) {
      this.current_id = i
      // this.side_list[i].class += ' active_sider'
      // console.log(i, this.side_list[i].class)
      // return [this.current_id === i ? 'active' : '']
    },
    i_class(i) {
      if (i) {
        this.side_list[i].class += ' active_sider'
      } else { return [this.current_id === i ? 'active' : ''] } // 如果点击，则为当前元素添加激活样式
    }
  },
  mounted: function () {
    this.update_bg_urls()
  }
}
</script>


<style scoped>

/* 左侧导航 */
#left{
    width: 60px;
    height: 100%;
    top:0px;
    background-color: var(--bg_color);
    margin:0;
    padding:80px 16px 20px 16px;
    position: fixed;
    border-right:  #f4f4f7 1px solid;

}

    #left_nav{
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
    border-radius: var(--border_radius);
    overflow: hidden;
    cursor: pointer;

}

    .template_banner:hover{
        box-shadow:var(--box_shadow);
        transition: var(--transition_speed);
    }

    .template_banner>img{
        max-width:100%;height:auto;min-width:100%;
    }

  i {
    font-size:28px;
    color:var(--color);
    display:flex;
    margin-top:40px;
    cursor: pointer;
  }

  i:hover{
    color:var(--Brand_Color);
  }

  i {
    font-size:28px;
    color:var(--color);
    display:flex;
    margin-top:40px;
    cursor: pointer;
  }
  .active{
    color:var(--Brand_Color)
  }

</style>
