<template>
  <footer class="clearAllContainer">
    <button 
      class="clearAllBtn"
      v-on:click="clearAllItem"
      >Clear All</button>
  </footer>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations({
      clearAllItem: 'clearAllAppItem'
    })
    // clearAllItem() {
    //   // this.$emit('clearAllTodo');

    //   // vuex mutaions 적용
    //   this.$store.commit('clearAllAppItem');
    // }
  }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  border: 0;
  background: none;
  color: red;
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>