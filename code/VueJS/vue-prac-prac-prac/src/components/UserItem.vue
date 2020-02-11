<template>
  <div>
    <h2>{{ userItem.id }}</h2>
    <p>created: {{ userItem.created }}</p>
    <p>karma: {{ userItem.karma }}</p>
  </div>
</template>

<script>
  import { computed } from '@vue/composition-api'
  // import { mapGetters } from 'vuex';
  export default ({
    setup(props, { root }) {
      const id = root._route.params.id;
      root.$store.dispatch('FETCH_USER', id);
      // eslint-disable-next-line no-console
      const userItem = computed(() =>
      // ...mapGetters(['userItem'])
        root.$store.getters.userItem
      )
      // console.log(userItem)

      return {
        userItem
      }
    },


    // computed: {
    //   ...mapGetters([
    //     'userItem'
    //   ])
    // },
    // created () {
    //   const id = this.$route.params.id;
    //   this.$store.dispatch('FETCH_USER', id);
    //   // eslint-disable-next-line no-console
    //   console.log(id)
    // }
  });
</script>

<style scoped>
</style>
