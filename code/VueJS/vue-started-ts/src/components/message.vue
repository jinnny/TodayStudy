<template>
    <div>
        <input type="text" v-model="message">
        <p>{{ message }}</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Message extends Vue {
  public message: string = '메세지를 입력해주세요.';
}
</script>

<style scoped>

</style>