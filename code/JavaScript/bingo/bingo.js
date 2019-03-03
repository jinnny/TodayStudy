const bingoItem = document.getElementsByClassName('bingo__item');

//select
function selectItem() {
   let li = this;
    console.log(li);
}

function getLi() {
    for (let i = 0; i < bingoItem.length; i ++) {
        bingoItem[i].addEventListener('click',selectItem);
        console.log(bingoItem[i]);
    }
    // for (let i in bingoItem) {
    //     console.log(bingoItem[i]);
    //     bingoItem[i].addEventListener('click',selectItem);
    // }
}

function init() {
    getLi();
}

init();
