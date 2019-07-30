import React, { Component } from 'react';


class SubjectPractice extends Component {
    render() {
        return (
            <header>
                <h1>
                    <a href="/" onClick={function(e){
                        // a태그 새로고침 방지
                        e.preventDefault();
                        // props에 담긴 함수 호출
                        this.props._onChangePage();
                    }.bind(this)}
                    >{this.props.title}</a>
                </h1>
                <p>{this.props.sub}</p>
            </header>
        )
    }
}


export default SubjectPractice;