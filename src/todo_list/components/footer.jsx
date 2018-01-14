import React, { Component } from 'react'

import FilterLink from './link';
import Todo from './todo';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
        }
    };
    render() {
        return (
            <div className='footer'>
                <p>show:{''}</p>
                <FilterLink filter='SHOW_ALL'></FilterLink>
                <FilterLink filter='SHOW_COMPLETED'></FilterLink>
                <FilterLink filter='SHOW_ACTIVE'></FilterLink>
            </div>
        )
    }
}

export default Footer;