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

// dump component 단순 출력할때 사용. (props와 return만 가짐: return 이 다!)
function Movie({title, poster, genres, synopsis}){
   return ( 
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie__Synopsis">{synopsis}</p>
            </div>
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
function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}

function MovieGenre({genre}) {
    return (
        <mark className="Movie__Genre">{genre} </mark>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

MovieGenre.prototype = {
    genre: PropTypes.string.isRequired
}


export default Movie;

