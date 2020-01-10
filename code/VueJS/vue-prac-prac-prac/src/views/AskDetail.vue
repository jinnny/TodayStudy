<template>
  <article>
    <h1>{{ askItem.title }}</h1>
    <p><small>{{ writeTime }}</small> by {{ askItem.user }}</p>
    <div v-html="askItem.content"></div>
    {{ askItem }}

  </article>
</template>

<script>
  import { mapGetters } from 'vuex'
  import moment from 'moment'
  export default {
    name: 'AskDetail',
    computed: {
      ...mapGetters([
        'askItem'
      ]),
      writeTime() {
        return moment.unix(this.askItem.time).format('MMMM Do YYYY, h:mm:ss a');
      }
    },
    created () {
      const id = this.$route.params.id;
      this.$store.dispatch('FETCH_ITEM', id)
    },
  };
</script>

<style scoped>

</style>
