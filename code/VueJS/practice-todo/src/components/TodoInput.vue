<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <button v-on:click="addTodo" class="addContainer">
            <i class="fa fa-plus addBtn"></i>
        </button>
    </div>
</template>

<script>
export default {
    neme: 'TodoInput',
    data () {
        return {
            newTodoItem : '',
        }
    },
    methods: {
        addTodo () {
            // console.log(this.newTodoItem);
            // localStorage 저장 (key, value)
            if (this.newTodoItem !== '') {
                // this.$emit('이벤트이름', 인자1,인자2...)
                this.$emit('addTodoItem', this.newTodoItem)
                this.clearInput();
            }
        },
        clearInput () {
            this.newTodoItem = '';
        },
    }
}
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    background: #ffffff;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478fb, #8763fb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
    height: 100%;
    border: none;
}
.addBtn {
    color: #ffffff;
    vertical-align: middle;
}
</style>
