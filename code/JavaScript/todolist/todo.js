const  form = document.getElementsByClassName('js-todo-form')[0];
const  todoList = document.getElementsByClassName('js-todo__list')[0];
const  todoInput = document.getElementsByClassName('js-todo__input')[0];
let  dataList = [];

//check후 이벤트, li HTML 을 삭제하고, 해당 dataList을 splice 후 localstorage setItem
function complete() {
   this.remove();
   let currentClass = this.className.split(' ')[1];
   // currentClass.splice(0, 1);
   console.log('currentClass'+':'+currentClass);
    for (let i in dataList) {
        let data = 'js-todo__item' + i;
        if(data === currentClass) {
            console.log(data);
            dataList.splice(i, 1);
            localStorage.setItem('todo', JSON.stringify(dataList));
        }
    }
    //write 로 다시 그리기
    write();
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
            '<li class="todo__item js-todo__item'+i+'">' +
                '<button class="check-btn js-check-btn">' +
                '<i class="fas fa-check-square fa-2x"></i></button>' +
                '<strong class="todo__text">'+dataList[i]+'</strong>'+
            '</li>';
    }
    todoList.innerHTML = listItem;
    checkElement();
}

//check(완료) 에 click 이벤트 추가(기존 버튼에서 Li로 수정)
function checkElement() {
    for (let i in dataList) {
        const checkLi = document.getElementsByClassName('js-todo__item'+ i )[0];
        checkLi.addEventListener('click', complete);
    }
}


//초기에 localstorage 에 저장된 요소를 write함
function init() {
    // register();
    if((localStorage.getItem('todo')) === null){
        console.log('null이다');
    } else {
        console.log('안null이다');
        dataList = JSON.parse(localStorage.getItem('todo'));
    }
    console.log('get' + localStorage.getItem('todo'));
    console.log('data' + dataList);
    write();
    form.addEventListener('submit', register);
}

init();
