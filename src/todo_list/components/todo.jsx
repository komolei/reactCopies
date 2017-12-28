import React, { Component } from 'react'
class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text,
            completed: false,
        }
    }
    Click = () => {
        console.log('click');
    }
    render() {
        return (
            // <div className='todo' style={text-decoration:completed?'line':'none'}>
            <div className='todo' onClick={e => this.Click()} >
                {this.state.text}
            </div>
        )
    }
}

export default Todo;