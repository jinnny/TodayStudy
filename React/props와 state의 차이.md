#props 와 state의 차이


##props
상위컴포넌트에서 하위컴포넌트에게 명령을 내릴때 사용됨  
ex) App.js -> Content.js 

App.js  
``
    <Content title={_title} dsc={_dsc}/>
``  

Content.js 
``
 {this.props.title}
``

하위 컴포넌트에서는 props를 읽기만 가능하고, 수정은 불가함(컴포넌트 외부에선 변경 가능 = App.js <Conetne /> 에선 가능)  
ex) props는 왕(상위컴포넌트)이 내린 어명과 같기때문에 이를 신하(하위컴포넌트) 가 수정한다는 것은 불가능한 셈  


##state
컴포넌트 내부에서 선언하고 존재함(setState로 값이 변경 가능)  

ex)
``
class App extends Component {
    state = {
      mode: 'read'
    }
}
``

##props와 state
변경이 있을 경우 render가 다시 발생함(새로 그려짐)  
하위에서 상위컴포넌트를 명령할때는 이벤트를 이용(해서 setState값을 변경해 전달), 상위컴포넌트에서 하위컴포넌트로 명령할땐 props (* redux를 사용하지 않을 경우)  