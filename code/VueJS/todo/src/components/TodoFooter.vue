<template>
  <footer class="clearAllContainer shadow">
    <button 
      class="clearAllBtn"
      v-on:click="clearTodo"
      >Clear All</button>
  </footer>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      // this.$emit('clearAllItems')
      this.$store.commit('removeAllItem')
    }
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
}
</style>