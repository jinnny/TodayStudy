/**
 * Created by Eunjin Yang on 5/17/19 6:06 PM
 * Github : http://github.com/jinny920311
 * Copyright (c) 2019. All rights reserved.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Board from '../components/Board'
import Card from '../components/Card'
import NotFound from '../components/NotFound'


Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token')
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  isAuth ? next() : next(loginPath)
}

const router = new VueRouter({
  mode: 'history',
  routes : [
    //네비게이션 가드 설정 beforeEnter
    { path: '/', component: Home , beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '/b/:bid', component: Board, beforeEnter: requireAuth, children: [
        { path: 'c/:cid', component: Card, beforeEnter: requireAuth}
      ]},
    { path: '*', component: NotFound}
  ]
})


export default router
