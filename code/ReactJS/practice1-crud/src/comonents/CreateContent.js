import React, { Component } from 'react';


class CreateContent extends Component {
    render(){
        return (
            <div>
                <h2>Create</h2>
                <form action="create" method="post" 
                        onSubmit={function(e){
                            e.preventDefault();
                            this.props._onCreatContent(
                                e.target.title.value,
                                e.target.desc.value,
                            );
                        }.bind(this)}>
                    <p>
                        <input name="title" placeholder="title" />
                    </p>
                    <p>
                        <textarea name="desc" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit" />
                    </p>
                </form>
            </div>
        )
    }
}

export default CreateContent;