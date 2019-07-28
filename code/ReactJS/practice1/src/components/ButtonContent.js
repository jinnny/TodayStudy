import React, {Component} from 'react';


class ButtonContent extends Component {
    render(){
        return (
            <div>
                <button onClick={function(){
                    this.props.onChangeMode('create');
                }.bind(this)}>Create</button>
                <button onClick={function(){
                    this.props.onChangeMode('update');
                }.bind(this)}>Update</button>
                <button onClick={function(){
                    this.props.onChangeMode('delete');
                }.bind(this)}>Delete</button>
            </div>
        )
    }
}


export default ButtonContent;