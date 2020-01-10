<template>
  <div id="app">
    <menu-bar />
    <router-view/>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar';
export default {
  name: 'app',
  components: {
    MenuBar
  }
}
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
  }
  a {
    color: #42b883;
  }
</style>
