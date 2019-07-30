import React, { Component } from 'react';


class ControlButton extends Component {
    render() {
        return (
            <div className="control-btns">
                <button onClick={function(){
                    this.props._onChangeCondition('create')
                }.bind(this)}>Create</button>
                <button onClick={function(){
                    this.props._onChangeCondition('update')
                }.bind(this)}>Update</button>
                <button onClick={function(){
                    this.props._onChangeCondition('delete')
                }.bind(this)}>Delete</button>
            </div>
        )
    }
}


export default ControlButton;