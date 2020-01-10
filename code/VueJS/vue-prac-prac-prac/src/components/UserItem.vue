<template>
  <div>
    <h2>{{ userItem.id }}</h2>
    <p>created: {{ userItem.created }}</p>
    <p>karma: {{ userItem.karma }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'UserItem',
    computed: {
      ...mapGetters([
        'userItem'
      ])
    },
    created () {
      const id = this.$route.params.id;
      this.$store.dispatch('FETCH_USER', id);
      // eslint-disable-next-line no-console
      console.log(id)
    }
  };
</script>

<style scoped>
</style>
