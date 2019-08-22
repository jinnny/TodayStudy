<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <button v-on:click="addTodo" class="addContainer">
      <i class="fas fa-plus addBtn"></i>
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newTodoItem: ''
    }
  },
  methods: {
    addTodo () {
      if(this.newTodoItem !== '') {
        let obj = { completed: false, item: this.newTodoItem };
        // newtodoitem 저장
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    clearInput () {
      // 초기화..
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
  }
  .addBtn {
    color: #ffffff;
    vertical-align: middle;
  }
</style>