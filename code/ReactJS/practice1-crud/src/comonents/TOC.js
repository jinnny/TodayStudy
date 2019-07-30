import React, { Component } from 'react';

class TOC extends Component {
    shouldComponentUpdate(newProps){
        // state가 변경되지 않아도 render()부분이 계속 호출되기때문에, state가 변경되었을때만 render()를 호출하도록 함
        if(this.props.data === newProps){
            return false
        }
        return true;
    }
    render() {
        // console.log(this.props.data);
        var data = this.props.data;
        var lists = [];
        for(var i = 0 ; i < data.length; i ++){
            lists.push(<li key={data[i].id}>
                <a href={"/content/"+data[i].id}
                data-id={data[i].id}
                // props형태로 선언한 함수를 prop호출형태로 받아줌
                onClick={function(e){
                    e.preventDefault();
                    this.props._onChangeContent(e.target.dataset.id);
                }.bind(this)}
                >{data[i].title}</a></li>)
        }
        return (
            <nav>
                {lists}
            </nav>
        )
    }
}

export default TOC;