<template>
  <list-item/>
</template>

<script>
  import ListItem from '../components/ListItem';
  // import bus from '../utils/bus.js';
  import ListMixin from '../mixins/ListMixin';

  export default {
    components: {
      ListItem
    },
    mixins: [ListMixin]
    // created() {
    //   bus.$emit('start:spinner');
    //   // bus.$emit('end:spinner');
    //   setTimeout(()=> {
    //     this.$store.dispatch('FETCH_NEWS')
    //       .then(() => {
    //         bus.$emit('end:spinner')
    //       })
    //       .catch(error => {
    //         // eslint-disable-next-line no-console
    //         console.log(error)
    //       })
    //   },3000)
    // }
  }
</script>

<style scoped>
</style>
