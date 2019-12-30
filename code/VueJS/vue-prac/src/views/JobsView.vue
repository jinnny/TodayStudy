<template>
  <list-item/>
<!--  <div>-->
<!--    <h1>Jobs</h1>-->
<!--    <ul class="news-list">-->
<!--      <li class="post" v-for="(job, index) in this.$store.state.jobs" :key="job+index">-->
<!--        <mark class="points">{{ job.points || 0 }}</mark>-->
<!--        <div>-->
<!--          <h2 class="news-post__title">-->
<!--            <a :href="job.url">-->
<!--              {{ job.title }}-->
<!--            </a>-->
<!--          </h2>-->
<!--          <small class="news-user__info">{{ job.time_ago }} by <a :href="job.url">{{ job.domain || 'untitled' }}</a></small>-->
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
  //   setTimeout(()=> {
  //     this.$store.dispatch('FETCH_JOBS')
  //       .then(()=> {
  //         bus.$emit('end:spinner')
  //       })
  //       .catch((error) => {
  //         // eslint-disable-next-line no-console
  //         console.log(error);
  //       })
  //   },3000)
  // }
}
</script>

<style scoped>
  .news-list {
    margin: 0;
    padding: 0;
  }
  .post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    color: #5aac44;
  }
  .news-post__title {
    font-size: 1.2rem;
    margin: 0;
  }
  .news-user__info {
    color: #888888;
  }
</style>
