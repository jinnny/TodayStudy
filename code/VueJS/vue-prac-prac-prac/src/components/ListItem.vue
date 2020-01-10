<template>
  <ul>
    <li v-for="(item, index) in listItem" :key="item+index">
      <mark>{{ item.points || '0' }}</mark>
      <template v-if="item.domain">
        <a :href="item.url">{{ item.title }}</a>
      </template>
      <template v-else>
        <router-link :to="`/askDetail/${item.id}`">{{ item.title }}</router-link>
      </template>
        <p>{{ item.time_ago }} by
          <router-link v-if="item.user" :to="`/user/${item.user}`">{{ item.user }}</router-link>
          <a v-else :href="item.url">{{ item.domain }}</a>
        </p>
      </li>
  </ul>
</template>

<script>
export default {
  computed:  {
    listItem() {
      return this.$store.state.list
    }
  }
};
</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    border-bottom: 1px solid #dddddd;
    padding: 6px;
  }
  p {
    margin: 0;
  }
  mark {
    background-color: #42b883;
    color: #ffffff;
  }
</style>
