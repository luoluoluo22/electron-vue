import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router) // 路由是为了　

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
