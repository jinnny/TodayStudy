import React, { Component } from 'react';

class ReadContent extends Component {
    render() {
        console.log('ReadContent render');

      return (
        // 하나의 최상위 태그만 사용해야함
        <article>
          <h2>{this.props.title}</h2>
          {this.props.dsc}
        </article>
      )
    }
  }

  export default ReadContent;