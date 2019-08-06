import React, { Component } from 'react';

class PhoneForm extends Component {
    // input = null
    // 16.3버전 이상에서만 아래처럼 가능
    input = React.createRef()

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
        this.props._phoneForm(
            // this.state
            this.state.name,
            this.state.phone
        )
        this.setState({
            name: '',
            phone: ''
        })
        // this.input.focus();
        // 16.3버전 이상에서만 아래처럼 가능
        this.input.current.focus();
    }
    render() {
        return (
            <form onSubmit={this._onSubmitForm}>
                <input 
                    name="name"
                    placeholder="이름"
                    onChange={this._handleChange} 
                    value={this.state.name}
                    // ref={ref => this.input = ref}
                    // 16.3버전 이상에서만 아래처럼 가능
                    ref={this.input}
                    />
                <input 
                    name="phone"
                    placeholder="전화번호"
                    onChange={this._handleChange}
                    value={this.state.phone}
                    />
                {/* {this.state.name}<br/>
                {this.state.phone} */}
                <button>submit</button>
            </form>
        );
    }
}

export default PhoneForm;