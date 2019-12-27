<template>
  <div>
    <ul class="news-list">
      <li class="post" v-for="(item, index) in listItems" :key="item+index">
        <mark class="points">{{ item.points || 0 }}</mark>
        <div>
          <h2 class="news-post__title">
            <template v-if="item.domain">
              <a :href="item.url">{{ item.title }}</a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
            </template>
          </h2>
          <small class="news-user__info">{{ item.time_ago }} by
            <router-link v-if="item.user" :to="`/user/${item.user}`">{{ item.user }}</router-link>
            <a v-else :href="item.url">{{ item.domain || 'Undifined' }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    const name = this.$route.name;
    let actionName = 'FETCH_ASK';
    if(name === 'news') {
      actionName = 'FETCH_NEWS';
    }else if (name === 'jobs') {
      actionName = 'FETCH_JOBS';
    }else {
      actionName = 'FETCH_ASK';
    }
    this.$store.dispatch(actionName);
  },
  computed: {
    listItems() {
      const name = this.$route.name;
      if(name === 'news') {
        return this.$store.state.news;
      }else if (name === 'jobs') {
        return this.$store.state.jobs;
      }else {
        return this.$store.state.ask;
      }
    }
  }
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
