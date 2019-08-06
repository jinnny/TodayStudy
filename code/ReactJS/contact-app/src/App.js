import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfo from './components/PhoneInfo';
import PhoneInfoList from './components/PhoneInfoList';


class App extends Component {
  id = 2;
  state = {
    information: [
      { id: 0, name: '김강민', phone: '010'},
      { id: 1, name: '찐', phone: '010'},
    ],
    keyword: ''
  }
  _handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }
  _getInformation =  (_name, _phone) => {
    const { information } = this.state;
    let _information = information.concat({
      name: _name, phone:_phone, id: this.id ++
    });
    this.setState({
      information: _information
    })
  }
  _handleRemove = (_id) => {
    // const { information } = this.state.information;
    // console.log(information)
    this.setState({
      information: this.state.information.filter( info => info.id !== _id )
    })
  }
  _handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => {
          if ( info.id === id) {
            return {
              id,
              ...data
            }
          }
          return info;
        }
      )
    })
  }
  render () {
    return (
      <div className="App">
        <PhoneForm
          _phoneForm={this._getInformation}/>
          {/* {JSON.stringify(this.state.information)} */}
          <input 
            value={this.state.keyword}
            onChange={this._handleChange}
            placeholder="검색.."
            ></input>
        <PhoneInfoList 
          infoData={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )}
          removeList={this._handleRemove}
          updateList={this._handleUpdate}
          />
      </div>
    );
  }
}

export default App;
