<template>
  <div>
    <p> {{ alertMsg }}</p>
      {{ parentMessage }}
    <div><button @click="counter">자식에서 숫자를 증가시킵니다.</button></div>
    <hr/>
    <div>{{ mess }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit, Inject } from 'vue-property-decorator';

@Component
export default class Children extends Vue {
    @Prop() public parentMessage?: string;
    alertMsg: string = '';

    @Watch('parentMessage')
    update(value:string, oldValue:string) {
        this.alertMsg = '메세지를 업데이트 했습니다.'
    }

    @Emit()
    counter() {
        console.log('text');
    }

    @Inject() readonly mess!: string;
}
</script>

<style scoped>

</style>
