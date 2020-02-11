<template>
  <div id="app">
    <menu-bar />
    <router-view/>
  </div>
</template>

<script>
// import { provideStore } from './composables/use-store';
// import { useStore } from './composables/use-store';

import MenuBar from './components/MenuBar';
export default {
  // setup(props, {root: {$store}}) {
  //   provideStore($store)
  // },
  // setup() {
  //   const store = useStore();
  // }
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
