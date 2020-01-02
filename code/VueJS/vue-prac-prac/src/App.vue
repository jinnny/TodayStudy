<template>
  <div id="app">
    <Header/>
    <router-view/>
    <spinner :loading="isLoadingCondition"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Spinner from './components/Spinner';
import bus from './utils/bus';

export default {
  name: 'app',
  components: {
    Spinner,
    Header
  },
  data() {
    return {
      isLoadingCondition: true
    }
  },
  methods: {
    startSpinner() {
      this.isLoadingCondition = true;
    },
    endSpinner() {
      this.isLoadingCondition = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
  html,
  body {
    padding: 0;
    margin: 0;
  }
</style>
