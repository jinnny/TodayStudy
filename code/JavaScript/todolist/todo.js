const  form = document.getElementsByClassName('js-todolist-form')[0];
const  todoList = document.getElementsByClassName('js-todolist__list')[0];
const  todoInput = document.getElementsByClassName('js-todolist__input')[0];
let  dataList = [];

//check한 ==
function remove() {
   let li = this.parentNode;
   // console.log(li);
   li.remove();
   let currentClass = this.className;
   console.log(currentClass);
    for (let i = 0; i <= dataList.length; i ++) {
        let data = 'js-check-btn' + dataList.indexOf(dataList[i]);
        console.log(i);
        if(data === currentClass) {
            dataList.splice(i, 1);
            localStorage.setItem('todo', JSON.stringify(dataList));
        }
    }
}

//input에 입력한 값을 전달
function register(event) {
    event.preventDefault();
    //input
    const input = todoInput.value;
    save(input);
    write();
    todoInput.value = '';
}

//input에 입력받은 값을 추가하고 저장함
function save(input) {
    dataList.push(input);
    localStorage.setItem('todo', JSON.stringify(dataList));
}

//input을 받아 html 로 값을 그림
function write() {
    let listItem = '';
    for (let i in dataList) {
        listItem +=
            '<li class="todolist__item">' +
            '<button class="js-check-btn'+dataList.indexOf(dataList[i])+'">' +
            '<i class="fas fa-check-square"></i></button>' +
            '<strong class="todolist__text">'+dataList[i]+'</strong>'+
            '</li>';
    }
    todoList.innerHTML = listItem;
}

//초기에 localstorage 에 저장된 요소를 write함
function init() {
    // register();
    dataList = JSON.parse(localStorage.getItem('todo'));
    console.log(dataList);
    write();
    form.addEventListener('submit', register);
    for (let i = 0; i <= dataList.length; i ++) {
        const checkBtn = document.getElementsByClassName('js-check-btn'+ dataList.indexOf(dataList[i]))[0];
        checkBtn.addEventListener('click', remove);
    }
}

init();
