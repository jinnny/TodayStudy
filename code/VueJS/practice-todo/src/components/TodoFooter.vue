<template>
    <footer class="clearAllContainer">
        <button class="clearAllBtn shadow" v-on:click="clearAllTodo">
            Clear All
        </button>
    </footer>
</template>

<script>
export default {
    methods: {
        clearAllTodo () {
            this.$emit('clearAll');
        }
    }
}
</script>

<style scoped>
.clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: #ffffff;
    border-radius: 5px;
    margin: 0 auto;
}
.clearAllBtn {
    background: none;
    border: none;
    color: #e20303;
    display: block;
    margin: 0 auto;
}
</style>
