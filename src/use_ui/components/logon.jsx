import React, { Component } from 'react';
import { Button, Icon, Segment, Label, Input, Divider } from 'semantic-ui-react';
export default class Logon extends React.Component {
    constructor(props) {
        super(props)
    }
    Logon() {
        let logon_info = {
            // accesstoken: this.name.inputRef.value,
            accesstoken: "aabfed3e-4c7e-4a3b-8bcc-cda2ae17df53",
            // username: this.name.value,
            // password: this.password.value,
        }
        // console.log('logon_info', logon_info);
        // console.log('input value', this.name.inputRef.value); //stackoverflow
        this.props.userLogon(logon_info);
    }
    render() {
        return (
            <Segment padded>
                <Input type='text' ref={input => this.name = input} icon='user outline' iconPosition='left' placeholder='username' />

                {/* <Input type='text' ref={username => this.name = "aabfed3e-4c7e-4a3b-8bcc-cda2ae17df53"} icon='user outline' iconPosition='left' name='username' placeholder='username' /> */}
                {/* <Input type='password' ref={password => this.password = password} icon='lock' iconPosition='left' name='password' placeholder='password' /> */}
                <Button secondary onClick={() => this.Logon()}>Log on</Button>
            </Segment>

        )
    }
}