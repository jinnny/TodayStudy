import React, { Component } from 'react';
import Try from './Try';

_getNumbers = () => {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for ( let i = 0 ; i < 4; i += 1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)) , i)[0];
        array.push(chosen);
    }
    return array
}

class NumberBaseBall extends Component {
    constructor(props){
     super(props);
     this.state = {
         result: '',
         value: '',
         answer: _getNumbers(),
         tries: []
     }   
    };

    _onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.value === this.state.answer.join('')) {
            this.setState({
                result: '홈런',
                tries: [...this.state.tries, { try: this.state.value, result: '홈런'}]
            })
        } else {
            const answerArray = this.state.value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (this.state.tries.length >= 9) {
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(',')} 였습니다`,
                })
                alert('게임리셋')
                this.setState({
                    value: '',
                    answer: _getNumbers(),
                    tries: [],
                })
            }  else {
                for ( let i = 0 ; i< 4; i += 1) {
                    
                }
            }
        }
    }
    
    _onChangeInput = () => {
    }

    fruits = [
        {name: '사과', taste:'달다'},
        {name: '바나나', taste:'맛있다'},
        {name: '자두', taste:'시그럽다'},
        {name: '포도', taste:'시다'}
    ]

    render() {
        return (
            <>
            <h1>{this.state.result}</h1>
            <form onSubmit={this._onSubmitForm}>
                <input maxLength={4} value={this.state.value} onChange={this._onChangeInput}/>
            </form>
            <p>시도 : {this.state.tries.length}</p>
            <ul>
                {this.fruits.map((v, i)=> {
                    return (<Try key={v.name + i} value={v.name} index={i} />)
                })};
            </ul>
            </>
        )
    }
}


export default NumberBaseBall;