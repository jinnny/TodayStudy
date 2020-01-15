<template>
  <div>
<!--    {{ this.$store.getters.countNum }}<br>-->
    {{ $store.state }}
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class Count extends Vue{
  created() {
    console.log(this.$store)
    this.$store.dispatch('moduleA/setRootData', 'test')
  }
}
</script>

<style scoped>

</style>
