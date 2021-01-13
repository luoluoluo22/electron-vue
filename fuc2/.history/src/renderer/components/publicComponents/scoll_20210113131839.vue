<template>
    <div class="loadMore">
        <vue-data-loading
                :loading="loading"
                :completed="completed"
                :offset="-1"
                :listens="['infinite-scroll', 'pull-down']"
                :init-scroll="false"
                @infinite-scroll="infiniteScroll"
                @pull-down="pullDown">
            <div>
                <slot></slot>
            </div>
            <div slot="infinite-scroll-loading">loading...</div>
            <div slot="completed">到底啦__</div>
        </vue-data-loading>
        <div class="backTop"
             :class="{active:page>1&!isBack}"
        >
            <img src="/static/backTop.png"
                 @click="backPage"
            >
        </div>
    </div>
</template>
 
<script>
    import VueDataLoading from 'vue-data-loading'
    import { ScrollTop} from '@/utils'
    export default {
      name: 'loadMore',
      props: {
        completed: {
          type: Boolean,
          default: false
        }
      },
      components: {
        VueDataLoading
      },
      data() {
        return {
          loading: false,
          page: 1,
          isBack: false
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll, true);
      },
      destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll); //  离开页面清除（移除）滚轮滚动事件
      },
      methods: {
        handleScroll: function () {
          let curheight = window.innerHeight
          if (window.scrollY > curheight) {
            this.isBack = false;
          }
        },
        backPage() {
          // 滑动到页面的顶部
          let _this = this;
          ScrollTop(0, 350, () => {
            // 滚动到顶部的内容进行二次的数据设置
            _this.isBack = true;
          })
        },
        pullDown() {
          this.page = 1
          this.$emit('changeData', 1)
        },
        infiniteScroll() {
          // 到底触发的事件
          this.page++;
          this.$emit('changeData', this.page)
        }
      }
    }
</script>
 
<style scoped lang="scss" rel="stylesheet/scss">
    .backTop{
        cursor: pointer;
        display: none;
        position: fixed;
        bottom:10%;
        right:10px;
        &.active{
            display: block;
        }
        img{
            width: 2.5rem;
        }
    }
</style>