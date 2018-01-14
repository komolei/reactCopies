import React from 'react';
import ReactDom from 'react-dom';
// import App from '../components/app';
import TodoList from '../components/todo';
// import './app.scss';
import './todo_list.scss';

// import {
//     createDevTools
// } from 'redux-devtools';
// import LogMonitor from 'redux-devtools-log-monitor';

// export default createDevTools( <
//     LogMonitor / >
// );
const app = document.querySelector('#app');
// ReactDom.render( < App / > , app);
ReactDom.render( < TodoList / > , app);