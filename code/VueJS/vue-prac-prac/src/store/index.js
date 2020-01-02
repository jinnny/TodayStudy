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
    askDetail: {},
    userInfo: {},
    item: {},
    list: {}
  },
  getters: {
    askItem(state) {
      return state.askDetail
    },
    userInfoItem(state) {
      return state.userInfo
    }
  },
  mutations,
  actions
})
