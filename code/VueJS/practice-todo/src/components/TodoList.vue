<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
                <button class="checkBtn" 
                        v-on:click="toggleComplete(todoItem, index)" 
                        v-bind:class="{checkBtnCompleted: todoItem.completed}">
                    <i class="fa fa-check"></i>
                </button>
                <strong v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</strong>
                <button class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                    <i class="fa fa-trash-alt "></i>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: [
        'propsdata'
    ],
    methods: {
        removeTodo (todoItem, index) {
            // console.log(todoItem, index);
            this.$emit('removeItem', todoItem, index);
        },
        toggleComplete (todoItem, index) {
           this.$emit('toggleItem', todoItem, index);
        },
    },
    // computed: {
    //     textComple () {
    //         // this.todoItem.completed가 true 일때 'textCompletd' false면 공백 리턴
    //         return this.todoItem.completed ? 'textCompletd': '';
    //     }
    // }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: #ffffff;
    border-radius: 5px;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
    background: none;
    border: none;
}
.checkBtnCompleted {
    color: #b3adad;
}
.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
    background: none;
    border: none;
}
</style>
