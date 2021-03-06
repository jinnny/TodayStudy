import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/contents/Main'
import Profile from '@/components/contents/Profile'
import Login from '@/components/contents/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      props: true,
      meta: {
        // 레이아웃(header,footer) 호출 변수
        plainLayout: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      props: true,
      meta: {
        plainLayout: false
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        plainLayout: false
      }
    }
  ]
})
