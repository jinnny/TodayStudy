import React, { Component } from 'react';

// redux 없이는
// 하위에서 상위컴포넌트를 명령할때는 이벤트를 이용, 상위컴포넌트에서 하위컴포넌트로 명령할땐 props
class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    if(newProps.data === this.props.data){
      return false;
    }
    return true;
  }
    render() {
        console.log('toc render');
        // component 안에서 본인이 받은 props의 값을 변화시키는것은 금지되어있음(읽을수만있음), component의 밖에선 무관.
        // this.props.data = 'test';
        var lists = [];
        var data = this.props.data;
        // console.log(data);
        for(var i = 0 ; i < data.length; i ++){
            // list에서는 key 값(react 내부적으로 가지고 있는 값)이 필요
            lists.push(
            <li key={data[i].id}>
              <a
               href={"/conent/"+data[i].id}
              //  1번방법 (속성을 이용함)
              //  data-id={data[i].id}
              //  onClick={function(e){
              //   e.preventDefault();
              //   this.props.onChangePage(e.target.dataset.id);
              //  }.bind(this)}
              //  2번방법
              onClick={function(id, e){
                e.preventDefault();
                this.props.onChangePage(id);
              }.bind(this, data[i].id)}
               >{data[i].title}</a>
              </li>
            )
        }
      return (
        // 하나의 최상위 태그만 사용해야함
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      )
    }
  }

  export default TOC;