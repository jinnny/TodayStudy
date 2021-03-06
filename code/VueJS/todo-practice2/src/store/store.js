import Vue from 'vue';
import Vuex from 'vuex';
// import * as getters from './getters';
// import * as mutations from './mutations';
import todoApp from './modules/todoApp'


Vue.use(Vuex);

// const storage = {
//   fetch() {
//     const arr = [];
//     if(localStorage.length > 0) {
//       for(let i = 0; i < localStorage.length; i ++) {
//         if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
//           // console.log(localStorage.getItem(localStorage.key(i)));
//           arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
//         }
//       }
//     }
//     return arr;
//   }
// }

export const store = new Vuex.Store({
  modules: {
    todoApp
  }
  // state: {
  //   todoItems: storage.fetch()
  // },
  // getters,
  // getters: {
  //   getTodoItems(state){
  //     return state.todoItems
  //   }
  // },
  // mutations
  // mutations: {
  //   toggleCompleteAppItem(state, payload) {
  //     state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
  //     localStorage.removeItem(payload.todoItem.item);
  //     localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
  //   },
  //   addTodo(state, newTodoItem) {
  //     const obj = { completed: false, item: newTodoItem };
  //     localStorage.setItem( newTodoItem, JSON.stringify(obj));
  //     state.todoItems.push(obj);
  //   },
  //   removeTodoAppItem(state, payload) {
  //     localStorage.removeItem(payload.todoItem.item);
  //     console.log(payload.todoItem.item)
  //     state.todoItems.splice(payload.index, 1);
  //   },
  //   clearAllAppItem(state) {
  //     localStorage.clear();
  //     state.todoItems = null;
  //   }
  // }
})