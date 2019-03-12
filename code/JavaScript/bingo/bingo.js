const bingoItem = document.getElementsByClassName('bingo__item');

//select
function selectItem(ddd) {
   console.log('dddd', ddd);
   this.classList.add('active');
   let prev = this.previousElementSibling;
   let next = this.nextElementSibling;
   console.log(prev,next);
   if(prev === 'null' || next === 'null'){

   }
   if(!!prev.classList.contains('active')){
        console.log('이전꺼 클래스 있따');
   }else {
       console.log('없다')
   }
   let current = this.className.replace(/[^0-9]/g,'');
   console.log(current);
   switch (current) {
       case '0': ;
       break;
   }
}

function getLi() {
    for (let i = 0; i < bingoItem.length; i ++) {
        bingoItem[i].addEventListener('click',selectItem(i));
        console.log(bingoItem[i]);
    }
}

function init() {
    getLi();
}

init();
