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

// vue全局属性，用于统一管理
Vue.prototype.$css = {
  primaryColor: '#60bec2',
  btn_bg_color: '#fff',
  btn_width: '120px',
  font_size: '14px',
  transition_speed: 'all 0.1s ease-out 0s', // 过渡动画时间
  border_radius: '4px',
  shadow: `
  inset 0 0 15px rgba(55, 84, 170, 0),
  inset 0 0 20px rgba(255, 255, 255, 0),
  10px 10px 18px rgba(55, 84, 170, 0.15),
  -10px -10px 22px white,
  inset 0px 0px 4px rgba(255, 255, 255, 0.2)`
}

/* eslint-disable no-new */
new Vue({
  components: { App }, // 导入app组件
  router,
  store,
  template: '<App/>',
  css: {
    border_radius: '4px;'
  }
}).$mount('#app') // 是Vue实例化的另外一种写法
