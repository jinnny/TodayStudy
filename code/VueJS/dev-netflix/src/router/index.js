import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/contents/Main'
import Profile from '@/components/contents/Profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: {
        // 레이아웃(header,footer) 호출 변수
        plainLayout: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        plainLayout: false
      }
    }
  ]
})
