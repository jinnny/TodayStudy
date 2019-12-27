<template>
  <header>
    <nav>
      <router-link to="/news">news</router-link>
      <router-link to="/ask">ask</router-link>
      <router-link to="/jobs">jobs</router-link>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  header {
    background: #42b983;
  }
  a {
    margin: 0 20px;
    font-size: 1.3rem;
    color: white;
    padding: 10px 0;
    display: inline-block;
  }
</style>
