<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item">
                <button class="checkBtn" 
                v-on:click="completeTodo(todoItem, index)" 
                v-bind:class="{checkBtnCompleted: todoItem.complete}">
                    <i class="fa fa-check"></i>
                </button>
                <strong v-bind:class="{textCompleted : todoItem.complete}">{{ todoItem.item }}</strong>
                <button class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                    <i class="fa fa-trash-alt"></i>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            todoItems: []
        }
    },
    methods: {
        getItems () {
            // localStorage 가 있을 때
            if (localStorage.length > 0) {
                for ( var i = 0; i < localStorage.length; i ++) {
                    if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                        localStorage.getItem(localStorage.key(i));
                        // console.log(localStorage.key(i));
                        // todoItems에 localstorage값 밀어넣기
                        // this.todoItems.push(localStorage.key(i));

                        // string으로 값이 출력되기 때문에 객체로 변환해줘야함.
                        // parse 뒤에 localStorage.getItem를해줘야 해당 키에 따른 value값을 가져오는것임
                        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    }
                }
            }
        },
        removeTodo (todoItem, index) {
            localStorage.removeItem(todoItem);
            // 화면에 표시될 list에서도 위에서 제거된 부분 잘라서 배열에 재할당
            this.todoItems.splice(index, 1);
            console.log(this.todoItems);
        },
        completeTodo (todoItem, index) {
            todoItem.complete = ! todoItem.complete;
            localStorage.removeItem(todoItem);
            console.log(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        }
    },
    created () {
        this.getItems();
    }        
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
