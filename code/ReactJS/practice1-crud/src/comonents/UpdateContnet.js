import React, { Component } from 'react';


class UpdateContent extends Component {
    constructor(props){
        super(props);
        this.state= {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        }
    }
    render(){
        // console.log(this.state.desc)
        return (
            <div>
                <h2>Update</h2>
                <form action="create" method="post" 
                        onSubmit={function(e){
                            e.preventDefault();
                            // id, title, desc 값 인자로 넘기기
                            this.props._onUpdateContent(
                                this.state.id,
                                this.state.title,
                                this.state.desc
                            );
                        }.bind(this)}>
                    <p>
                        <input 
                            name="title" 
                            placeholder="title" 
                            value={this.state.title}
                            // onChange 되었을때 title값 넘기기
                            onChange={function(e){
                                // debugger;
                                this.setState({
                                    title: e.target.value
                                })
                            }.bind(this)}/>
                    </p>
                    <p>
                        <textarea 
                            name="desc" 
                            placeholder="description"
                            value={this.state.desc}
                            onChange={function(e){
                                this.setState({
                                    desc: e.target.value
                                })
                            }.bind(this)}
                            ></textarea>
                    </p>
                    <p>
                        <input type="submit" />
                    </p>
                </form>
            </div>
        )
    }
}

export default UpdateContent;