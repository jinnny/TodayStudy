import bus from '../utils/bus';

export default {
  // 재사용할 컴포넌트 옵션
  created() {
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_LIST_ITEM', this.$route.name)
      .then(() => {
        bus.$emit('end:spinner')
      })
      // eslint-disable-next-line no-console
      .catch(e => console.log(e))
  }
}
