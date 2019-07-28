import React, { Component } from 'react';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import ButtonContent from './components/ButtonContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {
// render 전에 발생, component 가 실행될때 constructor가 제일먼저 실행되며 초기화를 담당함.
  constructor(props){
    super(props);
    this.max_content_id = 4;
    this.state = {
      mode: 'welcome',
      selected_content_id: 2,
      subject: {title: 'WEB', sub: 'world wid web!'},
      welcome: {title: 'welcome', dsc: 'hello, react'},
      contents: [
        {id: 1, title: 'HTML', dsc: 'HTML is..'},
        {id: 2, title: 'CSS', dsc: 'CSS is..'},
        {id: 3, title: 'JavaScript', dsc: 'JavaScript is...'},
        {id: 4, title: 'React', dsc: 'React is...'}
      ]
    }
  }
  getReadContent() {
    var i = 0;
    while( i < this.state.contents.length){
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
        break;
      }
      i = i + 1;
    }
  }
  getContent() {
    var _title, _dsc,_article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _dsc = this.state.welcome.dsc;
      _article = <ReadContent title={_title} dsc={_dsc}/>;
    } else if(this.state.mode === 'read') {
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} dsc={_content.dsc}/>;
    } else if(this.state.mode === 'create') {
        _article =  <CreateContent onSubmitPage={function(_title, _dsc){
          this.max_content_id = this.max_content_id+1;
          // .push(): 원본데이터가 변경됨
          // .concat(): 원본데이터는 그대로 있고 추가한 값이 새로운 배열로 반환함.
          // 1번 방법(.concat 이용)
          // var _contents = this.state.contents.concat(
          //   {id: this.max_content_id, title: _title, dsc: _dsc}
          // )

          var newContents = Array.from(this.state.contents);
          newContents.push({id: this.max_content_id, title: _title, dsc: _dsc});

          this.setState({
            // contents: [
            //   ...this.state.contents,
            //   {id: this.max_content_id, title: _title, dsc: _dsc}
            // ],
            // contents: _contents
            contents: newContents,
            mode: 'read',
            selected_content_id: this.max_content_id
          })
      }.bind(this)}
      />;
    }else if(this.state.mode === 'update'){
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmitPage={
        function(_id, _title, _dsc){
        // .push(): 원본데이터가 변경됨
        // .concat(): 원본데이터는 그대로 있고 추가한 값이 새로운 배열로 반환함.
        // 1번 방법(.concat 이용)
        var _contents = Array.from(this.state.contents);
        var i = 0;
        while( i < _contents.length){
          if (_contents[i].id === _id) {
            _contents[i] = {id: _id, title: _title, dsc: _dsc}
            break;
          }
          i = i + 1;
        }
        this.setState({
          // contents: [
          //   ...this.state.contents,
          //   {id: this.max_content_id, title: _title, dsc: _dsc}
          // ],
          contents: _contents,
          mode: 'read'
          // contents: newContents
        })
    }.bind(this)}
    />;
    }
    return _article;
  }
  // props나 state값이 바뀌면 해당되는 컴포넌트 render함수가 다시 호출됨(새로 그려짐)
  render() {
    console.log('app render');
    return (
      <div className="App">
        {/* ""로 표현되면 문자로 취급됨, javascipt의 코드로 노출되려면 {}(중괄호) 사용! */}
         {/* 상위컴포넌트의 state값을 하위컴포넌트의 props 값으로 전달가능. */}
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode: 'welcome'})
          }.bind(this)}
        />
        {/*  */}
        {/* <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault();
            // 이함수 안에서는 this 가 아무값도 세팅되어있지 않아 에러발생.-> 함수가 끝나는 지점에 .bind(this) 선언하면됨
            // this.state.mode = 'welcome';
            // 동적으로 state 값을 변경할떄는 위처럼 직접 변경하면안되고 setState 로 바꿔야함.(직접변경하는 경우에는 리엑트 몰래 바꾸는것이되어 업데이트가 되지않음.)
            this.setState({
              mode: 'welcome'
            })
            // .bind() 
          }.bind(this)}>
          {this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
        <ButtonContent onChangeMode={function(_mode){
          if(_mode === 'delete'){
            if(window.confirm('정말 삭제하시겠습니까?')){
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while (i < _contents.length){
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i,1);
                  alert('삭제되었습니다.');
                  break;
                }
                i = i + 1;
              }
              this.setState(
                {
                  mode: 'welcome',
                  contents: _contents
                }
              )
            }
          }else{
            this.setState({mode: _mode})
          }
            
          }.bind(this)}/>
        <TOC onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id: Number(id)  
          });
        }.bind(this)} 
        data={this.state.contents}/>
        {this.getContent()}
      {/* if (this.state.mode === 'read') {
          return <Content title={_title} dsc={_dsc}/>;
        } if else (this.state.mode === 'create') {
          return  ;
        } */}
      </div>
    )
  }
}


export default App;
