<template>
  <article>
    <input type="text" v-model="message"/>
    <p>{{ message }}</p>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Mes extends Vue {
  mes: string = '메세지를 입력해주세요';
}
</script>

<style scoped>

</style>
