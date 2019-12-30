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
// import bus from '../utils/bus.js'
import ListMixin from '../mixins/ListMixin';

export default {
  components: {
    ListItem
  },
  // mounted() {
  //   bus.$emit('end:spinner')
  // }
  mixins: [ListMixin]
  // created() {
  //   bus.$emit('start:spinner');
  //   setTimeout(() => {
  //     this.$store.dispatch('FETCH_ASK')
  //       .then(()=> {
  //         bus.$emit('end:spinner');
  //       })
  //       .catch((error) => {
  //         // eslint-disable-next-line no-console
  //         console.log(error)
  //       })
  //   },3000)
  // }
}
</script>

<style scoped>
</style>
