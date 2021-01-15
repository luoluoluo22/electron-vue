import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState } from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex)

// 状态管理
export default new Vuex.Store({

  // 全局状态
  state: {
    page_name: ''
  },

  // 对应页面的数据
  data: {
    banner: {
      template_url: 'https://search-v2.hlgdata.com/gd_web/editor/sim_search?page_num=1&page_size=10&q=&sort=&channel_category_id=416&region_id=1&biz_code=1&endpoint=4&is_free=&from_site=gaoding&similar_mid=33970063',
      bg_url: '',
      font: '',
      color: ''
    }
  },

  // 修改状态的方法
  mutations: {
    current_page(state, pageName) {
      // this.page_name = page_name
      console.log(pageName)
      state.page_name = pageName
    }
  },

  modules,
  plugins: [
    createPersistedState()
    // createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'

})
