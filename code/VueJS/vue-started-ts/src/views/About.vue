<template>
  <div class="about">
    <h1>약관</h1>
    <p>약관내용</p>
    <my-checkbox v-model="checked" @change="change"/>
    {{ text }}
  </div>
</template>
<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import MyCheckbox from '../components/my-checkbox.vue';
  @Component({
      components: {MyCheckbox}
  })
  export default class About extends Vue {
    checked: boolean = false;
    text: string = '동의하지 않씁니다.'

      change(checked: boolean) {
        this.checked = checked;
        this.text = checked ? '동의합니다': '동의하지 않씁니다.'
      }
  }
</script>
