#Lifecycle API 


## React 의 생애주기  


### Mounting
컴포넌트가 처음 실행 될 때

constructor 
초기화

getDerivedStateFromProps()
props의 값을 state에 업데이트 해주고싶을때 사용.

render()

componentDidMount()
컴포넌트가 마운트 되었을때 
스크롤설정,크기 재기 등의 작업

---------------------------


###update

shouldComponentUpdate()
업데이트를 막아줄 수 있는 함수  
props 변화가 없으면 업데이트 막음.(불필요한 랜더를 안하게 막음: 성능최적화를위해)

render()

getSnapshotBeforeUpdate()
업데이트되고 그것이 돔에 반영되기 직전에 그때 돔상태를 받아올수 있음.
ex) 콘텐츠가 추가됨에 따라 스크롤 위치가 바뀔때, 콘텐츠 추가 되기전에 스크롤의 위치값을 알아내서 그 값을 스크롤이 더 길어지더라도 고정시킬때 사용.

componentDidMount()
컴포넌트가 마운트 되었을때 
스크롤설정,크기 재기 등의 작업

---------------------------

##unmounting

componentWillUnmount()
컴포넌트 제거될때 실행되는 함수


componentDidCatch()
render 에서 에러가 날때 실행되는 함수
에러나는 곳의 부모컴포넌트에서 사용할수 있음.


https://twitter.com/dan_abramov/status/981712092611989509