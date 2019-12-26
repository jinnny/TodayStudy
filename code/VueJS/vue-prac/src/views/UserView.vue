<template>
  <div>
    <h1>{{ fetchUser.id }} </h1>
    <p>karma: {{ fetchUser.karma }}</p>
    <p>created: {{ fetchUser.created }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'fetchUser'
    ])
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER_INFO', userName);
  }
}
</script>

<style scoped>

</style>
