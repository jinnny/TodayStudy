import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        infoData: []
    }
    render() {
        console.log('rendering list');
        const { infoData, removeList, updateList } = this.props;
        const list = infoData.map(
            info => (<PhoneInfo 
                updateList={updateList}
                removeList={removeList} 
                info={info} 
                key={info.name + info.id} 
                />)
        )
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;