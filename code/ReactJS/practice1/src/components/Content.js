import React, { Component } from 'react';

class Content extends Component {
    render() {
        console.log('content render');

      return (
        // 하나의 최상위 태그만 사용해야함
        <article>
          <h2>{this.props.title}</h2>
          {this.props.dsc}
        </article>
      )
    }
  }

  export default Content;