<template>
  <div id="app">
    <TodoHeader/>
    <TodoInput />
    <TodoList  />
    <TodoFooter/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

export default {
  name: 'app',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  methods: {
    // addTodoApp(newTodoItem) {
    //   const obj = { completed: false, item: newTodoItem };
    //   localStorage.setItem( newTodoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // toggleCompleteApp(todoItem, index) {
    //   // console.log(this.todoItems, index);
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    // removeTodoApp(todoItem, index) {
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1);
    // },
    // clearAllTodoApp(){
    //    localStorage.clear();
    //    this.todoItems = null;
    // }
  }
}
</script>

<style>
body {
  text-align: center;
  background: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0,0,0,.03);
}
* {
  font-family: 'Ubuntu', sans-serif;
}
</style>
