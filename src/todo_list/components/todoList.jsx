import React, { Component } from 'react'
import Todo from './todo';
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        }
    }
    onTodoClick = index => {
        console.log("index:", index)
        console.log("get index");
    }

    render() {
        return (
            <div className='todoList'>
                {this.state.todos.map((item, index) => {
                    return <Todo key={index} onClick={() => this.onTodoClick(index)}>{item}</Todo>
                })}
            </div>
        )
    }

}

export default TodoList;