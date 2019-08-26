<template>
  <div class="inputBox">
    <input class="shadow" type="text" 
      v-model="newTodoItem"
      v-on:keypress.enter="addTodoItem"
      >
    <button class="addContainer" v-on:click="addTodoItem()">
      <div class="fas fa-plus addBtn"></div>
    </button>
    <Modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
      <h3 slot="header">경고!
        <button class="fas fa-times closeModalBtn"
          v-on:click="closeModalBtn"
        ></button>
      </h3>
      <p slot="body">내용을 입력하세요.</p>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal';

export default {
  data () {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  components: {
    Modal
  },
  methods: {
    addTodoItem() {
      if(this.newTodoItem !== '') {
        this.$store.commit('addTodo', this.newTodoItem)
        // this.$emit('addTodo', this.newTodoItem)
        this.clearInputItem();
      }else {
        this.showModal = true;
      }
    },
    clearInputItem() {
      this.newTodoItem = ''
    },
    closeModalBtn() {
      this.showModal = !this.showModal
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
  .closeModalBtn {
    color: #42b983;
    float: right;
    cursor: pointer;
  }
</style>