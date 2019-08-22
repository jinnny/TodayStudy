<template>
  <div>
    <ul>
      <li class="shadow" 
        v-for="(todoItem, index) in todoItems" 
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
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoItems: []
    }
  },
  created() {
    if(localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i ++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          // this.todoItems.push(localStorage.key(i));
        }
      }
    }
  },
  methods: {
    removeTodo (todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleComplete (todoItem, index) {
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
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

</style>