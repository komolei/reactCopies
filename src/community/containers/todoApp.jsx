import React, { Component } from 'react'
import '../scss/index.scss'
// import Todos from '../components/todos'
// import Filter from '../components/filter'
// import store from '../reducers/reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { appReducer } from '../reducers/reducer';
// console.log(typeof appReducer);
// let store = createStore(appReducer);
// // let store =createStore((...arg)=>{console.log(arg)})//会init reducer的

// // console.log('store:',store);
// console.log('store.getState()', store.getState());
// // store.dispatch({type:'CHANGE_NAME',name:'clc'})
// import { changeName } from '../reducers/reducer';
// store.dispatch(changeName('xxxxx'));
// console.log('store.getState()1', store.getState());
// // store.dispatch({type:'ADD_TODO',id:11,text:'xiaojiahuo'})
// store.dispatch(addTodo('small cookie'));
// console.log('store.getState()2', store.getState());
//middle ware
import ReduxThunk from 'redux-thunk';

let store = applyMiddleware(ReduxThunk)(createStore)(appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


    store.dispatch(changeName('xixi'));
// import Name1 from '../components/name';
import Name1 from './Name';
class Root extends React.Component {
    render() {
        return (
            <div className='root'>
                <p>Todo List App</p>

                {/* <Todos />
                    <Filter /> */}
                <Provider store={store}>
                    {/* <Name1 context={undefined}></Name1> */}
                    <Name1></Name1>
                </Provider>
            </div>
        )
    }
}

export default Root;