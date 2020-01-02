import Vue from 'vue';
import VueRouter from 'vue-router';
import News from '../views/News.vue';
import Jobs from '../views/Jobs.vue';
import Ask from '../views/Ask.vue';
import AskDetail from '../views/AskDetail.vue';
import User from '../views/User';
// import createListView from '../views/CreateListView.js';
import bus from '../utils/bus';
// import createListViewPrac from '../views/CreateListViewPrac';
import { store } from '../store';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: News,
      // component: createListView('News'),
      // component: createListViewPrac('News')
      beforeEnter: (to,from,next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST_ITEM', to.name)
          .then(() => {
            // bus.$emit('end:spinner');
            next();
          })
          // eslint-disable-next-line no-console
          .catch(e => console.log(e))
      }
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      // component: createListView('News'),
      // component: createListViewPrac('News')
      beforeEnter: (to,from,next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST_ITEM', to.name)
          .then(() => {
            // bus.$emit('end:spinner');
            next();
          })
          // eslint-disable-next-line no-console
          .catch(e => console.log(e))
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs,
      // component: createListView('Jobs'),
      // component: createListViewPrac('Jobs')
      beforeEnter: (to,from,next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST_ITEM', to.name)
          .then(() => {
            // bus.$emit('end:spinner');
            next();
          })
          // eslint-disable-next-line no-console
          .catch(e => console.log(e))
      }
    },
    {
      path: '/ask',
      name: 'ask',
      component: Ask,
      // component: createListView('Ask'),
      // component: createListViewPrac('Ask')
      beforeEnter: (to,from,next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST_ITEM', to.name)
          .then(() => {
            // bus.$emit('end:spinner');
            next();
          })
          // eslint-disable-next-line no-console
          .catch(e => console.log(e))
      }
    },
    {
      path: '/ask/:id',
      name: 'askDetail',
      component: AskDetail
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User
    }
  ]
});
