<template>
  <div>
    <h1>News</h1>
    <div v-for="(item, index) in this.$store.state.news" :key="item+index">
      <a :href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link></small>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('FETCH_NEWS');
        // .then(response => this.users = response.data)
        // // eslint-disable-next-line no-console
        // .catch(error => console.log(error))
    }
  }
</script>

<style scoped>

</style>
