<template>
  <div id="app">
    <header-menu/>
    <item-input/>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  padding: 100px;
}

</style>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import HeaderMenu from './components/HeaderMenu.vue';
import ItemInput from '@/components/ItemInput.vue';
import ItemView from '@/components/ItemView.vue';

@Component({
    components: { HeaderMenu, ItemInput, ItemView },
  })
  export default class App extends Vue {
  }
</script>
