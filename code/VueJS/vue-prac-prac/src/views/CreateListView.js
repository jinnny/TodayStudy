import ListView from './ListView.vue';
import bus from '../utils/bus.js';

export default function createListView(name) {
  return {
   // 재사용할 인스턴스 옵션들
    name,
    created(){
      bus.$emit('start:spinner');
      setTimeout(() => {
        this.$store.dispatch('FETCH_LIST_ITEM', this.$route.name)
          .then(() => {
            bus.$emit('end:spinner')
          })
          // eslint-disable-next-line no-console
          .catch(e => console.log(e))

      },3000);
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}
