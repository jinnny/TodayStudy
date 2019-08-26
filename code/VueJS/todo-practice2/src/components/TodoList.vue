<template>
  <div>
    <ul>
      <li 
        v-for="(todoItem, index) in this.$store.state.todoItems"
        v-bind:key="todoItem.item"
        class="shadow"
        >
        <button
        v-on:click="toggleCompleteItem({todoItem, index})"
        v-bind:class="{ checkBtnCompleted : todoItem.completed}"
        class="fas fa-check checkBtn"></button>
        <strong
          v-bind:class="{ textCompleted : todoItem.completed}"
        >{{ todoItem.item }}</strong>
        <button 
          class="fas fa-trash removeBtn"
          v-on:click="removeTodoItem({todoItem, index})"
          ></button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  props: {
    propsdata: Array
  },
  methods: {
    // ...mapMutations[{
    //   toggleCompleteItem: 'toggleCompleteAppItem',
    //   removeTodoItem: 'removeTodoAppItem'
    // }]
    toggleCompleteItem(todoItem, index) {
      this.$store.commit('toggleCompleteAppItem', {todoItem, index});
      // this.$emit('toggleCompleteAppItem', todoItem, index)
    },
    removeTodoItem(todoItem, index) {
      this.$store.commit('removeTodoAppItem', {todoItem, index});
      // this.$emit('removeTodoAppItem', todoItem, index);
    }
  },
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