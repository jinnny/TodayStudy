import React, { Component } from 'react';


class CreateComponent extends Component {
    _onSubmit = (e) => {
        e.preventDefault();
        this.props._onCreateContent(
            e.target.title.value,
            e.target.desc.value
        );
    }
    render () {
        return (
            <article>
                <h2>Create</h2>
                <form onSubmit={this._onSubmit}>
                    <p><input type="text" 
                         name="title" 
                         placeholder="title"
                         /></p>
                    <p><textarea name="desc" placeholder="description"></textarea></p>
                    <input type="submit" value="submit"/>
                </form>
            </article>
        )
    }
}


export default CreateComponent;