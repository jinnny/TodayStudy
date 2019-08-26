# Vuex


## 개념
복잡한 컴포넌트들을 효율적으로 관리한 상태 관리 패턴이자 라이브러리

### Flux 패턴
* (Unidirectional data flow 데이터가 한방향으로 흐름)  

1. action: 화면에서 발생하는 이벤트 또는 사용자 입력  
2. dispatcher: 데이터를 변경하는 방법, 메서드(모델을 변경하기 위한 방법) 
3. model: 화면에 표시할 데이터  
4. view: 사용자에게 비춰지는 화면  

* MVC 패턴  
1. controller : 모델과 뷰를 제어함  
2. model : 화면에 표시할 데이터  
3. view : 화면  
(모델과 뷰는 서로 데이터를 주고 받을 수 있는 양방향 형식)  

    단점: 기능추가 및 변경에 따른 문제점 예측 불가. 


## 이점
1. MVC 패턴에서 발생하는 구조적 오류 해결가능
2. 컴포넌트 간 데이터 전달 명시 가능
3. 여러개의 컴포넌트에서 같은 데이터를 업데이트할 때 동기화 문제 해결 가능

## 컨셉
1. State: 컴포넌트 간에 공유하는 데이터 data()  
2. View: 데이터를 표시하는 화면 template
3. Action: 사용자의 입력에 따라 데이터를 변경하는 methods

## 기술요소
1. State: 여러 컴포넌트에 공유되는 데이터 data

``
<!-- vue -->
<p>{{ message }}</p>  
<!-- vuex use로 store을 사용하기 했기때문에 어디서든 접근 가능함. -->
<p>{{ this.$store.state.message }}</p>  
``

2. getters: 연산된 state 값을 접근하는 속성 computed
-state값을 접근하는 속성이자 computed()처럼 미리 연산된 값을 접근하는 속성

``
state: {  
  num: 10  
}  

getters: {  
  getNumber(state) {  
    return state.num;  
  },  
  doubleNumber(state) {  
    return state.num * 2  
  }  
}
<p>{{ this.$store.getters.getNumber }}</p>
<p>{{ this.$store.getters.doubleNumber }}</p>
``

3. mutations: state 값을 변경하는 이벤트 로직, 메서드 methods
-state의 값을 변경할 수 있는 유일한 방법  
-commit()으로 동작됨  
-mutations는 첫번째 인자로 state를 가져오기때문에 변경이 가능.  
-state 변경을 위해 mutations를 동작시킬때 인자(payload)를 전달할 수 있음..  

``
<!-- store.js -->
state { num: 10, storeNum: 10 },  
mutations: {  
  printNumbers(state) {  
    return state.num  
  },   
  sumNumbers(state, anotherNum) {  
    return state.num + anoterNum  
  },  
  modifyState(state, payload) {  
    console.log(payload.str); //passed from payload  
    return state.storeNum += payload.num; //30  
  }  
}

<!-- App.vue -->
this.$store.commit('printNumbers'); //10  
this.$store.commit('sumNumbers', 20); //30(넘기고싶은값이 하나일때, 여러개일때는 객체화 시켜서 넘기면됨)  

this.$store.commit('modifyState', {  
  str: 'passed from payload',  
  num: 20  
})  
``

* state를 직접변경하지 않고 mutations로 변경해야하는 이유: 여러개의 컴포넌트에서 state값을 변경하는 경우, 어느 컴포넌트에서 변경했는지 추적이 어렵고 특정 시점에 어떤 컴포넌트가 state에 접근해 변경한건지 확인하기 어렵기때문이다.(state는 전역으로 쓰이는 것이라 추적이 무조건 필요함)  

4. actions: 비동기 처리 로직을 선언하는 메서드 aysnc methods
- 비동기처리 로직을 담당하는 mutation  
- 데이터요청,promise,ES6 async 과 같은 비동기 처리는 actions에 선언함.  

``
state: {  
  num: 10  
},  
mutations: {  
  doubleNumber(state) {  
    state.num * 2;  
  }  
},  
actions: {  
  <!-- 첫번쨰 인자 context-> actions에서 mutations를 접근하기 위한 경로  -->
  delayDoubleNumber(context) {  
    context.commit('doubleNumber');  
  }  
}  

this.$store.dispatch('delayDoubleNumber');  
``

