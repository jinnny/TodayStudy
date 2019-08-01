import React, { Component } from 'react';
import './App.css';
import Header from './component/Header'
import TOC from './component/TOC';
import ControlButton from './component/ControlButton';
import ReadComponent from './component/ReadComponent';
import CreateComponent from './component/CreateComponent';
import UpdateComponent from './component/UpdateComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode: 'read',
      welocome: { title: 'welcome', desc: 'React'},
      select_content_id: 1,
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is..'},
        { id: 2, title: 'CSS', desc: 'CSS is..'},
        { id: 3, title: 'JavaScript', desc: 'JavaScript is..'}
      ]
    }
  }
  _getContent = () => {
    let _contents = Array.from(this.state.contents);
    let i = 0;
    while ( i < _contents.length ) {
      if( _contents[i].id === this.state.select_content_id) {
        return _contents[i]
      }
      i = i + 1
    }
  }
  _getArticle = () => {
    let _title, _desc, _article = 'null';
      if ( this.state.mode === 'welcome' ) {
        _title = this.state.welocome.title;
        _desc = this.state.welocome.desc;
        _article = <ReadComponent title={_title} desc={_desc}/>;
    } else if ( this.state.mode === 'read' ) {
     let _contents = this._getContent();
      _article = <ReadComponent title={_contents.title} desc={_contents.desc}/>;
    } else if ( this.state.mode === 'create' ) {
      _article = <CreateComponent _onCreateContent={function(_title, _desc){
        var _contents = Array.from(this.state.contents);
        var max_content_id = _contents.length + 1;
        _contents.push({id: max_content_id, title: _title, desc: _desc})

        this.setState({
          contents: _contents,
          mode: 'read',
          select_content_id: max_content_id
        })
      }.bind(this)}/>;
    } else if ( this.state.mode === 'update' ) {
        let data = this._getContent();
        _article = <UpdateComponent data={data} 
        _onUpdateContent={function(_id, _title, _desc){
        let _contents = Array.from(this.state.contents);
        let i = 0;
        while( i < _contents.length) {
          console.log(_contents[i].id , Number(_id))
          if(_contents[i].id === Number(_id)) {
            _contents[i] = {id: _id, title: _title, desc: _desc};
            break;
          }
          i = i + 1;
        }
        this.setState({
          mode: 'read',
          contents: _contents,
          select_content_id: _id
        })
      }.bind(this)}/>;
    }
    return _article
  }
  render() {
    
    return (
      <div className="App">
        <Header 
          title="web" 
          sub="world wide world"
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
              select_content_id: Number(id)
            })
          }.bind(this)}
          />
        <ControlButton _onChangeMode={function(_mode){
          if(_mode === 'delete') {
            if(window.confirm('삭제하시겠습니까?')){
              let _contents = Array.from(this.state.contents);
              let i = 0;
              while ( i < _contents.length ) {
                if( _contents[i].id === this.state.select_content_id ) {
                  _contents.splice(i, 1);
                  break;
                }
                i =  i + 1;
              }
              this.setState({
                contents : _contents,
                mode: 'welcome'
              })
            }
          } else {
            this.setState({
              mode: _mode
            })  
          }
        }.bind(this)} />
       {this._getArticle()}
      </div>
    )
  }

}

export default App;
