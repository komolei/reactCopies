import React, { Component } from 'react';
// import { Button, Icon, Transition } from 'semantic-ui-react';
import { Menu, Segment, Item, Container, List, Icon, Image } from 'semantic-ui-react'
// import { Map, Set, List } from 'immutable';
import * as Im from 'immutable'
import _ from 'lodash';
export default class Page extends React.Component {
    constructor(props) {
        super(props)
        // this.html = 222;
        this.state = {
            html: null,
            activeItem: 'home'
        }
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    icon = (top, tab) => {
        if (top) return 'heart'; switch (tab) {
            case 'share': return 'share';
            case 'ask': return 'question';
            case 'weex': return 'wechat';
            default: return 'angellist';
        }
    }
    componentWillMount() {
        this.props.refresh();
    }
    render() {
        console.log('this props info2', this.props.info);
        const { info } = this.props;
        const { activeItem } = this.state
        // let html = info.map((item, index) => <li key={index}>{item.id}</li>);
        let html = info.map((item, index) => (
            <List.Item key={index}>
                <Image avatar src={item.author.avatar_url} />
                <List.Content>
                    {item.replay_count}{item.visit_count}
                    <Icon name={this.icon(item.top, item.tab)}></Icon>
                    <List.Header>
                        {item.id}
                    </List.Header>
                </List.Content>
            </List.Item>
        )
        );
        return (
            <Container>
                <Segment inverted>
                    <Menu inverted secondary>
                        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
                        <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
                    </Menu>
                </Segment>
                <List>
                    <div>{!info.length ? 'no data' : html}</div>
                </List>
            </Container>

        )
    }
}