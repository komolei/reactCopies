import React from 'react';
import ReactDom from 'react-dom';
// import TodoList from './components/todo_list';
// import {
//     Provider
// } from './react-redux';
// import DevTools from './containers/DevTools';
// const app = document.querySelector('#app');
// // ReactDom.render( < App / > , app);
// ReactDom.render( < TodoList / > , app); 
import 'babel-polyfill';
import Root from './containers/root'
// import Store from './store/store'
// import {
//     addTodo,
//     toggleTodo,
//     setVisiblityFilter,
//     VisiblityFilter,
// } from './actions/actions';
// console.log(Store.getState());

// let unsubscribe = Store.subscribe(() =>
//     console.log(Store.getState())
// )
// Store.dispatch(addTodo('Learn about actions'))
// Store.dispatch(addTodo('Learn about reducers'))
// Store.dispatch(addTodo('Learn about Store'))
// Store.dispatch(toggleTodo(0))
// Store.dispatch(toggleTodo(1))
// Store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
// unsubscribe();
const app = document.querySelector('#app');
ReactDom.render( < Root / > , app);