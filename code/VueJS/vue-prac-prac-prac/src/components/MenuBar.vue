<template>
  <nav>
    <router-link to="/news">News</router-link>
    <router-link to="/ask">Ask</router-link>
    <router-link to="/jobs">Jobs</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'MenuBar'
  };
</script>

<style scoped>
  a {
    display: inline-block;
    margin: 10px 20px;
    color: #2f2f2f;
  }
  nav {
    background: #cccccc;
  }

</style>
