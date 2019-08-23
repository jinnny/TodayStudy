<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <button v-on:click="addTodo" class="addContainer">
      <i class="fas fa-plus addBtn"></i>
    </button>
    <!-- use the modal component, pass in the prop -->
    <Modal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <!-- slot 은 component 마다 재정의해서 사용할 수 있음 -->
      <h3 slot="header">
        경고!
        <i class="fas fa-times cloaseModalBtn"
          @click="showModal = false"
        ></i>
      </h3>
      <p slot="body">
        내용을 입력해주세요.
      </p>
      <footer slot="footer">
        copyright
      </footer>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  data () {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  methods: {
    addTodo () {
      if(this.newTodoItem !== '') {
        // this.$emit('이벤트이름', 인자1,인자2,,)
        // this.$emit('addTodoItem', this.newTodoItem)
        this.$store.commit('addOneItem', this.newTodoItem)
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput () {
      // 초기화..
      this.newTodoItem = '';
    }
  },
  components: {
    Modal
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
  .cloaseModalBtn {
    color: #42b983;
    float: right;
    cursor: pointer;
  }
</style>