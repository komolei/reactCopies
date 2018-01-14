import Topic from './topic';
import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Box extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            choose: false,
        }
        // this.change = this.change.bind(this);
    }
    change = () => {
        console.log(this)
        this.setState({ choose: !this.state.choose })
    }
    render() {
        const { choose } = this.state;
        return (
            <div className="box">
                < Topic number={undefined} sure={choose} changeState={this.change}></Topic>
            </div>
        )
    }
}
export default Box;