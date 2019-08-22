<template>
  <div class="inputBox shadow">
    <input type="text" 
      v-model="newTodoItem"
      v-bind:keyup:enter="addTodoItem"
      >
    <button class="addContainer" v-on:click="addTodoItem">
      <i class="fas fa-plus addBtn"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addTodoItem() {
      const obj = { completed: false, item: this.newTodoItem};
      localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
      this.clearInput();
    },
    clearInput() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped lang="scss">
  input:focus {
    outline: none;
  }
  .inputBox {
    background: #fff;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    input {
      border-style: none;
      font-size: 0.9rem;
    }
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763fb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
    border: 0;
    height: 100%;
    cursor: pointer;
  }
  .addBtn {
    color: #ffffff;
    vertical-align: middle;
  }
</style>