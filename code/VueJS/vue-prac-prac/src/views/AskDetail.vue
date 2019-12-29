<!--
  - Created by Eunjin Yang on 19. 12. 29 오후 2:18
  - Github : http://github.com/jinny920311
  - Copyright (c) 2019. All rights reserved.
  -->

<template>
  <div>
    {{ askItem }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "AskDetail",
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
