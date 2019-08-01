import React, { Component } from 'react';


class UpadateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc,
        }
    }
    _onUpdate = (e) => {
        e.preventDefault();
        this.props._onUpdateContent(
            e.target.id.value,
            e.target.title.value,
            e.target.desc.value,
        );
    }
    _onChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
     };
    render () {
        return (
            <article>
                <h2>Update</h2>
                <form onSubmit={this._onUpdate}>
                    <input type="hidden" name="id" value={this.state.id}/>
                    <p><input type="text" 
                         name="title" 
                         placeholder="title"
                         value={this.state.title}
                         onChange={this._onChangeValue}
                         /></p>
                    <p><textarea 
                        name="desc" 
                        placeholder="description"
                        value={this.state.desc}
                        onChange={this._onChangeValue}
                        ></textarea></p>
                    <input type="submit" value="submit"/>
                </form>
            </article>
        )
    }
}


export default UpadateComponent;