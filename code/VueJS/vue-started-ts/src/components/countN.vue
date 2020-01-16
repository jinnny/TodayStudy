<template>
  <div>
<!--    {{ this.$store.getters.countNum }}<br>-->
<!--    {{ $store.state }}-->
    {{ countNum }}
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class Count extends Vue{
  created() {
    this.$store.dispatch('moduleA/setRootData', 'test')
  }
  @Getter readonly countNum!: number;
}
</script>

<style scoped>

</style>
