import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {
    state = {
        editing: false,
        name: '',
        phone: ''
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextState !== this.state) {
            return true;
        }
        return this.props.info !== nextProps.info;
    }
    
    _handleRemove = () => {
        const {info, removeList} = this.props;
        removeList(info.id);
        console.log(removeList)
    }
    _handleToggleEdit = () => {
        // true -> false
        const { info, updateList } = this.props;
        if (this.state.editing ) {
         updateList(info.id, {
             name: this.state.name,
             phone: this.state.phone
         })
        } else {
          this.setState({
              name: info.name,
              phone: info.phone
          })   
        }
        // false -> true
        this.setState({
            editing: !this.state.editing
        })
    }
    _handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render () {
        const { name, phone, id } = this.props.info;
        const { editing } = this.state;
        const style = {
            border: '1px solid black'
        }
        return (
            <div style={style}>
                {
                    editing ? (
                        <Fragment>
                          <input 
                                name="name"
                                placeholder="이름"
                                onChange={this._handleChange} 
                                value={this.state.name}
                                /><br />
                            <input 
                                name="phone"
                                placeholder="전화번호"
                                onChange={this._handleChange}
                                value={this.state.phone}
                                />
                        </Fragment>

                    ): (
                        <Fragment>
                            <p><strong>{id}</strong></p>
                            <p><strong>{name}</strong></p>
                            <p><strong>{phone}</strong></p>
                        </Fragment>
                    )
                }
                <button onClick={this._handleRemove}>삭제</button>
                <button onClick={this._handleToggleEdit}>
                    { editing ? '적용': '수정' }
                </button>
            </div>
        );
    }
}

export default PhoneInfo;