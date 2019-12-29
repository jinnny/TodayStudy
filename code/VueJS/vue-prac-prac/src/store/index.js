import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: {},
    ask: {},
    jobs: {},
    askDetail: {}
  },
  getters: {
    askItem(state) {
      return state.askDetail
    }
  },
  mutations,
  actions
})
