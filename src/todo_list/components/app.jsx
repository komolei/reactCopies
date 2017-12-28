import React, { Component } from 'react'
import TodoList from './todoList';
import Footer from './footer';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='app'>
                <TodoList />
                <Footer />
            </div>
        )
    }
}

export default App;