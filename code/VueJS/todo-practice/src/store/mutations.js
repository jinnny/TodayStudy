const addAppItem = (state, newTodoItem) => {
  const obj = { completed: false, item: newTodoItem };
  localStorage.setItem(newTodoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
};
const removeAppItem = (state, payload) => {
  localStorage.removeItem(payload.todoItem.item);
  state.todoItems.splice(payload.index, 1);
};
const toggleCheckAppItem = (state, payload) => {
  state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
  localStorage.removeItem(payload.todoItem.item);
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
};
const clearAllAppItem = (state) => {
  localStorage.clear();
  state.todoItems = '';
}

export { addAppItem, removeAppItem, toggleCheckAppItem, clearAllAppItem }