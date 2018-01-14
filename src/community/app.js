import React from 'react'
import ReactDom from 'react-dom';
import 'babel-polyfill';
import Root from './containers/todoApp';
const app = document.querySelector('#app');
ReactDom.render(
    < Root/>
, app)