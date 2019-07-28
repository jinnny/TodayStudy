import React, { Component } from 'react';


class UpdateContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            dsc: this.props.data.dsc
        }
        this.inputFromHandler =this.inputFromHandler.bind(this);
    }
    inputFromHandler(e){
        this.setState({[e.target.name]: e.target.value});
    }
    render(){
        console.log(this.props.data);
        return (
            <div>
                <h2>Update</h2>
                <form action="/creat_procsee" method="post" onSubmit={function(e){
                    e.preventDefault();
                    this.props.onSubmitPage(
                        this.state.id,
                        this.state.title,
                        this.state.dsc
                    );
                }.bind(this)}>
                    <input type="hidden" name="id" value={this.state.id}></input>
                    <p>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="title"
                            value={this.state.title}
                            onChange={this.inputFromHandler}
                            />
                    </p>
                    <p>
                        <textarea 
                        name="dsc" 
                        placeholder="description"
                        value={this.state.dsc}
                        onChange={this.inputFromHandler}
                        ></textarea>
                    </p>
                    <p>
                        <input type="submit"/>
                    </p>
                </form>
            </div>
        )
    }
} 


export default UpdateContent;