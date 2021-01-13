<template>
  <section>
    <div id="user-table" ref="user-table">
      <div>
        <el-table :data="tableDate" border style="width: 100%">
          <el-table-column prop="name" label="用户姓名"></el-table-column>
        </el-table>
      </div>
      <mugen-scroll :handler="loadMore" :should-handle="!loading" scroll-container="user-table">
      </mugen-scroll>
    </div>
  </section>
</template>
 
<script>
import MugenScroll from 'vue-mugen-scroll';
export default {
  components: { MugenScroll },
  data() {
    return {
      // 加载状态
      loading: false,
      // 当前页数
      page: 1,
      // 总页数
      pageTotal: 3,
      pagesize: 10,
      // 模拟后端返回的数据
      datas: [
        { id: '1', name: '用户1' },
        { id: '2', name: '用户2' },
        { id: '3', name: '用户3' },
        { id: '4', name: '用户4' },
        { id: '5', name: '用户5' },
        { id: '6', name: '用户6' },
        { id: '7', name: '用户7' },
        { id: '8', name: '用户8' },
        { id: '9', name: '用户9' },
        { id: '10', name: '用户10' },
        { id: '11', name: '用户11' },
        { id: '12', name: '用户12' },
        { id: '13', name: '用户13' },
        { id: '14', name: '用户14' },
        { id: '15', name: '用户15' },
        { id: '16', name: '用户16' },
        { id: '17', name: '用户17' },
        { id: '18', name: '用户18' },
        { id: '19', name: '用户19' },
        { id: '20', name: '用户20' },
        { id: '21', name: '用户21' },
        { id: '22', name: '用户22' },
        { id: '23', name: '用户23' },
        { id: '24', name: '用户24' },
        { id: '25', name: '用户25' },
        { id: '26', name: '用户26' },
        { id: '27', name: '用户27' }
      ],
      // 列表中的数据
      tableDate: []
    };
  },
  methods: {
    // 加载更多
    loadMore() {
      // 是否当前page不是最后一页
      if (this.page <= this.pageTotal) {
        console.log('loadMore...');
        this.loading = true;
        // 模拟分页查询
        let startIndex = (this.page - 1) * this.pagesize;
        let endIndex = startIndex + this.pagesize;
        this.tableDate.push(...this.datas.slice(startIndex, endIndex));
        // 页码+1
        this.page++;
        console.log(this.tableDate);
        this.loading = false;
      }
    }
  }
};
</script>
<style scoped>
#user-table {
  width: 400px;
  height: 400px;
  overflow-y: scroll;
  margin: 100px auto;
}
</style>