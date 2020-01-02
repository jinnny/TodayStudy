<template>
  <ul>
    <li v-for="(item, index) in listItems" :key="item+index">
      <template v-if="item.points">
        <mark>{{ item.points || 0 }}</mark>
      </template>
      <template v-if="item.type === 'ask'">
        <router-link :to="`/ask/${item.id}`">{{ item.title }}</router-link>
      </template>
      <template v-else>
        <a :href="item.url">{{ item.title }}</a>
      </template>
      <small>{{ item.time_ago }}</small> by
      <router-link :to="`/user/${item.user}`" v-if="item.user">{{ item.user }}</router-link>
      <a :href="item.url" v-else>{{ item.domain }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    listItems() {
      return this.$store.state.item
    }
  }
}
</script>

<style scoped>

</style>
