import React from 'react';

class Topic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 33,
        }
    }
    render() {
        return (
            <div>
                <div>{this.props.name}</div>
                <p>{this.state.age}</p>
            </div>
        )
    }
}

export {
    Topic
}