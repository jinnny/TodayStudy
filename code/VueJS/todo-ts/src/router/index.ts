import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemList from '../views/ItemList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/:status?',
    name: 'home',
    component: ItemList,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
