import React from 'react';
import { render } from 'react-dom';
// import TodoList from '../components/todo_list';
import App from '../components/app'
import '../scss/todo_list.scss'
import {
    Provider
} from 'react-redux';
import { createStore } from 'redux';
// let store=
export default class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: 'komolei',
        }
    }
    render() {
        return (
            <div className='root'>
                <App />
            </div>
        )
    }
}