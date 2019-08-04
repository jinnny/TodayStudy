const React = require('react');
// const { Component } = React;
const { useState, useRef } = React;

const WordRelay = () => {
    const [word, setWord] = useState('제로초');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word.substr(word.length - 1) === value[0] ) {
            setResult('정답');
            setWord(value);
            setValue('');
            inputRef.current.focus();
        }else {
            setResult('오답');
            setValue('');
            inputRef.current.focus();
        }
    };

    const onChangeInput = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    };


    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <label htmlFor="wordInput">글자를 입력하세요</label>
                <input ref={inputRef} 
                type="text" className="wordInput" id="wordInput" value={value}
                onChange={onChangeInput}
                />
                <button>입력</button>
            </form>
            <p>{result}</p>
        </>
    )
        
};


// class WordRelay extends Component {
//     state = {
//         word: '제로초',
//         value: '',
//         result: ''
//     }

//     onSubmitForm = (e) => {
//         e.preventDefault();
//         if(this.state.word.substr(this.state.word.length - 1) === this.state.value[0] ) {
//             this.setState({
//                 word: this.state.value,
//                 result: '정답',
//                 value: ''
//             });
//             this.input.focus();
//         }else {
//             this.setState({
//                 result: '오답',
//                 value: ''
//             })
//         }
//     }

//     onChangeInput = (e) => {
//         e.preventDefault();
//         this.setState ({
//             value: e.target.value
//         })
        
//     }

//     input;

//     onRefInput = (c) => {
//         this.input = c;
//     }
//     render() {
//         return (
//             <>
//                 <div>{this.state.word}</div>
//                 <form onSubmit={this.onSubmitForm}>
//                     <input ref={this.onRefInput} 
//                     type="text" value={this.state.value}
//                     onChange={this.onChangeInput}
//                     />
//                     <button>입력</button>
//                 </form>
//                 <p>{this.state.result}</p>
//             </>
//         )
//     }
// }


module.exports = WordRelay;