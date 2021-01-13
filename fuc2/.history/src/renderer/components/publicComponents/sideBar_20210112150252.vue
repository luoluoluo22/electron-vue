  <template>
  <div>
  <!-- 左侧_导航栏 声明式导航 -->
    <div id='left'>
      <i v-for='(data,index) in side_list' :key="data.id" @click='selct_is_me(data.id)' :class='data.class' ></i>
    </div>

    <!-- 动态组件切换时，保持原有的状态 -->
    <keep-alive>
      <!-- 动态组件 -->
      <!-- <component :is='is_which'></component> -->
    </keep-alive>

    

  </div>
</template>

<script>

import background from './SideBar/background'
import designTemplate from './SideBar/designTemplate'

export default {
  props: {
    // template_banner_src: []
  },
  data () {
    return {
      name: 'side-bar',
      template_banner_src: [],
      current_id: 0,
      is_which: 'background', // 选中项
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
    background, designTemplate
  },
  methods: {
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


/* 点击的图标 */
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

  .active_sider{
    color:$Brand_Color
  }

</style>
