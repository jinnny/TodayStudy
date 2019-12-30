import ListView from './ListView';
import bus from '../utils/bus.js'

export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name: name,
    created() {
      bus.$emit('start:spinner');
      this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          bus.$emit('end:spinner')
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}
