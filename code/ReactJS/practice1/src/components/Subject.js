import React, { Component } from 'react';

class Subject extends Component {
    render() {
        console.log('subject render');

      return (
        // 하나의 최상위 태그만 사용해야함
        <header>
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            // 함수도 props 로 가져올 수 있음
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      )
    }
  }


  export default Subject;