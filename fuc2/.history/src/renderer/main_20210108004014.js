/*
 * @Author: mikey.zhaopeng 
 * @Date: 2021-01-Fr 12:40:06 
 * @Last Modified by:   mikey.zhaopeng 
 * @Last Modified time: 2021-01-Fr 12:40:06 
 */
import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

// Open dev tools initially when in development mode
import { remote } from 'electron'
const currentWindow = remote.getCurrentWindow()
currentWindow.openDevTools()

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true' // 关闭安全提醒

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
