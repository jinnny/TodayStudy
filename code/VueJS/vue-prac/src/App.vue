<template>
  <div id="app">
    <tool-bar/>
    <router-view/>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar';

export default {
  name: 'app',
  components: {
    ToolBar
  }
}
</script>

<style>
</style>
