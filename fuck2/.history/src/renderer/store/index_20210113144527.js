import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex)

// 状态管理
export default new Vuex.Store({
  modules,
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production',

  // 全局状态
  state: {
    page_name: ''
  },

  // 修改状态的方法
  mutations: {
    current_page(state, pageName) {
      // this.page_name = page_name
      console.log(pageName)
      state.pa
    }
  }
})
