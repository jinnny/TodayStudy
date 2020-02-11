import Vue from 'vue';
import Vuex from 'vuex';
import { state } from './state.js';
import getters from './getters';
import actions from './actions.js'
import mutations from './mutations';
// import content from './content'
// import { reactive } from '@vue/composition-api';
Vue.config.productionTip = false;

Vue.use(Vuex);



export const store = new Vuex.Store ({
  state,
  getters,
  mutations,
  actions
})
