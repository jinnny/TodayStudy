<template>
  <div id="app">
    <tool-bar/>
    <transition name="page">
      <router-view/>
    </transition>
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
  a {
    text-decoration: none;
  }
  a:link,
  a:visited {
    color: #2f2f2f;
  }
  a:hover {
    color: #5aac44;
    text-decoration: underline;
  }
  .page-enter-active, .page-leave-active {
    transition: opacity .2s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
  }
</style>
