<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <message/>
    <hr/>

    <children :parentMessage="msg" @counter="counter"/>
    <p>
      부모에서 숫자를 보여줍니다. : {{ count }}
    </p>
    <button @click="changeMsg">메세지를 바꿔줄게요.</button>
    <hr/>
    <count-n/>
    <button @click="increase">증가</button>
    <button @click="decrease">감소</button>
  </div>

</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import message from '@/components/message.vue';
import children from '@/components/children.vue';
import countN from '@/components/countN.vue';

@Component({
  components: {
    message,
    children,
    countN
  },
})
export default class Home extends Vue {
  public msg: string = 'hello world22';
  count:number = 0;

  counter() {
    this.count ++;
  }
  changeMsg() {
    this.msg = 'change';
  }

  increase() {
    this.$store.dispatch('increase');
  }
  decrease() {
    this.$store.dispatch('decrease');
  }

  @Provide('mess') ms: string = 'provide/inject example';
}
</script>
