import React, { Component } from 'react';
import { Button, Icon, Segment, Label, Input, Divider } from 'semantic-ui-react';
export default class Login extends React.Component {
    render() {
        console.log("this login props", this.props, '\n');

        return (
            <Segment padded>
                <Input type='text' icon='user outline' iconPosition='left' name='username' placeholder='username' />
                <Input type='email' icon='mail outline' iconPosition='left' name='email' placeholder='email' />
                <Input type='password' icon='lock' iconPosition='left' name='password' placeholder='password' />
                <Input type='password' icon='lock' iconPosition='left' name='surepassword' placeholder='surepassword' />
                <Button secondary onClick={e => this.props.userLogin()}>Log In</Button>
            </Segment>

        )
    }
}