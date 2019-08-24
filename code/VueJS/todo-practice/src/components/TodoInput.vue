<template>
  <div class="inputBox">
    <input type="text" 
      class="shadow" v-model="newTodoItem"
      v-on:keyup.enter="addTodoItem">
    <button class="addContainer"
      v-on:click="addTodoItem">
      <div class="fas fa-plus addBtn"></div>
    </button>
      <modal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">
        경고!
        <i class="fas fa-times cloaseModalBtn"
        v-on:click="closeModalBtn"></i>
      </h3>
      <p slot="body">
        내용을 입력하세요.  
      </p> 
    </modal>
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
        this.$emit('addOneItem', this.newTodoItem);
        this.clearTodoItem();
      }else {
        this.showModal = !this.showModal
      }
    },
    clearTodoItem() {
      this.newTodoItem = '';
    },
    closeModalBtn() {
      this.showModal = false;
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
  .cloaseModalBtn {
    color: #42b983;
    float: right;
    cursor: pointer;
  }
</style>