``
<!-- 비동기 예제 -->
mutations: {  
  setData(state, fetchedData) {  
    state.product = fetchedData;  
  }  
},  
actions: {  
  fetchProductData(context) {  
    return axios.get('https://domain.com/products/1')  
    .then(response => context.commit('setData', response));  
  }  
}  

methods: {  
  getProduct() {  
    this.$store.dispatch('fetchProductData');  
  }  
}  
``

* 비동기 처리 로직은 actions에 선언을 따로 해야하는 이유: 언제 어느 컴포넌트에서 해당 state를 호출하고 변경했는지 확인어려움.(그래서 애초에 규칙을 그렇게 정함.) ex) 여러개의 컴포넌트에서 mutations로 시간 차를 두고 state를 변경하는 경우(확인이 어려움)  

##구조
컴포넌트 -> 비동기 로직 -> 동기 로직 -> 상태


##helper
각 속성들을(state,getters,mutations,actions) 더 쉽게 사용하는 방법  

1. mapState  
Vuex에 선언한 state속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼  

``
import { mapState } from 'vuex';  

computed() {  
  ...mapState(['num'])  
  //num() { return this.$store.state.num; }  
}  
<!-- store.js -->
state: {  
  num: 10  
}  


<p>{{ this.num }}</p>
``

2. mapGetters 
Vuex에 선언한 getters 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼  

``
import { mapGetters } from 'vuex';  

computed() { ...mapGetters(['reverseMessage'])}  

getters: {  
  reverseMessage(state) {  
    return state.msg.split('').reverse().join('');  
  }  
}  

<!-- store.js -->
getters: {  
  reverseMessage(state) {  
    return state.msg.split('').reverse().join('');  
  }  
}  


<p>{{ this.reverseMessage }}</p>
``

* (...)spread 연산자를 쓰는 이유: 기존에 사용한 속성들과 매칭시키기 위해(위의 경우 computed()에 사용된 속성들과 매칭시키기 위함.)    


3. mapMutations  
Vuex에 선언한 mutations 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼  

``
import { mapMutations } from 'vuex';  

methods: {  
  ...mapMutations(['clickBtn']),  
  authLogin() {},  
  displayTable() {}  
}  

<!-- store.js -->
mutations {  
  clickBtn(state) {  
    alert(state.msg);  
  }  
}  
``

4. mapActions   
Vuex에 선언한 actions 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼  

``
import { mapActions } from 'vuex';  

methods: {  
  ...mapActions(['delayClickBtn']),  
}  

<!-- store.js -->
actions: {  
  delayClickBtn(context) {  
    setTimeout(() => context.commit('clickBtn'), 2000);  
  }  
}  
``

* 헬퍼의 유연한 문법  
1. Vuex에 선언한 속성을 그대로 컴포넌트에 연결하는 문법(ES6와 유사)   

``
<!-- 배열리터럴 -->
...mapMutations([  
  'clickBtn', // 'clickBtn': clickBtn  
  'addNumber' // addNumber(인자)  
])  
``

2. Vuex에 선언한 속성을 컴포넌트의 특정 메서드에다가 연결하는 문법  

``
<!-- 객체리터럴 -->
...mapMutations({  
  popupMsg: 'clickbtn' // 컴포넌트 메서드 이름: Store의 뮤테이션 이름  
})  
``


## 프로젝트 구조화와 모듈화 방법

1. ES6의 import와 Export 를 이용해 속성별로 모듈화  

``
import Vue from 'vue';  
import Vuex from 'vuex';   
import * as getters from 'store/getters.js'  
import * as mutations from 'store/mutations.js'  
import * as actions from 'store/actions.js'  

export const store = new Vuex.Store({  
  state: {},  
  getters: getters,  
  mutations: mutations,  
  actions: actions  
})

``

2. 앱이 비대해져서 1개의 store 로는 관리가 힘들때 modules 속성을 사용.  

``
import Vue from 'vue';  
import Vuex from 'vuex';   
import todo from 'modules/todo.js'

export const store = new Vuex.Store({  
  modules: {  
    moduleA: todo, //모듈 명칭: 모듈 파일명  
    todo //todo: todo  (축약가능)
  }  
})  

//todo.js
const state = {}  
const getters = {}  
const mutations = {}  
const actions = {}  
``


## 참고 URL

 [인프런 Vue.js 중급 강좌](https://www.inflearn.com/course/vue-pwa-vue-js-%EC%A4%91%EA%B8%89#)

