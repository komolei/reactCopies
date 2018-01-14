import React from 'react'
// import ReactDom from 'react-dom';
import 'babel-polyfill';
import './scss/index.scss';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

// immutable
import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
const initialState = Immutable.Map();

import { reducer } from './reducers/reducer';
import ReduxThunk from 'redux-thunk';
// import { Router, Route, browserHistory } from 'react-router';
import {
    // syncHistoryWithStore,
    ConnectedRouter,
    routerReducer,
    routerMiddleware,
    push,
} from 'react-router-redux';
// import { Router, Route, browserHistory } from 'react-router'
import createHistory from 'history/createBrowserHistory';
import BasicRouter from './router';
const history = createHistory();
const middleware = routerMiddleware(history);
let reducer1 = combineReducers({ ...reducer, router: routerReducer });
const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(routerMiddleware(middleware)),
);
const initStore = createStore(reducer1, initialState, enhancer);

// const history=syncHistoryWithStore(browserHistory,initStore);

// const initStore = createStore(reducer1, composeEnhancers(applyMiddleware(routerMiddleware(history))));
// let store1 = applyMiddleware(ReduxThunk)(createStore)(reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = (
    // { store = applyMiddleware(ReduxThunk)(createStore)(reducer,
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) }
    { store = initStore }
) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <BasicRouter />
            </ConnectedRouter>
        </Provider>
    )
}

export default App;