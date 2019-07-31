import React, { Component } from 'react';


class CreateComponent extends Component {
    render() {
        return(
            <article>
                <h2>Create</h2>
                <form onSubmit={function(e){
                    e.preventDefault();
                    this.props._onCreateContent(
                        e.target.title.value,
                        e.target.desc.value
                    )
                }.bind(this)}>
                    <p><input type="text" name="title" placeholder="title"/></p>
                    <p><textarea name="desc" placeholder="description"></textarea></p>
                    <p><input type="submit" value="submit"/></p>
                </form>
            </article>
        )
    }
}

export default CreateComponent;