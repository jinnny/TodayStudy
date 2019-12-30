<template>
  <div id="app">
    <tool-bar/>
    <transition name="page">
      <router-view/>
    </transition>
    <spinner :loading="loadingStatus"/>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar';
import Spinner from './components/spinner';
import bus from './utils/bus.js'

export default {
  name: 'app',
  components: {
    Spinner,
    ToolBar
  },
  data() {
    return {
      loadingStatus: false
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner' ,this.startSpinner);
    bus.$off('end:spinner' ,this.endSpinner);
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
