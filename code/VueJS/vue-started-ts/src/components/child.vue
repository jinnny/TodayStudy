<template>
  {{ parentM }}
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component
  export default class ChildComponent extends Vue {
      @Prop() parentM?:string;
  }
</script>

<style scoped>

</style>
