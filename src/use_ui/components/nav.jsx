import React, { Component } from 'react'
import { Button, Icon, Transition, Container, Menu } from 'semantic-ui-react';
import {
    BrowserRouter as Router,
    Route,
    Link, Switch
} from 'react-router-dom'
// import Name from '../container/name'
import Name from '../container/name';
import Login from '../container/login';
import Logon from '../container/logon';
import Page from '../container/page';
export default class Nav extends React.Component {
    constructor(status, name, props) {
        super(props);
        this.name = 'komolei';
        // this.status = false;
    }
    render() {
        // console.log('this name:', this.name, this.status);
        // const { status, match } = this.props;
        const { match, status } = this.props;
        // const { status } = this;
        console.log('status:', status, 'this.props', this.props, );
        console.log('this.match.url', this.props.match.url);
        console.log('match', match);
        return (
            // <div className='nav'>
            <Container>
                <Menu >
                    <Link to={`${match.url}`}>
                        <Button content='Index' basic color='teal'></Button>
                    </Link>
                    <Link to="/logIn">
                        <Transition visible={!status} animation='scale' duration={500}>
                            <Button animated basic color='teal'>
                                <Button.Content visible>
                                    Log in
                            </Button.Content>
                                <Button.Content hidden>
                                    <Icon name='sign in' />
                                </Button.Content>
                            </Button>
                        </Transition>
                    </Link>
                    <Link to="/logOn">
                        <Transition visible={!status} animation='scale' duration={500}>
                            <Button animated='vertical' basic color='teal'>
                                <Button.Content visible>
                                    Log on
                            </Button.Content>
                                <Button.Content hidden >
                                    <Icon name='user' />
                                </Button.Content>
                            </Button>
                        </Transition>

                    </Link>
                    <Link to="/newMsg">
                        <Transition visible={status} animation='scale' duration={500}>
                            <Button animated='vertical' basic color='teal' >
                                <Button.Content visible>
                                    未读消息
                            </Button.Content>
                                <Button.Content hidden >
                                    <Icon name='newspaper' />
                                </Button.Content>
                            </Button>
                        </Transition>
                    </Link>
                    {/* <Link to='/logOut'> */} 
                        <Transition visible={status} animation='scale' duration={500}>
                            <Button animated='vertical' basic color='teal' onClick={e => this.props.logOut()}>
                                <Button.Content visible>
                                    Log Out
                            </Button.Content>
                                <Button.Content hidden >
                                    <Icon name='log out' />
                                </Button.Content>
                            </Button>
                        </Transition>
                    {/* </Link> */}
                </Menu >

                <Switch>
                    <Route exact path="/" component={Page}></Route>
                    <Route exact path={`/logIn`} component={Login}></Route>
                    <Route exact path="/logOn" component={Logon}></Route>
                </Switch>
            </Container>

        )
    }
}

