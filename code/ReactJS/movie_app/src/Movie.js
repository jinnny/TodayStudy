// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// 컴포넌트 > render > return > JSX

// smart component:  state, lifecycle 존재(아래의 형태)
// class Movie extends Component{
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }
//     render () {
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster}/>
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }

// dump component 단순 출력할때 사용. (props와 return만 가짐)
function Movie({title, poster}){
   return ( 
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
        </div>
    )
}


// props: 부모컴포넌트가 자식컴포넌트에게 정보(데이터)를 전달할때 사용함
// smart component:  state, lifecycle 존재(아래의 형태), this 사용
// class MoviePoster extends Component {
//     static propTypes = {
//         poster: PropTypes.string.isRequired
//     }
//     render () {
//         // console.log(this.props);
//         return (
//             <img src={this.props.poster} alt=""/>
//         )
//     }
// }

// dump component 단순 출력할때 사용. (props와 return만 가짐)
function MoviePoster({poster}) {
    return (
        <img src={poster} alt=""/>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}


export default Movie;

