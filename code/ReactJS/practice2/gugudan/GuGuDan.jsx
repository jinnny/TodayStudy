const React = require('react');
const { useState, useRef } = React;


const GuGuDan = () => {
    // state, setState 세트라 보면됨.(각각 선언해서 사용.)
    // 비구조화할당..
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null);

    const _onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const _onSubmitForm = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {
            setResult('정답' + value );
            // 옛날 state를 활용하는 경우에는 hooks 도 class형처럼 함수를 사용한다.
            // setResult((prevResult) => '정답' + prevResult );
            // ex) setCounter((c) = > c + 1 )
            setFirst(Math.ceil(Math.random() * 9 ));
            setSecond(Math.ceil(Math.random() * 9 ));
            setValue('');
            inputRef.current.focus();
            // setState를 모아서 한번에 처리함(비동기로 처리함) 그래서 render()가 한번만 일어남.
        } else {
            setResult('틀렸습니다.')
            setValue('');
            inputRef.current.focus();
        }
    }

    return (
        <React.Fragment>
            <p>{first} 곱하기 {second} 는?</p>
            <form onSubmit={_onSubmitForm}>
                <input onChange={_onChangeInput} value={value} ref={inputRef} />
                <button className="submit-btn" labelFor="">입력!</button>
            </form>
            <div id="result">{result}</div>
        </React.Fragment>
    )
}


module.exports = GuGuDan;
