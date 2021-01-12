<template>
<div>
<!-- 左侧_导航栏 -->
        <div id='left'>
            <!-- <span id='left_nav'>模板</span> -->
            <svg class=" icon" aria-hidden="true" title='模板'>
                <use xlink:href="#icon-template-library"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-buju1"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-background"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-ai247"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-seban"></use>
            </svg>




        </div>

        <!-- 左侧_模板选择 -->
        <div id="l_template">

            <div class="template_banner" v-for='item in template_banner_src' @click='set_canvas_bg_img'>
                <img :src='item'>
            </div>
        </div>
        <div id="l_template_bg">
        </div>
</div>
</template>

<script>

export default {
  data () {
    return {
      name: 'side-bar'
    }
  },
  components: {
  }
}
</script>


<style scoped>

</style>
