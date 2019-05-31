<!--
  - Created by Eunjin Yang on 5/17/19 6:16 PM
  - Github : http://github.com/jinny920311
  - Copyright (c) 2019. All rights reserved.
  -->

<template>
  <nav class="header">
    <div class="header-logo">
      <router-link to="/">Home</router-link>
    </div>
    <div class="header-auth">
      <button v-if="isAuth" @click="logout" class="header-btn">Logout</button>
      <router-link class="header-btn" v-else to="/login">Login</router-link>
      <!-- <a>Logout</a> -->
    </div>
  </nav>
</template>

<script>
import {setAuthInHeader} from "../api";

export default {
  computed: {
    isAuth() {
      return !!localStorage.getItem('token')
    }
  },
  methods: {
    logout() {
      delete localStorage.token
      setAuthInHeader(null)
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .header {
    flex: none;
    background-color: rgba(0,0,0,.15);
    height: 32px;
    padding: 4px;
  }
  .header a {
    display: block;
    height: 30px;
    line-height: 30px;
    text-decoration: none;
    color: black;
  }
  .header-logo {
    position: absolute;
    left: 50%;
    top: 7px;
    margin-left: -30px;
    text-align: center;
    font-weight: bolder;
    font-size: 24px;
  }
  .header-logo a:hover,
  .header-logo a:focus {
    color: rgba(255,255,255,.9);
  }
  .header-auth {
    position: absolute;
    right: 15px;
    top: 5px;
  }
  .header-auth .header-btn {
    border-radius: 2px;
    padding: 0 10px;
    background-color: rgba(255,255,255, .5);
    color: black;
    font-size: 14px;
    transition: all .3s;
    height: 30px;
    line-height: 30px;
    border: 0;
  }
  .header-auth .header-btn:hover,
  .header-auth .header-btn:focus {
    background-color: rgba(255,255,255, .3);
  }
</style>
