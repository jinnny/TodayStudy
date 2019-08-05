import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
      }

    _handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    _onSubmitForm = (e) => {
        e.preventDefault();
        console.log(e.target.name.value)
        this.props._phoneForm(
            this.state.name,
            this.state.phone
        )   
    }
    render() {
        return (
            <form onSubmit={this._onSubmitForm}>
                <input 
                    name="name"
                    placeholder="이름"
                    onChange={this._handleChange} 
                    value={this.state.name}
                    />
                <input 
                    name="phone"
                    placeholder="전화번호"
                    onChange={this._handleChange}
                    value={this.state.phone}
                    />
                {this.state.name}<br/>
                {this.state.phone}
                <button>submit</button>
            </form>
        );
    }
}

export default PhoneForm;