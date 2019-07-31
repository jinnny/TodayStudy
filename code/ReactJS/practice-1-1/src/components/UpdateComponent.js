import React, { Component } from 'react';


class UpdateComponent extends Component {
    constructor(props){
        super(props);
        // state 를 선언하는이유: 데이터 값을 바꿔야하기때문(props는 변경불가)
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        }
        this._changeValue= this._changeValue.bind(this);
    }
    _changeValue(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
     render() {
        console.log(this.state.title)
        return(
            <article>
                <h2>Update</h2>
                <form onSubmit={function(e){
                    e.preventDefault();
                    this.props._onUpdateContent(
                        this.state.id,
                        this.state.title,
                        this.state.desc
                    )
                }.bind(this)}>
                    <input type="hidden" name="id" value={this.state.id}></input>
                    <p><input type="text" 
                            name="title" 
                            placeholder="title"
                            value={this.state.title}
                            onChange={this._changeValue}
                            />
                    </p>
                    <p><textarea name="desc" 
                        placeholder="description"
                        value={this.state.desc}
                        onChange={this._changeValue}>
                        </textarea></p>
                    <p><input type="submit" value="submit"/></p>
                </form>
            </article>
        )
    }
}

export default UpdateComponent;