<template>
  <div>
    <!--<AppHeader v-bind:프롭스 속성이름="상위 컴포넌트의 데이터 이름"></AppHeader>-->
    <!--emit(하위컴포넌트의 이벤트를 상위로 전달가능함) emit 으로 받아오는 함수="실행될 함수"-->
    <AppHeader
      v-on:renew="renewString"
      v-bind:propsData="text"></AppHeader>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import LoginForm from './components/LoginForm.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    LoginForm
  },
  data () {
    return {
      text: 'woo',
    }
  },
  methods: {
    renewString () {
      this.text = 'ooh'
    }
  }
}
</script>

<style>
</style>
