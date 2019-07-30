import React, { Component } from 'react';


class ReadContentPractice extends Component {
    render(){
        return (
            <article>
                <h2>{this.props.title}</h2>
                <p>{this.props.dsc}</p>
            </article>
        )
    }
}


export default ReadContentPractice;