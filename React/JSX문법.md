#JSX 


##JSX 란
JavaScript XML  
HTML과 유사하게 생김. Javascript를 return 해주며 react 에서 사용됨  


##특징
1. 한번 연 태그는 반드시 닫혀야 함.(input 포함)  

ex)
``
class App extends Component {
    render () {
        return (
            <div>
                <input type="text" />
            </div>
        )
    }
}
``  

2. 감싸는 태그가 있어야함. (상위 요소가 한가지 여야함)  

ex)
``
class App extends Component {
    render () {
        return (
            <div>
               <h1>hello</h1>
               <p>wow</p>
            </div>
        )
    }
}
``  

* 예전 버전에서는 무조건 div 태그로만 감싸야 해, 무의미한 div 추가가 되는 문제를 가지고 있었으나 Fragment 가 추가되며 div가 생성되지 않게도 가능함.  

ex)
``
import React, { Component, Fragment } from 'react';

class App extends Component {
    render () {
        return (
            <Fragment>
               <h1>hello</h1>
               <p>wow</p>
            </Fragment>
        )
    }
}
``  

3. JSX 내부에 JavaScript 값을 사용 가능함. ( {} 사용)

ex)
``
class App extends Component {
    render () {
        const name = 'jinnny'
        return (
            <div>
               <h1>hello {name}</h1>
            </div>
        )
    }
}
``  

* var 는 scope 가 함수 단위로 설정, let과 const는 scope가 블록({}) 단위로 설정됨.  
