# ES6의 특징


## 변수의 Scope
ES6 는 {} 단위로 변수의 스코프가 제한됨  

``
var sum = 0;
for (var i = 1; i <= 5; i ++) {
  sum = sum + i;
}
console.log(sum) //15
console.log(i) //6

i의 값이 접근이 불가능함.(let i 가 {} 단위로 설정되기떄문)
``

## let
한번 선언하면 다시 선언할 수 없음.  

``
let a = 10;
let a = 20; //SyntaxError: a는 이미 선언되었다는 에러 발생
``

## const
값을 한번 지정하면 값을 바꿀 수 없음.(상수)  

``
const a = 10;
a = 20 //typeError
``

그러나 객체나,배열의 내부는 변경 가능.

``
const a = {};
a.num = 10;
console.log(a); // {num: 10}

const b = [];
b.push(20);
console.log(b) // [20]
``



## Arrow Function
함수를 정의할때 function 대신 => 를 사용  
콜백함수의 문법 간결화  

``
//ES5
var sum = function(a,b) {
  return a + b;
};

//ES6
const sum = (a,b) => {
  return a + b;
}

ex)
var arr = ['a','b'];
arr.forEach(value => console.log(value))

``

## Enhanced Object Literals(향상된 객체 리터럴)
객체의 속성을 메서드로 할때 function 예약어 생략 가능  
객체의 속성명과 값명의 동일 할때 축약 가능  

``
var dictionary = {
  words: 100,
  <!-- ES5 -->
  lookup: function() {
    console.log('')
  }
  <!-- ES6 -->
  lookup() {
    console.log('')
  }
}

<!-- vue에서도 같음.. -->

methods: {
  <!-- 객체의 메서드 -->
  addOneItem(todoItem) {
    console.log('es6')
  }
}
``
``
const figures = 10;
const dictionary = {
  <!-- figures:figures -->
  figures
}

<!-- vue에서도 동일 -->
  components: {
    <!-- TodoHeader:TodoHeader -->
    TodoHeader,
  }
``

## Modules
특정기능을 수행하는 한 묶음.  
호출되기 전까지는 코드 실행과 동작을 하지 않음.  

import, export 를 사용하는 것..  

vue에서 export default 를 볼수 있는데,
default는 한개의 파일에서 하나의 export 밖에 안됨.
이를 통해 불필요한 import를 줄이는 모듈화를 하는 것.


## 참고 URL

[인프런 Vue.js 중급 강좌](https://www.inflearn.com/course/vue-pwa-vue-js-%EC%A4%91%EA%B8%89#)
