import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'landing-page',
      name: 'main_banner_page',
      // component: require('@/components/LandingPage').default
      component: require('@/components/main_banner.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
