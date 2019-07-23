<!--
  - Created by Eunjin Yang on 19. 7. 23 오후 8:21
  - Github : http://github.com/jinny920311
  - Copyright (c) 2019. All rights reserved.
  -->

<template>
  <header>
    <h1>Header</h1>
    <!--{{ propsData }}-->
    <!--<button v-on:click="sendData">send</button>-->
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: [
    'propsData'
  ],
  methods: {
    login () {

    },
    sendData () {
    // emit(하위컴포넌트의 이벤트를 상위로 전달가능함)
      this.$emit('renew');
    }
  }
}
</script>

<style scoped>

</style>
