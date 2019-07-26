import React, { Component } from 'react';
import Movie from './Movie';
import styled, { createGlobalStyle, css, keyframes, ThemeProvider } from 'styled-components';
import theme from './theme'

// injectGlobal -> createGlobalStyle로 변경됨

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
  }
`


// const movieTitles = [
//   "Matrix",
//   "Full Metal Jacket",
//   "Oldboy",
//   "Star Wars"
// ]

// const movieImgs = [
//   "https://images-na.ssl-images-amazon.com/images/I/51w2PHrb8IL._SY445_.jpg",
//   "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg",
//   "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
//   "https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg"
// ]

// const movies = [
//   {
//     title: "Matrix",
//     poster: "https://images-na.ssl-images-amazon.com/images/I/51w2PHrb8IL._SY445_.jpg",
//   },
//   {
//     title: "Full Metal Jacket",
//     poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg",
//   },
//   {
//     title: "Oldboy",
//     poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
//   },
//   {
//     title: "Star Wars",
//     poster: "https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg"
//   }
// ]

// component lifecycle
// Render: WillMount() -> render() -> DidMount()
// Update: WillReceiveProps() -> shouldComonentUpdate() == ture -> WillUpdate() -> render() -> DidMount()

// 컴포넌트가 존재하기 시작하면 will mount -> render -> did mount 순서로 진행됩니다.
// (ex. will mount 시에 api를 다운 받고 render로 뿌려준 다음에 didmount시에 마무리 해줍니다.)
// setState로 변경시에???
// componentWillReceiveProps() -> shoudComponent() -> componentWillUpdate()
// componentWillReceiveProps 이미 컴포넌트를 받았다는 뜻입니다.
// shoudComponent에서 props를 비교해서 이전과 새것과 다르면 업데이트를 =true 합니다.
// 다음 will update로 넘어가고 render후에 didmount합니다.

// state(component 내부에 존재) 가 바뀔때마다 component는 다시 render()함
// state는 직접 접근 변경하면 render 설정이 작동하지않음. 
// this.setState 를 사용해야함 (컴포넌트가 mount 할때마다 state를 변경해줌)

// 기존코드 dump comonent -> props와 return 값만 가짐. state, lifecycle 없음.
// function App() {
//   return (
//     <div className="App">
//       {/* <Movie title={movieTitles[0]} poster={movieImgs[0]}/>
//       <Movie title={movieTitles[1]} poster={movieImgs[1]}/>
//       <Movie title={movieTitles[2]} poster={movieImgs[2]}/>
//       <Movie title={movieTitles[3]} poster={movieImgs[3]}/> */}
//       {/* .map(): 조건을 통해 새로운 배열을 만들어줌. */}
//       {movies.map((movie, index) => {
//         return <Movie title={movie.title} poster={movie.poster} key={index}/>
//       })}
//     </div>
//   );
// }

class App extends Component{
  state = {
    // movies: [
    //   {
    //     title: "Matrix",
    //     poster: "https://images-na.ssl-images-amazon.com/images/I/51w2PHrb8IL._SY445_.jpg",
    //   },
    //   {
    //     title: "Full Metal Jacket",
    //     poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg",
    //   },
    //   {
    //     title: "Oldboy",
    //     poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
    //   },
    //   {
    //     title: "Star Wars",
    //     poster: "https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg"
    //   },
    //   {
    //     title: "The Bourne Identity",
    //     poster: "https://mblogthumb-phinf.pstatic.net/20121013_30/cog77777_1350118340418XQ2Vv_JPEG/1.jpg?type=w2"
    //   }
    // ]
  }

  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({
  //       movies: [
  //         //...this.state.movies이 없으면, 전체 영화리스트를 대체함.
  //         //(...this.state.movies의 기능: 이전 리스트를 두고, 하나더 추가)
  //         // 앞에 위치하면 그 뒤로 하나더 추가, 추가할 내용이 앞에있으면 기존 리스트 앞에 추가됨.
  //         // ...this.state.movies,
  //         // {
  //         //   title: "The Bourne Identity",
  //         //   poster: "https://mblogthumb-phinf.pstatic.net/20121013_30/cog77777_1350118340418XQ2Vv_JPEG/1.jpg?type=w2"
  //         // }
  //         {
  //           title: "Matrix",
  //           poster: "https://images-na.ssl-images-amazon.com/images/I/51w2PHrb8IL._SY445_.jpg",
  //         },
  //         {
  //           title: "Full Metal Jacket",
  //           poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg",
  //         },
  //         {
  //           title: "Oldboy",
  //           poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
  //         },
  //         {
  //           title: "Star Wars",
  //           poster: "https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg"
  //         },
  //         {
  //           title: "The Bourne Identity",
  //           poster: "https://mblogthumb-phinf.pstatic.net/20121013_30/cog77777_1350118340418XQ2Vv_JPEG/1.jpg?type=w2"
  //         }
  //       ]
  //     })
  //   }, 5000)
  // }

  // promise -> 비동기(다른작업 스케쥴링 가능), 시나리오 잡는 방법을 만듦(성공했을때, 실패했을때)
  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie title={movie.title} poster={movie.medium_cover_image} key={movie.id} genres={movie.genres} synopsis={movie.synopsis}/>
    })
    return movies
  }

  _getMovies = async () => {
    // this._callApi() 기능이끝나는 것을 기다려서 return 값을 movies에 넣음
    const movies = await this._callApi();
    // 아래는 this._callApi() 기능이 끝나면 실행됨(성공,실패 무관 끝나기만 하면됨)
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    // 모던 js에 => 는 return 의 의미가 포함되어있어 return을 쓰지않아야함
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render () {
      return (
        <div className="App">
          {/* <Movie title={movieTitles[0]} poster={movieImgs[0]}/>
          <Movie title={movieTitles[1]} poster={movieImgs[1]}/>
          <Movie title={movieTitles[2]} poster={movieImgs[2]}/>
          <Movie title={movieTitles[3]} poster={movieImgs[3]}/> */}

          {/* .map(): 조건을 통해 새로운 배열을 만들어줌. */}
          {/* {this.state.movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index}/>
          })} */}

          {/* this.state.movies 가 있다면, 무비리스트 출력 없으면 로딩텍스트 출력 */}
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Container>
              {/* {/* <Button success>hihi</Button> */}
              {/* 조건값들이 모두 props임 */}
              {/* <Button danger rotationTime={5}>woo</Button>
              <Anchor href="http://google.com">Go to Home</Anchor> */}
              {/* <Input placeholder="hello"/>
              <Button>button</Button> */}
              <Form />
            </Container>
          </ThemeProvider>
          {this.state.movies ? this._renderMovies() : 'Loading'}
        </div>
      );
   }
}

const Card = styled.div`
  background-color: #ccc;
`


const awsomeCard = css`
  border-radius: 10px;
  width: 200x;
  backgorund-color: blue;
  display: inline-block;
`

const Input = styled.input.attrs({
  required: true
})`
  border-radius: 1px;
  ${awsomeCard}
`

const Container = styled.div`
  height: 100vh;
  width: 100%;
  ${awsomeCard}
  background-color: red;
  ${Card}{
    background-color: black;
  }
`

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: whith;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => props.danger ? "black" : "blue"};
  ${props => {
    if(props.danger){
      // v4. css 추가, import에도 css 추가 필요
      // https://www.styled-components.com/docs/api#css
      return css`animation: ${rotation} ${props.rotationTime}s linear infinite`
    }
  }}
  color: ${props => props.theme.successColor};
`;

// extend는 사용 x,  styled() 형태로 사용해야함.
const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
  color: #fff;
`;

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`

const Form = () => (<Card><Button>hi</Button></Card>)

export default App;
