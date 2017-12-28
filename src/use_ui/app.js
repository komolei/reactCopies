import React from 'react'
import ReactDom from 'react-dom';
import 'babel-polyfill';
// import App from './containers/todoApp';
import './scss/index.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers/reducer';
import ReduxThunk from 'redux-thunk';
import Nav from './components/nav';
import Name from './container/name'; //我去。要引入container组件。。香蕉皮

let store = applyMiddleware(ReduxThunk)(createStore)(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState());
const app = document.querySelector('#app');
ReactDom.render(
    <Provider store={store}>
        {/* <Nav /> */}
        <Name />
    </Provider>
    , app)