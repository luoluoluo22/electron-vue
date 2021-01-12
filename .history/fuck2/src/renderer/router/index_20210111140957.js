import Vue from 'vue'
import Router from 'vue-router'
// 　
Vue.use(Router) // 路由是为了方便地址栏快速跳转地址所使用，一个地址对应一个页面

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'landing-page',
      name: 'main-banner-page',
      // component: require('@/components/LandingPage').default
      component: require('@/components/mainBanner').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
