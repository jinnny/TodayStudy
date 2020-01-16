<template>
  <header>
    <h1>Todo List</h1>
    <ol class="breadcrumb">
      <li><router-link to="/">All</router-link></li>
      <li><router-link to="/active">Active</router-link></li>
      <li class="active"><router-link to="/clear">Clear</router-link></li>
    </ol>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class HeaderMenu extends Vue {

}
</script>

<style scoped>

</style>
