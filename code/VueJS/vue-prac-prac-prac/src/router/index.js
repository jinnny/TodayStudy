import Vue from 'vue';
// import ListView from '../views/ListView';
import VueRouter from 'vue-router';
import List from '../views/List.js'
import UserInfo from '../views/UserInfo';
import AskDetail from '../views/AskDetail';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      // component: ListView
      component: List('news')
    },
    {
      path: '/news',
      name: 'news',
      // component: ListView
      component: List('news')
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: ListView
      component: List('jobs')
    },
    {
      path: '/ask',
      name: 'ask',
      // component: ListView
      component: List('ask')
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserInfo
    },
    {
      path: '/askDetail/:id',
      name: 'askDetail',
      component: AskDetail
    }
  ]
})

