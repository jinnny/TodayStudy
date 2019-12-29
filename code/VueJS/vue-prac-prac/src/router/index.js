import Vue from 'vue';
import VueRouter from 'vue-router';
import News from '../views/News.vue';
import Jobs from '../views/Jobs.vue';
import Ask from '../views/Ask.vue';
import AskDetail from '../views/AskDetail.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: News
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/ask',
      name: 'ask',
      component: Ask
    },
    {
      path: '/ask:id',
      name: 'askDetail',
      component: AskDetail
    }
  ]
});
