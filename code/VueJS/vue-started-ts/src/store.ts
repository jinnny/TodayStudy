import Vue from 'vue';
import Vuex, {ActionContext, StoreOptions} from 'vuex';

Vue.use(Vuex);

interface State {
  countNum: number;
}

const store: StoreOptions<State> = {
  state: {
    countNum: 0,
  },
  mutations: {
    setCount(state: State, countNum: number) {
      state.countNum = countNum;
    }
  },
  actions: {
    increase({ state, commit}: ActionContext<State, State>) {
      commit('setCount', state.countNum +1 );
    },
    decrease({ state,commit}:ActionContext<State, State>) {
      commit('setCount', state.countNum -1 );
    }
  },
  getters: {
    countNum: (state: State) => state.countNum
  }
}

export default new Vuex.Store(store);
