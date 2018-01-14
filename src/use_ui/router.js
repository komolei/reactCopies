import React, { Component } from 'react';
import { render } from 'react-dom';
// import {  Router, Route, Link } from 'react-router';
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'
import Name from './container/name'; //记得使用容器组件
// import App from './components/app';
import App from './container/app';
const BasicRouter = () => {
    return (
        <Router>
            <Route  path='/' component={App}></Route>
        </Router>
    )

}


export default BasicRouter;