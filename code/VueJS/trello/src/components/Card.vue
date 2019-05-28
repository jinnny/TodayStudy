<!--
  - Created by Eunjin Yang on 19. 5. 20 오후 4:29
  - Github : http://github.com/jinny920311
  - Copyright (c) 2019. All rights reserved.
  -->

<template>
  <div>
    Card
    <div v-if="loading">loading Card...</div>
    <div v-else>{{cid}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cid: 0,
      loading: false
    }
  },
  watch: {
    // '$route'() {
    // //처음 만들어졌을때만 cid값이 업데이트 되기 때문에 라우터를 watch해서 라우터가 변경될 때 cid값도 업데이트
    //   // this.cid = this.$route.params.cid
    //
    //   //cid 변경할 때마다 해당 데이터 호출
    //   this.fetchData()
    // },

    //OR 객체 설정으로도 가능
    '$route': {
      handler: 'fetchData',
      immediate: true
    //즉시실행(아래 created가 불필요함)
    }
  },

  //생성될때 route에 cid값 업데이트
  // created() {
  //   this.fetchData()
  // },
  methods: {
    fetchData() {
      this.loading = true
      setTimeout(() => {
        this.cid = this.$route.params.cid
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
