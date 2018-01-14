import React, { Component, Children } from 'react';
class Link extends React.Component {
    constructor(props) {
        super(props);
        // this.setState = {
        //     SHOW_ALL,
        //     SHOW_COMPLETED,
        //     SHOW_ACTIVE,
        // }
    }

    Click() {
        console.log("a click");
    }
    render() {
        return (
            <a href="#" onClick={e => {
                e.preventDefault();
                this.Click();
            }}>{this.props.filter}</a>

        )
    }
}

export default Link;