import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    item: {},
    list: []
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchUser(state) {
      return state.user;
    },
    fetchItem(state) {
      return state.item;
    }
  },
  mutations,
  actions
});
