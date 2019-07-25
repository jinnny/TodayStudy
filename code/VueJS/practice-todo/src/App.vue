<template>
  <div id="app">
    <TodoHeader />
    <!--<app-header v-on:하위컴포넌트에서 발생한 이벤트이름(emit에 선언된이름)="상위 컴포넌트의 메서드 이름"></app-header>-->
    <TodoInput v-on:addTodoItem="addOneItem"/>
    <!-- <TodoInputSelf /> -->
    <!-- <AppHeader v-bind:프롭스 속성이름="상위 컴포넌트의 데이터 이름"></AppHeader> -->
    <TodoList v-bind:propsdata="todoItems" 
              v-on:removeItem="removeOneItme" 
              v-on:toggleItem="toggleOneItem"/>
    <!-- <TodoListSelf /> -->
    <TodoFooter v-on:clearAll="clearAllItem"/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';
// self 
import TodoInputSelf from './components/TodoInputSelf.vue';
import TodoListSelf from './components/TodoListSelf.vue'

export default {
  name: 'app',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
    TodoInputSelf,
    TodoListSelf
  },
  data () {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem (todoItem) {
      var obj = {completed: false, item: todoItem};
      // JSON.stringify() : javascript를 string으로 변환시켜줌(미적용시 객체로만 넣어짐, 데이터확인불가)
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItme (todoItem, index) {
    // 키값
      localStorage.removeItem(todoItem.item);
      // splice(): 기존배열에서 해당부분을 잘라서 새로운 배열을 보내줌(index값, 지울 갯수)
      this.todoItems.splice(index, 1);
    },
    toggleOneItem (todoItem, index) {
      //  todoItem.completed = !todoItem.completed;
      // 컴포넌트간 경계를 명확히 함.app.vue에 있는 데이터를 이용해 값을 바꾸는 방법이 바람직.
      this.todoItems[index].completed = !this.todoItems[index].completed;
      // localStorage 데이터를 지우고, 바뀐 데이터로 재설정
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItem () {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created () {
      // localStorage 가 있다면
      if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i ++) {
          if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                  // todoItems 배열에 데이터 밀어넣기
                  // this.todoItems.push(localStorage.key(i));  

                  // JSON.parse() : string -> object 화 하기
                  this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
              }
          }
      }
  },
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
  font-family: ubuntu, sans-serif;
}
input {
  boder-style: groove;
  width: 200px;
}
button {
  boder-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
