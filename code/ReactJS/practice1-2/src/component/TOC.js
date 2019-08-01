import React, { Component } from 'react';


class TOC extends Component {

    _getContentId = (e) => {
        e.preventDefault();
        this.props._onChangeContent(e.target.dataset.id);
    }

    render() {
        var data = this.props.data;
        var lists = [];
        for( var i = 0; i < data.length ; i ++) {
            lists.push(<li key={data[i].id}><a 
                href={"/content/"+ data[i].id}
                data-id={data[i].id}
                onClick={this._getContentId}>
                {data[i].title}</a></li>)
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        )
    }
}

export default TOC;