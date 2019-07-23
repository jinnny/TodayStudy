<!--
  - Created by Eunjin Yang on 19. 7. 23 오후 8:46
  - Github : http://github.com/jinny920311
  - Copyright (c) 2019. All rights reserved.
  -->

<template>
  <form action="" v-on:submit.prevent="submitForm">
    <p>
      <label for="useid">id: </label>
      <input type="text" id="useid" v-model="userid">
    </p>
    <p>
      <label for="userpw">password: </label>
      <input type="password" id="userpw" v-on:keyup.enter="submitForm" v-model="userpw">
    </p>
    <button>submit</button>
  </form>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "login",
    data () {
      return {
        userid: '',
        userpw: '',
      }
    },
    methods: {
      submitForm () {
        // event.preventDefault();
        console.log(this.userid, this.userpw);
        var url = 'https://jsonplaceholder.typicode.com/users';
        var data = {
          userid: this.userid,
          userpw: this.userpw
        };
        axios.post(url, data)
          .then(function (response) {
              console.log(response)
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>

<style scoped>

</style>
