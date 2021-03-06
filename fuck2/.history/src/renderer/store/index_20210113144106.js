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

  // 全局变量
  state: {
    page_name: 'banner'
  }

  mutations: {
    current_page(){
      this.page_name=
    }
  }
})
