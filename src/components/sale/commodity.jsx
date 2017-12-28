import React, { Component } from 'react';
class Commodity extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="commodity">
                {this.props.price}
                {this.props.sum.map((item, index) => <li key={index}>{item}</li>)}
            </div>
        )
    }
}

export {
    Commodity
}