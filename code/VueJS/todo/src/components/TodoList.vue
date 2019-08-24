<template>
  <div>
    <transition-group name="list" tag="ul">
      <li class="shadow" 
        v-for="(todoItem, index) in this.todoItems" 
        v-bind:key="todoItem.item"
        >
        <i 
          class="checkBtn fas fa-check"
          v-on:click="toggleComplete({todoItem,index})"
          v-bind:class="{checkBtnCompleted: todoItem.completed}"
        >
        </i>
        <span 
          v-bind:class="{textCompleted: todoItem.completed}"
        >
          {{ todoItem.item }}
        </span>
        <!-- *객체화해서 1개로 넘긴다. -->
        <button class="removeBtn" v-on:click="removeTodo({todoItem, index})">
          <i class="fas fa-trash"></i>
        </button>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';


export default {
  // props: {
  //   propsdata: Array
  // },
  methods: {
    ...mapMutations({
      // 넘기는 인자값을 선언하지 않아도 위에서 선언되있으면 그대로 가지고옴 대신 객체 1개로 넘기고 있기떄문에
      // 위에서 메서드 형식도 객체화로 1개 해서 넘겨야함. 위의 *표시부분
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleCompleteOneItem'
    }),
    // removeTodo (todoItem, index) {
    //   this.$store.commit('removeOneItem', {todoItem, index})
    //   // this.$emit('removeTodoItem', todoItem, index)
    // },
    // toggleComplete (todoItem, index) {
    //   this.$store.commit('toggleCompleteOneItem', {todoItem, index})
    //   // this.$emit('toggleCompleteItem', todoItem, index)
    // }
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // }
    ...mapGetters(['storedTodoItems']),
    // 아래처럼 객체명이 다를떄 객체화함.
    // ...mapGetters({
    //   todoItem: 'storedTodoItems'
    // })
    ...mapState(['todoItems'])
  }
}
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: #ffffff;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
    background: none;
    border: none;
    cursor: pointer;
  }
  .checkBtnCompleted {
    color: #b3adad;
  }
  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }
  .removeBtn {
    cursor: pointer;
    border: 0;
    background: none;
    margin-left: auto;
    color: red;
  }
}
// 리스트 트랜지션
.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

</style>