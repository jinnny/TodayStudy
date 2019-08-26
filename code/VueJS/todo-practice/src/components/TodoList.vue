<template>
  <div>
    <transition-group name="list" tag="ul">
      <li class="shadow" 
        v-for="(todoItem, index) in this.storedTodoItems" 
        v-bind:key="todoItem.item">
          <i class="fas fa-check checkBtn"
          v-bind:class="{ checkBtnCompleted : todoItem.completed }"
          v-on:click="toggleCompletedItem({todoItem, index})"></i>
          <strong 
            v-bind:class="{ textCompleted : todoItem.completed }"
            >{{ todoItem.item }}</strong>
          <i 
            class="fas fa-trash removeBtn"
            v-on:click="removeOneItem({todoItem, index})"
            ></i>
        </li>
      </transition-group>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations({
        removeOneItem: 'removeAppItem',
        toggleCompletedItem:  'toggleCheckAppItem'
      })
    // removeOneItem(todoItem, index) {
    //    // this.$emit('이벤트이름', 인자1,인자2,,)
    //   //  this.$store.commit('이벤트이름', {인자1, 인자2})
    //   // this.$emit('removeTodoItem', todoItem, index);

    //   // vuex mutations 적용
    //   this.$store.commit('removeAppItem', {todoItem, index})
    // },
    // toggleCompletedItem(todoItem, index) {
    //   // this.$emit('toggleCompletedTodoItem', todoItem, index);

    //   // vuex mutations 적용
    //   this.$store.commit('toggleCheckAppItem', {todoItem, index})
    // }
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems
    // }
    ...mapGetters(['storedTodoItems']),
    // getters의 이름과 실제로 사용하는 이름이 다를때 객체화
    // ...mapGetters({
    //   todoItems: 'storedTodoItems'
    // })
    // ...mapState(['todoItems'])
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
    line-height: 50px;
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