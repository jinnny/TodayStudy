<template>
  <div>
    <item-view v-for="(list, index) in renderList" :key="list.title+index" :id="list.id" :status="list.status" :title="list.title"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import ItemView from '../components/ItemView.vue';
import {mapGetters} from 'vuex';

@Component({
  components: {ItemView},
  computed: {
    ...mapGetters([
      'allTodoList',
      'activeTodoList',
      'clearTodoList',
    ]),
  },
})
export default class ItemList extends Vue {
  renderList: any[] = [];
  private clearTodoList!: any[];
  private allTodoList!: any[];
  private activeTodoList!: any[];

  created() {
    this.$store.dispatch('initData');
  }

  initRenderList(status: string) {
    if (!status) {
      this.renderList = this.allTodoList;
    } else if (status === 'active') {
      this.renderList = this.activeTodoList;
    } else if (status === 'clear') {
      this.renderList = this.clearTodoList;
    }
  }

  @Watch('$route.params.status')
  routeUpdate(newValue: string) {
   this.initRenderList(newValue);
  }

  @Watch('$store.state.todoList', {deep: true})
  todoUpdate() {
    this.initRenderList(this.$route.params.status);
  }
}
</script>

<style scoped>

</style>
