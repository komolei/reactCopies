import React, { Component } from 'react'
import { Button,Icon } from 'semantic-ui-react';
class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='nav'>
                <Button content='Index' basic color='teal'></Button>
                <Button animated basic color='teal'>
                    <Button.Content visible>
                        Log in
                    </Button.Content>
                    <Button.Content hidden>
                        <Icon name='right arrow' />
                    </Button.Content>
                </Button>
                <Button animated='vertical' basic color='teal'>
                    <Button.Content visible>
                        Log on
                    </Button.Content>
                    <Button.Content hidden >
                        <Icon name='user' />
                    </Button.Content>
                </Button>
            </div>
        )
    }
}

export default Nav;