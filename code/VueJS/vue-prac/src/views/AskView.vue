<template>
  <div>
    <h1>ask</h1>
    <ul>
      <li v-for="(item, index) in fetchedAsk" :key="item + index">
        <router-link :to="`/item/${item.id}`" :href="item.url">{{ item.title }}</router-link>
        <small>{{ item.time_ago }} by <b>{{ item.user }}</b></small>
      </li>
    </ul>
  </div>
</template>

<script>
import {  mapGetters } from 'vuex';
export default {
  computed: {
    // ...mapState({
    //   ask: state => state.ask
    // })
    ...mapGetters([
      'fetchedAsk'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
      // .then(response => this.ask = response.data)
      // // eslint-disable-next-line no-console
      // .catch(error => console.log(error))
  }
}
</script>

<style scoped>

</style>
