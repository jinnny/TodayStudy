<template>
  <div>
    <!-- <AppHeader v-bind:하위컴포넌트의프롭스속성이름="상위컴포넌트의 데이터이름" v-on:하위컴포넌트의이벤트이름="상위컴포넌트의 이벤트 이름"/> -->
    <AppHeader 
      v-bind:propsdata="msg" 
      v-on:renew="renewString"
    />

    <form v-on:submit.prevent="submitForm">
      <div>
        <label for="username">id:</label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label for="password">pw:</label>
        <input type="password" id="password" v-model="userpw">
      </div>
      <button  v-on:keypress.enter="submitForm">login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader
  },
  data() {
    return {
      msg: 'haa',
      username: '',
      userpw: ''
    }
  },
  methods: {
    renewString: function() {
      this.msg = 'wow';
    },
    submitForm: function(e) {
      // e.preventDefault();
      console.log(this.username, this.userpw);
      const url = 'https://jsonplaceholder.typicode.com/users';
      const data = {
        username: this.username,
        password: this.userpw
      }
      axios.post(url, data)
        .then(response => {
          console.log(response);
        })
        .catch(error=> {
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>