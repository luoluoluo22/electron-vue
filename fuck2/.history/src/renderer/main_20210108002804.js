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

function aaapp() {
  console.log('hello world')
}
