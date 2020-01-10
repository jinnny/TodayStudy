export default  {
  created() {
    this.$store.dispatch('FETCH_LIST', this.$route.name)
      .then(()=> {})
      .catch(e => {
        // eslint-disable-next-line no-console
        console.log(e)
      })
  }
}
