<template>
  <div class="form-group">
    <input type="text" v-model="title" class="form-control" placeholder="할일을 입력해주세요." @keyup.enter="addItem">
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState(['todoList']),
  },
})
export default class ItemInput extends Vue {
  title: string = '';
  todoList!: any[];

  addItem() {
    this.$store.commit('addItem', {
      id: this.todoList.length + 1,
      title: this.title,
      status: 'active',
    });
  }
}
</script>

<style scoped>

</style>
