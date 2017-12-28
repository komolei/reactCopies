import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Box from '../components/box'
import Nav from '../components/nav'
import ControlPanel from '../components/control_panel';
import '../scss/index.scss';
class Root extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='root' >
                <Box />
                {/* <Nav/> */}
                {/* <ControlPanel /> */}
            </div>
        )
    }
}

export default Root;