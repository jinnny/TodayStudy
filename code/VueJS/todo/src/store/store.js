import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// use는 글로벌로 추가하고싶을 때 사용.

const storage= {
  fetch() {
    const arr = [];
    if(localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i ++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          // this.todoItems.push(localStorage.key(i));
        }
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = { completed: false, item: todoItem };
      // newtodoitem 저장
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);
    },
    toggleCompleteOneItem(state, payload) {
      state.todoItems[payload.index].completed= !state.todoItems[payload.index].completed
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
    },
    removeAllItem(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }
});