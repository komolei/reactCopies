// const store = {
//     content: '',
//     is_visible: true,
//     data: [], //index 消息
//     tab: '',
//     topic_info: {}, //话题信息
//     user_info: {}, //用户的信息
//     accesstoken: "",
//     messages: {}, //获取已读和未读消息
//     messages_count: 0, //获取未读消息数
//     username: '', //固定登录之后的用户名
// }


import React from 'react'
import ReactDom from 'react-dom';
import 'babel-polyfill';
// import App from './containers/todoApp';
import '../scss/index.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from '../reducers/reducer';
import ReduxThunk from 'redux-thunk';
// import Nav from '../components/nav';
import Name from '../container/name'; //我去。要引入container组件。。香蕉皮

let store1 = applyMiddleware(ReduxThunk)(createStore)(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// console.log(store.getState());
// const app = document.querySelector('#app');
// ReactDom.render(
//     <Provider store={store}>
//         {/* <Nav /> */}
//         <Name />
//     </Provider>
//     , app)

const Store = ({ store = applyMiddleware(ReduxThunk)(createStore)(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) }) => {
    return (
        <Provider store={store}>
            {/* <Name /> */}
            <div>dddd</div>
        </Provider>
    )
}
export default Store;