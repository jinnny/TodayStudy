<template>
  <div class="input-group">
      <span class="input-group-addon">
        <input type="checkbox" aria-label="..." @change="changeStatus" :checked="status === 'clear'">
      </span>
    <input type="text" class="form-control" aria-label="..." :value="title">
    <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="removeItem">X</button>
      </span>
  </div><!-- /input-group -->
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ItemView extends Vue {
  @Prop() readonly id!: string;
  @Prop() readonly status!: string;
  @Prop() readonly title?: 'active' | 'clear';

  changeStatus($event: Event) {
    const checked: boolean = ($event.target as HTMLInputElement).checked;
    if (checked) {
      this.$store.commit('changeStatus', {id: this.id, status: 'clear'});
    } else {
      this.$store.commit('changeStatus', {id: this.id, status: 'active'});
    }
  }

  removeItem() {
    this.$store.commit('removeItem', this.id);
  }
}
</script>

<style scoped>

</style>
