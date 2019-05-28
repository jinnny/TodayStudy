<!--
  - Created by Eunjin Yang on 5/17/19 6:06 PM
  - Github : http://github.com/jinny920311
  - Copyright (c) 2019. All rights reserved.
  -->
<template>
  <div>
    home
    <nav>
      Board List
      <div v-if="loading">loading..</div>
      <div v-else>
        api {{apiRes}}
      </div>
      <div v-if="error">{{error}}</div>
      <ul>
        <li>
          <router-link to="/b/1">board 1</router-link>
        </li>
        <li>
          <router-link to="/b/2">board 2</router-link>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        loading: false,
        apiRes: '',
        error: ''
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.loading = true
        //axios lib를 이용한 방식
        axios.get('http://localhost:3000/health1')
          .then(res => {
            this.apiRes = res.data
          })
          .catch(res => {
            this.error = res.response.data
          })
          .finally(()=>{
            this.loading = false
          })

        // XMLHttpRequest를 이용한 방식
        // const req = new XMLHttpRequest()
        //
        // req.open('GET', 'http://localhost:3000/health')
        //
        // req.send()
        //
        // req.addEventListener('load', () => {
        //   this.loading = false
        //   this.apiRes = {
        //     status: req.status,
        //     statusText: req.statusText,
        //     response: JSON.parse(req.response)
        //   }
        // })
      }
    }
  }
</script>

<style scoped>

</style>
