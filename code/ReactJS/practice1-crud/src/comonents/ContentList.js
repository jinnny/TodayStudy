import React, { Component } from 'react';

class ContentList extends Component {
    render() {
        console.log(this.props.data);
        var lists = [];
        var data = this.props.data;
        for(var i = 0; i < data.length; i ++) {
           lists.push(<li key={data[i].id}>
               <a href={"content/"+this.props.data[i].id}
                    data-id={data[i].id}
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeContent(e.target.dataset.id);
                    }.bind(this)}
               >
                    {this.props.data[i].title}
               </a></li>);
        }
        console.log(lists)
        return (
            <nav>
                <ul>
                  {lists}
                </ul>
            </nav>
        )
    }
}

export default ContentList;