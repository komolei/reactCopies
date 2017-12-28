import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
// import Name from './name';
// import Nav from './nav'; //估计又是没有引入container中组件的error
import Nav from '../container/nav' //真的是。。香蕉皮
import Login from '../container/login';
import { Grid } from 'semantic-ui-react';
export default class App extends React.Component {
    render() {
        console.log('this app props status:', this.props.status);
        console.log('this app props is', this.props);
        console.log('\n');
        return (
            <Grid divided='vertically' columns={16}>
                <Grid.Row>
                    {/* <Nav /> */}
                    {/* {this.props.children} */}

                    {/* <Route path={`${this.props.match.url}`} component={Nav}></Route> */}
                    {/* <Route path='/:id' component={Nav}></Route> */}
                    {/* <NavLink to='/'></NavLink> */}
                    // <Route path='/' component={Nav}></Route>
                    {/* <Route exact path='/' render={({ location, key }) => (<Nav key={this.props.location} params={match.params})}}/> */}
                    {/* <Route exact path="/" render={({ match }) => (
                    <Nav />
                )} /> */}
                </Grid.Row>
            </Grid>
        )
    }
}