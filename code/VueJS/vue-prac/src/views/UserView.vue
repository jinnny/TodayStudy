<template>
  <user-profile :user-info="fetchUser">
    <template slot="name">{{ fetchUser.id }}</template>
    <template slot="time">time : {{ fetchUser.created }}</template>
    <template slot="karma">karma : {{ fetchUser.karma }}</template>
  </user-profile>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile';
export default {
  components: {
    UserProfile
  },
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
