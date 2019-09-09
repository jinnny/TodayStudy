# Vue Lifecycle


## 개념
Vue의 생애주기

## 종류
크게 4종류가 존재함.  

1. created 
2. mounted
3. updated
4. destroyed

### created  
처음 컴포넌트가 보여지게 될 때.  화면에 나타나기 전.   
데이터를 붙여주는 역할  
클라이언트, 서버 렌더링에서 처리할 일을 이곳에서 처리함.  

### mounted  
화면에 나타낸 후, 화면에 그려지는 것. 
컴포넌트에 직접 접근 가능.  

* 화면에 무언가 그리고 싶다면 created가 아닌 mounted에서 작업해야함.  
created 단계는 컴포넌트가 돔에 추가되기 전이기 때문에 돔에 접근할 수 없음.  

* created는 부모 자식 순서로 실행되지만, mounted는 자식 부모 순으로 실행됨.  


### updated  
화면에서 데이터가 변경되어 화면을 새로 그릴 때,  
돔이 업데이트가 완료되었기때문에 돔에 접근 가능함.  

### destroyed  
화면에서 없어졌을 때  
인스턴트가 제거된 후에 호출됨.  
ex) v-if가 false 일때 발생.  



## 참고 URL

[Vue.js 2.0 라이프사이클 이해하기](https://medium.com/witinweb/vue-js-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-7780cdd97dd4)  
[ZeroCho TV Vue 기본 강좌 5-3. vue 라이프사이클](https://www.youtube.com/watch?v=4eiqU19ckNw&list=PLcqDmjxt30RsdnPeU0ogHFMoggSQ_d7ao&index=22)
