<template>
<div>
  <div id="top" >

    <div id="top_main">
      <div id="home">DESIGN</div>

      <!-- 搜索框 -->
      <input-component ></input-component>
      <!-- 候选词 -->
      <div class="candidate" v-show=showCandidate>

          <!-- vue生成部分 -->
          <ul>
              <li>{{search_input}}</li>
              <li v-for='res in search_res_list'>{{res}}</li>
          </ul>
      </div>

    </div>

    <div id="top_right">
        <btn-components btn_type='primary'>下载</btn-components>
    </div>
  </div>
  <div id="top_bg" ></div>
  
</div>
</template>

<script>
import inputComponent from './input'
import btnComponents from './button'
export default {
  data () {
    return {
      name: 'navBar',
      showCandidate: false, // 是否显示搜索候选框
      search_input: '', // 搜索框输入值
      search_res_list: [], // 搜索结果列表
      top_img_url: 'https://st0.dancf.com/02/material_uploader/202012230326-8696.jpg'
    }
  },
  components: {
    inputComponent, btnComponents
  }
}
</script>


<style scoped lang = "scss">

@import "../../assets/style/mixin.scss";

#top{
    width:100%;
    height: 60px;
    top: 0;
    line-height:60px;
    position: fixed;
    z-index: 99; /* 最高层 */
}

#top_main{
    width:600px;
    margin:0 auto;
}


#home{
    margin: auto 20px;
    float: left;
}

#search{
    margin:0 20px 0 20px;
}



/* 候选词 */
.candidate{
    /* visibility: hidden; */
    border-radius: 3px;
    background-color: bg_color;
    width:420px;
    padding:20px;
    position: relative;
    top:-6px;
    left: 98px;
    background-color: bg_color;
    box-shadow:shadow;
    max-height: 600px;
    overflow: hidden;

}

/* .candidate > ul{
} */
.candidate > ul > li {
    color: rgb(139, 140, 145);
    font-size:14px;
    line-height:28px;
    padding:0 8px;
    
     transition:padding 0.1s ease-out 0s;/*所有样式都进行过渡，过渡总时间，先慢后快，延迟时间*/
}

.candidate > ul > li:hover{
   
    padding:0 6px;
    background-color:#dbf1f3;
    cursor: pointer;
    color:#60bec2;
}

#top_right{
    height: 100%;
    width:140px;
    padding-right: 20px;
    box-sizing: border-box;
    right:20px;
    position: absolute;
    z-index: 100;
    top:0;
}

/* 糢糊背景 */
#top_bg{
    background-image: url('../../');
    width:100%;
    height: 60px;
    top: 0;
    line-height:60px;
    position: fixed;
    z-index: 98; /* 最高层 */
    background-attachment: fixed;
    overflow: hidden;
    /* background-color: rgba(255, 255, 255, 0.9); */
    -webkit-filter: blur(20px);
    -moz-filter: blur(20px);
    -ms-filter: blur(20px);
    -o-filter: blur(20px);
    filter: blur(50px);    

   
}

</style>
