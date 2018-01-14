import React, { Component } from 'react';
import '../scss/todo_list.scss';
class TodoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                This is the todo list.
            </div>
        )
    }
}
export default TodoList;