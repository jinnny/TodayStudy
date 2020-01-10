// import bus from '../utils/bus'
import ListView from './ListView';

export default function List(name) {
  return {
    name,
    created() {
      this.$store.dispatch('FETCH_LIST', this.$route.name)
    },
    render(createElement) {
      return createElement(ListView)
    }
  }
}
