import React, { Component } from 'react';

class PhoneInfo extends Component {
    render() {
        const { name, phone, id} = this.props.info;
        const style = {
            border: '1px solid black'
        }
        return (
            <div style={style}>
                <p><strong>{name}</strong></p>
                <p><strong>{phone}</strong></p>
            </div>
        );
    }
}

export default PhoneInfo;