<template>
  <div id="app">
    <TodoHeaderPractice />
    <TodoInputPractice />
    <TodoListPractice />
    <TodoFooterPractice />
  </div>
</template>

<script>
import TodoHeaderPractice from './components/TodoHeaderPractice.vue';
import TodoInputPractice from './components/TodoInputPractice.vue';
import TodoListPractice from './components/TodoListPractice.vue';
import TodoFooterPractice from './components/TodoFooterPractice.vue';

export default {
  name: 'app',
  components: {
    TodoHeaderPractice,
    TodoInputPractice,
    TodoListPractice,
    TodoFooterPractice
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
