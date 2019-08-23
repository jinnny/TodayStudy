<template>
  <div>
    <transition-group name="list" tag="ul">
      <li class="shadow" 
        v-for="(todoItem, index) in this.$store.state.todoItems" 
        v-bind:key="todoItem.item"
        >
        <i 
          class="checkBtn fas fa-check"
          v-on:click="toggleComplete(todoItem,index)"
          v-bind:class="{checkBtnCompleted: todoItem.completed}"
        >
        </i>
        <span 
          v-bind:class="{textCompleted: todoItem.completed}"
        >
          {{ todoItem.item }}
        </span>
        <button class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash"></i>
        </button>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  // props: {
  //   propsdata: Array
  // },
  methods: {
    removeTodo (todoItem, index) {
      this.$store.commit('removeOneItem', {todoItem, index})
      // this.$emit('removeTodoItem', todoItem, index)
    },
    toggleComplete (todoItem, index) {
      this.$store.commit('toggleCompleteOneItem', {todoItem, index})
      // this.$emit('toggleCompleteItem', todoItem, index)
    }
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