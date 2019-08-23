<template>
  <div id="app">
    <TodoHeader />
    <!-- <TodoInput v-on:하위컴포넌트에서 발생시킨 이벤트이름="상위컴포넌트의 메서드이름"/> -->
    <TodoInput/>
    <!-- <TodoList v-bind:하위컴포넌트의프롭스속성이름="상위(현재)컴포넌트의데이터이름"/> -->
    <TodoList/>
    <TodoFooter/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  name: 'app',
  // data() {
  //   return {
  //     todoItems: [],
  //   }
  // },
  methods: {
    // addOneItem(todoItem) {
    //   const obj = { completed: false, item: todoItem };
    //   // newtodoitem 저장
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // removeOneItem(todoItem, index) {
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1);
    // },
    // toggleCompleteOneItem(todoItem, index) {
    //   /* 44,45 는 같게 동작하지만, props 로 올려받은 데이터를 조작하는것은 좋지못하기때문에
    //     data에 todoItems 를 이용한 45번째줄 처럼 구현하는게 적절함*/
    //   // todoItem.completed = !todoItem.completed;
    //   this.todoItems[index].completed= !this.todoItems[index].completed
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    // },
    // removeAllItem() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
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
