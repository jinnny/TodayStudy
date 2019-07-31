import React, { Component } from 'react';

class ControlButton extends Component {
    render(){
        return (
            <div className="control-btns">
                <button onClick={function(){
                    this.props._onChangeMode('create')
                }.bind(this)}>create</button>
                <button onClick={function(){
                    this.props._onChangeMode('update')
                }.bind(this)}>update</button>
                <button onClick={function(){
                    this.props._onChangeMode('delete')
                }.bind(this)}>delete</button>
            </div>
        )
    }
}


export default ControlButton;