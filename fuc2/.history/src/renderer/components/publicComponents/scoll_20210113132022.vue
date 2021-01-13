<template>
  <div class="index" v-scroll="loadMore">
   <!-- 列表数据传递给子组件，loading表示是否正在加载数据，避免在请求时多次触发 -->
    <my-item :lists="lists" :loading="loading" />
  </div>
</template>

<script>
import MyItem from '~/components/Item.vue'
export default {
  name: 'Index',
  created () {
  // 初始化数据
    this.$store.dispatch('GET_INDEX_LISTS')
    this.lists = this.$store.state.lists
  },
  data() {
    return {
      lists: [],
      page: 1,
      loading: false
    }
  },
  directives: {
  scroll: {
    bind: function (el, binding){
      window.addEventListener('scroll', function() {
        if(document.documentElement.scrollTop + document.documentElement.clientHeight  >= document.documentElement.scrollHeight) {
          let loadData = binding.value
          loadData()
        }
      })
    }
  }
},
methods: {
  async loadMore(){
    if(!this.loading){
      this.loading = true
        // 请求下一页数据
      await this.$store.dispatch('GET_INDEX_LISTS', {
          page: this.page++
        })
    // 重新填充数据
    this.lists = this.lists.concat(this.$store.state.lists)
    this.loading = false
    }
  }
},
  components: {
    MyItem
  }
}
</script>