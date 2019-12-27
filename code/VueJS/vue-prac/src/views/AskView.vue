<template>
  <list-item/>
<!--  <div>-->
<!--    <h1>ask</h1>-->
<!--    <ul class="news-list">-->
<!--      <li class="post" v-for="(item, index) in fetchedAsk" :key="item + index">-->
<!--        <mark class="points">{{item.points}}</mark>-->
<!--        <div>-->
<!--          <h2 class="news-post__title">-->
<!--            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>-->
<!--          </h2>-->
<!--          <small class="news-user__info">{{ item.time_ago }} by  <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link></small>-->
<!--        </div>-->
<!--      </li>-->
<!--    </ul>-->
<!--  </div>-->
</template>

<script>
import ListItem from '../components/ListItem';
export default {
  components: {
    ListItem
  }
}
</script>

<style scoped>
</style>
