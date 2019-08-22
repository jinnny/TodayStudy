<template>
  <header>
    appHeader
    <p>{{ propsdata }}</p>
    <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
  props: {
    propsdata: String
  },
  methods: {
    sendEvent: function() {
      this.$emit('renew')
    }
  }
}
</script>

<style>

</style>