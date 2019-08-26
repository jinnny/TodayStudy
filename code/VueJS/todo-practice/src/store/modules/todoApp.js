const storage = {
  fetch() {
    const arr = [];
    if(localStorage.length > 0) {
      for(let i = 0 ; i < localStorage.length; i++) {
        localStorage.key(i)
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  }
}

const state =  {
  // headerText: 'Todo App',
  todoItems: storage.fetch()
}

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  }
}

const mutations = {
  addAppItem(state, newTodoItem) {
    const obj = { completed: false, item: newTodoItem };
    localStorage.setItem(newTodoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  removeAppItem(state, payload) {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
  },
  toggleCheckAppItem(state, payload) {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
  },
  clearAllAppItem(state) {
    localStorage.clear();
    state.todoItems = '';
  }
}

export default {
  state, 
  getters, 
  mutations
}