<template>
  <div>
    <h1>Jobs</h1>
    <ul>
      <li v-for="(job, index) in this.$store.state.jobs" :key="job+index">
        <a :href="job.url">
          {{ job.title }}
        </a>
        <small>{{ job.time_ago }} by <b>{{ job.domain }}</b></small>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
    //
    // .then(response => this.jobs = response.data)
    //   // eslint-disable-next-line no-console
    //   .catch(error => console.log(error))
  }
}
</script>

<style scoped>

</style>
