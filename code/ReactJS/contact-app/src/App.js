import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfo from './components/PhoneInfo';


class App extends Component {
  id = 0;
  state = {
    information: [],
  }
  _getInformation =  (_name, _phone) => {
    let _information = this.state.information.concat({
      name: _name, phone:_phone, id: this.id ++
    });
    this.setState({
      information: _information
    })
  }
  render () {
    return (
      <div className="App">
        <PhoneForm
          _phoneForm={this._getInformation}/>
        <PhoneInfo />
      </div>
    );
  }
}

export default App;
