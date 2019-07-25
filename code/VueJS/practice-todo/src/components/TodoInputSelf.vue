<template>
    <div class="inputBox shadow">
        <input type="text" v-model="todoInput" v-on:keyup.enter="addTodo">
        <button class="addContainer" v-on:click="addTodo">
            <i class="fa fa-plus addBtn"></i>
        </button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            todoInput: '',
        }
    },
    methods: {
        addTodo () {
            // key 값 value값 동일하게 넘김
            // localStorage.setItem(this.todoInput, this.todoInput);
            if (this.todoInput !== '') {
                var obj = {'complete': false, 'item': this.todoInput}
                // 아래대로만 하면 객체형태로 value값이 들어가서 데이터 확인불가
                // localStorage.setItem(this.todoInput, obj);
                localStorage.setItem(this.todoInput, JSON.stringify(obj));
            }
            this.clearInput();
        },
        clearInput () {
            this.todoInput = '';
        }
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
