  <template>
  <div>
  <!-- 左侧_导航栏 声明式导航 -->
    <div id='left'>
      <i v-for='(data,index) in side_list' :key="data.id" @click='selct_is_me(data.id)' :class='data.class' ></i>
    </div>

    <!-- 动态组件切换时，保持原有的状态 -->
    <keep-alive>
      <!-- 动态组件 -->
      <component :is='is_which'></component>
    </keep-alive>
    <template></template

    <!-- 左侧_模板选择 -->
    <div id="l_template" v-show='current_id===0'>

        <!-- <div  class="template_banner" v-for='item in template_banner_src' @click='set_canvas_bg_img'>
            <img :src='item'>
        </div> -->

    </div>

    </div>
</template>

<script>

import background from './SideBar/background'
import template from './SideBar/template'

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
      current_id: 0,
      is_which: 'template', // 选中项
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
      ],
      show_banner: true
    }
  },
  components: {
    background, template
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
      // 如果当前的选项和已选择的不一致，则先清除已有标签
      if (this.current_id === i) {
        console.log('已经选中')
      } else if (this.current_id === null) {
        console.log('没有选中项目')
        this.current_id = i
        this.side_list[i].class += ' active_sider'
        console.log(i, this.side_list[i].class)
      } else {
        // 去处旧样式
        let str = this.side_list[this.current_id].class
        let res = str.slice(0, str.length - 13)
        this.side_list[this.current_id].class = res
        // 为选中项添加新样式
        this.current_id = i
        this.side_list[i].class += ' active_sider'
        this.is_which = i
        // 显示点击后侧边页面
      }
    },
    mounted: function () {
      this.update_bg_urls()
    }
  }
}
</script>


<style scoped lang = "scss">

@import "../../assets/style/mixin.scss";

/* 左侧导航 */
#left{
    width: 60px;
    height: 100%;
    top:0px;
    background-color: $bg_color;
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
    border-radius: $border_radius;
    overflow: hidden;
    cursor: pointer;

}

    .template_banner:hover{
        box-shadow:$box_shadow;
        transition: $transition_speed;
    }

    .template_banner>img{
        max-width:100%;height:auto;min-width:100%;
    }

  i {
    font-size:28px;
    color:$color;
    display:flex;
    margin-top:40px;
    cursor: pointer;
  }

  i:hover{
    color:$Brand_Color;
  }

  i {
    font-size:28px;
    color:$color;
    display:flex;
    margin-top:40px;
    cursor: pointer;
  }
  .active_sider{
    color:$Brand_Color
  }

</style>
