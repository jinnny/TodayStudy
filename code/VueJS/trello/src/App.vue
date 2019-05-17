<template>
  <div id="app">
    <h1>VueJs로 트렐로 만들기</h1>
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
</style>
