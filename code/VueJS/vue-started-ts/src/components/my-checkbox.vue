<template>
  <div>
    <input type="checkbox" :checked="checked" @change="change">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model, Emit} from 'vue-property-decorator';

@Component
export default class MyCheckbox extends Vue{
    @Model('change', {type: Boolean}) readonly checked!: boolean;

    @Emit()
    change (event: Event) {
        return (event.target as HTMLInputElement).checked;
    }
}
</script>

<style scoped>

</style>
