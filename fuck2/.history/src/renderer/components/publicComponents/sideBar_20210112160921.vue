<template>
<div>
  <ul>
    <router-link to="/banner/template" tag='i' active-class='active_class' class="iconfont">&#xe625;</router-link>
    <router-link to="/banner/template" tag='i' active-class='active_class' class="iconfont">&#xe655;</router-link>
    <router-link to="/banner/bg" tag='i' active-class='active_class' class="iconfont">&#xe609;</router-link>
  </ul>
  </div>
</template>

<script>

// import BG from './SideBar/BG'
// import DesignTemplate from './SideBar/designTemplate'

export default {
  data () {
    return {
      name: 'side-bar'
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
      // ],
    }
  },
  components: {
    // BG, DesignTemplate
  },
  methods: {

  }
}
</script>


<style scoped lang = "scss">
@import "../../assets/style/mixin.scss";

ul{
    width: 60px;
    height: 100%;
    top:0px;
    background-color: $white_color;
    padding:80px 16px 20px 16px;
    position: fixed;
    border-right:  #f4f4f7 1px solid;
}

.active_class{
    color:$Brand_Color
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
</style>
