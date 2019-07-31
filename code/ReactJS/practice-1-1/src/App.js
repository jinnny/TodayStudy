import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ControlButtons from './components/ControlButtons';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateComponent from './components/CreateComponent';
import UpdateComponent from './components/UpdateComponent';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      mode: 'read',
      welcome: { title: 'Hello', desc: 'React!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is...' },
        { id: 2, title: 'CSS', desc: 'CSS is...' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is...' }
      ],
      selected_content_id: 1
    }
  }
  _getSelectedContent() {
    var i = 0;
    var _contents = this.state.contents;
    while( i < _contents.length) {
      if(this.state.selected_content_id === _contents[i].id) {
       return _contents[i];
      }
      i = i + 1
    }
  }
  _getArticle() {
    var _title, _desc, _article = '';

    if( this.state.mode === 'welcome' ) {
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
        _article = <ReadContent title={_title} desc={_desc}/>;

    }else if( this.state.mode === 'read' ) {
      var _content = this._getSelectedContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}/>;

    }else if( this.state.mode === 'create' ) {
        _article = <CreateComponent _onCreateContent={function(_title, _desc){
          var content_data = this.state.contents;
          var max_content_id = content_data.length + 1;
          var _contents = content_data.concat(
            { id: max_content_id, title: _title, desc: _desc }
          )
          this.setState({
            contents: _contents,
            mode: 'read',
            selected_content_id: max_content_id
          })
        }.bind(this)}/>
    }else if( this.state.mode === 'update' ) {
       var data = this._getSelectedContent()
          _article = <UpdateComponent data={data} 
          _onUpdateContent={function(_id, _title, _desc){
            console.log(_id);
            var contentLists = Array.from(this.state.contents);
            var i = 0;
            while(i < contentLists.length) {
              if(contentLists[i].id === _id){
                contentLists[i] = {id:_id, title: _title, desc: _desc}
                console.log(contentLists[i]);
                break;
              }
              i = i + 1;
            }
            this.setState({
              mode: 'read',
              contents: contentLists
            })
        }.bind(this)}/>
    }

    return _article;
  }
  render() {

    return (
      <div className="App">
        <Header 
          title="web" 
          sub="World Wide Web"
          _onChangePage={function(){
            this.setState({
              mode: 'welcome'
            })
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
        <ControlButtons 
          _onChangeMode={function(_mode){
            if(_mode === 'delete') {
              if(window.confirm('정말 삭제하시겠습니까?')){
                var _contents = Array.from(this.state.contents);
                var i = 0;
                while(i < _contents.length){
                  if(this.state.selected_content_id === _contents[i].id) {
                    _contents.splice(i, 1);
                    console.log(_contents)
                    break;
                  }
                  i = i + 1;
                }
                this.setState({
                  contents: _contents,
                  mode: 'welcome'
                })
              }

            }else {
              this.setState({
                mode: _mode
              })  
            }
          }.bind(this)}
        />

        {this._getArticle()}
      </div>
    )
  }
}

export default App;
