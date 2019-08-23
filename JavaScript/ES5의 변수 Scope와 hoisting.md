#ES5의 변수 Scope와 hoisting


##변수의 Scope
ES5 는 {}에 상관없이 스코프가 설정됨  

``
var sum = 0;
for (var i = 1; i <= 5; i ++) {
  sum = sum + i;
}
console.log(sum) //15
console.log(i) //6

i의 값이 접근 가능함.(var i 가 전역으로 설정되기 때문)
``

##호이스팅
함수와 변수가 가장 상단으로 끌어올려짐 
ex) function a(), var 는 코드 최상단으로 끌어올려진 것처럼 작동함.  

``
function willBe() {
  return 10;
}
willBe(); // 5
function willBe() {
  return 5;
}

함수선언식(function declarations)이 위로 끌어올려지기 때문
``
* 함수표현식은 해당되지 않음  
ex) var 함수명 = function () {};


### 함수선언식과 함수표현식의 실행차이

``
<!-- 실행전 -->
logMessage(); //worked
sumNumbers(); //Uncaught TypeError: sumNumbers is not a function

function logMessage() {
  return 'worked';
}

var sumNumbers = function () {
  return 10 + 20;
};
``

``
<!-- 실행되었을경우 -->
function logMessage() {
  return 'worked';
}
var sumNumbers;

logMessage(); // 'worked'
sumNumbers(); // Uncaught TypeError: sumNumbers is not a function

sumNumbers = function () {
  return 10 + 20;
};
J
``

그 이유는 var sumNumbers; 는 변수로 hoisting 되지만 function()은 차후에 할당되기만 하기 때문..     

* 호이스팅->할당/연산


## 참고 URL

[함수 표현식 vs 함수 선언식](https://joshua1988.github.io/web-development/javascript/function-expressions-vs-declarations/)  
 [인프런 Vue.js 중급 강좌](https://www.inflearn.com/course/vue-pwa-vue-js-%EC%A4%91%EA%B8%89#)

