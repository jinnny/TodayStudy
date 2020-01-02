import bus from '../utils/bus';
import ListItemPrac from './ListItemPrac';

export default function createListViewPrac(name) {
  return {
    name: name,
    created() {
      bus.$emit('start:spinner');
      this.$store.dispatch('FETCH_LIST_LIST', this.$route.name)
        .then(() => {
          bus.$emit('end:spinner');
        })
        // eslint-disable-next-line no-console
        .catch(e => console.log(e))
    },
    render(createElement) {
      return createElement(ListItemPrac)
    },
  }
}
