<template>
  <div>
    <list-item/>
  </div>
</template>

<script>
import ListItem from '../components/ListItem';
import ListMixinPra from '../mixins/ListMixinPra';

export default {
  components: {
    ListItem
  },
  mixins: [ListMixinPra]
  // created() {
  //   bus.$emit('start:spinner');
  //   this.$store.dispatch('FETCH_LIST_ITEM', this.$route.name)
  //     .then(() => {
  //      bus.$emit('end:spinner')
  //     })
  //     .catch((error)=> {
  //       // eslint-disable-next-line no-console
  //       console.log(error)
  //     })
  // }
}
</script>

<style scoped>

</style>
