<template>
<div>
  <ul>
    <!-- <router-link to="/banner/bg" tag='li' active-class='active_class'></router-link>
    <router-link to="/banner/template" tag='li' active-class='active_class'></router-link> -->
  </ul>
  </div>
</template>

<script>

// import BG from './SideBar/BG'
// import DesignTemplate from './SideBar/designTemplate'

export default {
  data () {
    return {
      name: 'side-bar',
      // side_list: [{
      //   id: 0,
      //   name: 'template-library',
      //   class: 'icon-template-library iconfont'
      // },
      // {
      //   id: 1,
      //   name: 'background',
      //   class: 'icon-background iconfont'

      // },
      // {
      //   id: 2,
      //   name: 'ai247',
      //   class: 'icon-ai247 iconfont'
      // },
      // {
      //   id: 3,
      //   name: 'seban',
      //   class: 'icon-seban iconfont'
      // }
      ],
      show_banner: true
    }
  },
  components: {
    // BG, DesignTemplate
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
    }

  }
}
</script>


<style scoped lang = "scss">
@import "../../assets/style/mixin.scss";

ul{
  display: flex;
}

.active_class{
    color:$Brand_Color
}
</style>
