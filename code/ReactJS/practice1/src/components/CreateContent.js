import React, { Component } from 'react';


class CreateContent extends Component {
    render(){
        return (
            <div>
                <h2>Create</h2>
                <form action="/creat_procsee" method="post" onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmitPage(
                        e.target.title.value,
                        e.target.dsc.value
                    );
                }.bind(this)}>
                    <p>
                        <input type="text" name="title" placeholder="title"/>
                    </p>
                    <p>
                        <textarea  name="dsc" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit"/>
                    </p>
                </form>
            </div>
        )
    }
} 


export default CreateContent;