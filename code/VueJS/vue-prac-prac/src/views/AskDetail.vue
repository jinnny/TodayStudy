<!--
  - Created by Eunjin Yang on 19. 12. 29 오후 2:18
  - Github : http://github.com/jinny920311
  - Copyright (c) 2019. All rights reserved.
  -->

<template>
  <article>
    <h1>{{ askItem.title }}</h1>
    <div>
      <user-info :user-info-item="askItem">
      <router-link :to="`/user/${askItem.user}`" slot="userName">{{ askItem.user }}</router-link>
      <small slot="UserJoin">{{ askItem.time_ago }}</small>
      </user-info>
    </div>
    <div v-html="askItem.content"></div>
    <ul>
      <li v-for="(comment, index) in askItem.comments" :key="comment+index">
        <div v-html="comment.content"></div>
        <ul v-if="comment.comments">
          <li v-for="(comm, index) in comment.comments" :key="comm + index">
            <p><b>{{ comm.user }}</b> <small>{{ comm.time_ago }}</small></p>
            <div v-html="comm.content"></div>
          </li>
        </ul>
      </li>
    </ul>
  </article>
</template>

<script>
import UserInfo from '../components/UserInfo';
import { mapGetters } from 'vuex';
export default {
  components: {
    UserInfo
  },
  computed: {
    ...mapGetters([
      'askItem'
    ])
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ASK_DETAIL', id);
  }
}
</script>

<style scoped>

</style>
