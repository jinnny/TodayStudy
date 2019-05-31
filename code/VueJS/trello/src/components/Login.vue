<!--
  - Created by Eunjin Yang on 5/17/19 6:06 PM
  - Github : http://github.com/jinny920311
  - Copyright (c) 2019. All rights reserved.
  -->
<template>
  <div class="login">
    <h2>Log in to Trello</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="email">Email</label>
        <input class="form-control" type="text" name="email" id="email"
               v-model="email" autofocus placeholder="e.g., test@test.com" />
      </div>
      <div>
        <label for="password">Passwrod</label>
        <input class="form-control" type="password" id="password"
               v-model="password" placeholder="123123" />
      </div>
      <button  class="btn" :class="{'btn-success': !invalidForm}" type="submit"
               :disabled="invalidForm">Log In</button>
    </form>
    <p class="error">{{error}}</p>
  </div>
</template>

<script>
  import {auth, setAuthInHeader} from '../api'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
      rPath: ''
    }
  },
  computed: {
    invalidForm() {
      return !this.email || !this.password
    }
  },
  created() {
    this.rPath = this.$route.query.rPath || '/'
  },
  methods: {
    onSubmit() {
      auth.login(this.email, this.password)
        .then(data => {
          localStorage.setItem('token',data.accessToken)
          setAuthInHeader(data.accessToken)
          this.$router.push(this.rPath)
          console.log(data)
        })
        .catch(err => {
          //error undefined 출력됨
          this.error = err.data.error
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  .login {
    width: 400px;
    margin: 0 auto;
  }
  .error {
    color: #f00;
  }
</style>
