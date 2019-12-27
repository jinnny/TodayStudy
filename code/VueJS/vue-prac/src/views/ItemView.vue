<template>
  <section>
    <h1>{{ fetchItem.title }}</h1>
    <user-profile :user-info="fetchItem">
      <router-link slot="name" :to="`/user/${fetchItem.user}`">{{ fetchItem.user }}</router-link>
      <small slot="time">{{ fetchItem.time_ago }}</small>

    </user-profile>
<!--    <p><small>{{ fetchItem.time_ago }}</small> by <router-link :to="`/user/${fetchItem.user}`">{{ fetchItem.user }}</router-link></p>-->
    <div v-html="fetchItem.content"></div>
    <article>
      <h2>Comments</h2>
      <ol>
        <li v-for="(comment, index) in fetchItem.comments" :key="comment+index" style="background: #f7f7f7; margin-bottom: 10px;">
          <p>
            <b>{{ comment.user }}</b> <small>{{ comment.time_ago }}</small>
          </p>
          <div v-html="comment.content"></div>
        </li>
      </ol>
    </article>
  </section>
</template>

<script>
import UserProfile from '../components/UserProfile';
import { mapGetters } from 'vuex';
export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters([
      'fetchItem'
    ])
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ASK_ITEM', id);
  }

}
</script>

<style scoped>

</style>
