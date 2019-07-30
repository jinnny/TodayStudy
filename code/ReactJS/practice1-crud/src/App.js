import React, { Component } from 'react';
import SubjectPractice from './comonents/SubjectPractice';
import TOC from './comonents/TOC';
import ReadContent from './comonents/ReadContent'
import ControlButton from './comonents/ControlButton'
import CreateContent from './comonents/CreateContent'
import UpdateContent from './comonents/UpdateContnet'
import './App.css'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'welcome',
      welcome: {title: 'hello!', desc: 'welcome!'},
      selected_content_id: 1,
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is..'},
        {id: 2, title: 'CSS', desc: 'CSS is..'},
        {id: 3, title: 'Java', desc: 'Java is..'},
      ]
    }
  }
  getReadContent() {
    var i = 0;
    var data = this.state.contents
    // console.log(data);
    while( i < data.length ){
      if(data[i].id === this.state.selected_content_id) {
        return data[i];  
      }
      i = i + 1;
    }
  }
  getContent() {
    var _title, _desc, _article = '';
    if( this.state.mode === 'welcome' ){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />;
    }else if( this.state.mode === 'read' ){
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc} />;
    }else if( this.state.mode === 'create'){
      _article = <CreateContent _onCreatContent={function(_title, _desc){
        var max_content = this.state.contents.length + 1;
        // .concat = > 새로담을 배열변수 = 현재배열.concat(다른배열이나 형식)
        var _contents = this.state.contents.concat(
          { id: max_content, title: _title, desc: _desc }
        )
        this.setState({
          mode: 'read',
          contents: _contents,
          selected_content_id: max_content,
        })
      }.bind(this)}/>
    }else if(this.state.mode === 'update'){
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} 
      _onUpdateContent={function(_id,_title,_desc){
        var _contents = Array.from(this.state.contents);
        var i = 0 ;
        while(i < _contents.length) {
          if(_id === _contents[i].id){
            _contents[i]= ({id: _id, title: _title, desc: _desc})
            break;
          }
          i = i + 1
        }
        this.setState({
          contents: _contents,
          mode: 'read'
        })
      }.bind(this)}/>
    }
    return _article;
  }
  render() {
    return (
      <div className="App">
        <SubjectPractice 
          title="WEB!" 
          sub="World Wide Web!"
          // 함수를 props형태로 담음
          _onChangePage={function(){
            // mode를 welcome으로 변경
            this.setState({
              mode: 'welcome'
            })
          }.bind(this)}
          />
        <ControlButton 
          _onChangeCondition={function(_mode){
            if(_mode === 'delete'){
              var _contents = Array.from(this.state.contents);
              if(window.confirm('정말 삭제하시겠습니까?')){
                for(var i = 0; i < _contents.length; i ++) {
                  if(_contents[i].id === this.state.selected_content_id) {
                    _contents.splice(i, 1);
                    // console.log(_contents[]);
                  }
                  this.setState({
                    mode: 'welcome',
                    contents: _contents
                  })
                }
              }
            }else {
              this.setState({
                mode: _mode
              })  
            }
          }.bind(this)}
        />
        <TOC 
          data={this.state.contents}
          _onChangeContent={function(id){
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            })
          }.bind(this)}
          />
        {this.getContent()}
      </div>
    )
  }
}


export default App;