import React, { Component } from 'react';


class TOC extends Component {
    render(){
        var data = this.props.data;
        var lists = [];
        for ( var i = 0; i < data.length; i ++ ){
          lists.push(<li key={data[i].id}>
              <a 
                href={"/content/"+ data[i].id}
                data-id={data[i].id}
                onClick={function(e){
                    e.preventDefault();
                    this.props._onChangeContent(e.target.dataset.id);
                }.bind(this)}
                >{data[i].title}</a></li>);  
        }
        return (
            <nav>
                {lists}
            </nav>
        )
    }
}


export default TOC;