import Vue from 'vue';
import VueRouter from 'vue-router';
import AskView from '../views/AskView.vue';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView';
import ItemView from '../views/ItemView';
import bus from '../utils/bus';
import { store } from '../store/index';
// import createListView from '../views/CreateListView';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            next();
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error)
          })
      }
      // component: createListView('NewsView'),
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            next();
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error)
          })
      }
      // component: createListView('AskView'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            next();
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error)
          })
      }
      // component: createListView('JobsView'),
    },
    {
      path: '/user/:id',
      component: UserView
    },
    {
      path: '/item/:id',
      component: ItemView
    },
  ]
});
