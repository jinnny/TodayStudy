<template>
  <user-info :user-info-item="userInfoItem">
    <strong slot="userName">Name: {{ userInfoItem.id }}</strong>
    <small slot="userJoin">Joined: {{ userInfoItem.created }}</small>
    <p slot="userKarma">Karma: {{ userInfoItem.karma }}</p>
  </user-info>
</template>

<script>
import UserInfo from '../components/UserInfo';
import { mapGetters } from 'vuex';
export default {
  name: 'User',
  components: {UserInfo},
  computed: {
    ...mapGetters([
      'userInfoItem'
    ])
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_USER_INFO', id)
  }
}
</script>

<style scoped>

</style>
