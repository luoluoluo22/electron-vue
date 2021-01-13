<template>
<div>
  <ul>
    <router-link to="/banner/bg" tag='li' active-class='active_class'>bg</router-link>
    <router-link to="/banner/template" tag='li' active-class='active_class'>template</router-link>
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
  display: flex;
}

.active_class{
    /* color:$Brand_Color */
}
</style>
