import React, { Component } from 'react'
import Rx from 'rxjs/Rx';

export default class Rxjs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 0,
        };
        this.subject = new Rx.Subject();
        this.subject.mapTo(11)
            .scan((origin, next) => origin + next)
            .subscribe(val => this.setState({ text: val }))
    }

    render() {
        return (
            <div className='rxjs'>
                <p>{this.state.text}</p>
                <button onClick={e => this.subject.next(e)}>change</button>
            </div>
        )
    }
}