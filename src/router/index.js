import Vue from 'vue'
import Router from 'vue-router'
import notused from '@/components/tab_notused/tab_notused'
import expired from '@/components/tab_expired/tab_expired'
import alreadyuse from '@/components/tab_alreadyuse/tab_alreadyuse'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/notused',
      component: notused
    },
    {
      path: '/expired',
      component: expired
    },
    {
      path: '/alreadyuse',
      component: alreadyuse
    }
  ],
  linkActiveClass: 'active'
})
