<template>
  <div id="app" class="app">
    <Header v-if="$route.meta.plainLayout"/>
    <router-view/>
    <Footer v-if="$route.meta.plainLayout"/>
  </div>
</template>

<script>
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
  @import "assets/style/base/_fonts";
  @import "assets/style/base/_reset";

  @import "assets/style/layout/_common";
  .app {
    width: 100%;
    height: 100%;
  }
</style>
