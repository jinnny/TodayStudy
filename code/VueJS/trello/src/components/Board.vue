<!--
  - Created by Eunjin Yang on 19. 5. 20 오후 4:18
  - Github : http://github.com/jinny920311
  - Copyright (c) 2019. All rights reserved.
  -->

<template>
  <div>
    <h1>board</h1>
    <div v-if="loading"> Loading board...</div>
    <div v-else>
      <p>bid : {{bid}}</p>
      <router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
      <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
      <hr>
    </div>
  <router-view></router-view>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          bid: 0,
          loading: false
        }
      },
      created() {
        this.fetchData()
      },
      methods: {
        fetchData() {
          this.loading = true
          //5초뒤 bid 업데이트, 데이터 출력
          setTimeout(() => {
            this.bid= this.$route.params.bid
            this.loading = false
          }, 500)
        }
      }
    }
</script>

<style scoped>

</style>
