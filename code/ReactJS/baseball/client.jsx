const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root')

const NumberBaseBall = require('./NumberBaseBall');

const Hot =  hot(NumberBaseBall);

ReactDom.render(<NumberBaseBall />, document.querySelector('#root'))