<template>
  <list-item/>
</template>

<script>
import ListItem from '../components/ListItem';
import ListMixinPra from '../mixins/ListMixinPra';

export default {
  components: {
    ListItem
  },
  mixins: [ListMixinPra]
}
</script>

<style scoped>

</style>
