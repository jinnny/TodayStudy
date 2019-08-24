<template>
  <div id="app">
    <TodoHeader />
    <!-- <TodoInput v-bind:하위컴포넌트의프롭스이름="상위컴포넌트의데이터이름"/> -->
    <TodoInput v-on:addOneItem="addAppItem"/>
    <TodoList 
      v-bind:propsdata="todoItems"
      v-on:removeTodoItem="removeAppItem"
      v-on:toggleCompletedTodoItem="toggleCheckAppItem"
      />
    <TodoFooter v-on:하위컴포넌트이벤트명="clearAllAppItem"/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

export default {
  name: 'app',
   data() {
    return {
      todoItems: []
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  created() {
    if(localStorage.length > 0) {
      for(let i = 0 ; i < localStorage.length; i++) {
        localStorage.key(i)
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          // console.log(this.todoItems)
        }
      }
    }
  },
  methods: {
    addAppItem(newTodoItem) {
      const obj = { completed: false, item: newTodoItem };
      localStorage.setItem(newTodoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeAppItem(todoItem, index) {
      // console.log(todoItem, todoItem.index)
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleCheckAppItem(todoItem, index) {
      // console.log(this.todoItems[index])
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    clearAllAppItem() {
      localStorage.clear();
      this.todoItems = '';
    }
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