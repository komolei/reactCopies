import React, { Component } from 'react';
// import { Button, Icon, Transition } from 'semantic-ui-react';
import { Menu, Segment, Item, Container, List, Icon, Image, Pagination, Grid } from 'semantic-ui-react'
// import { Map, Set, List } from 'immutable';
import * as Im from 'immutable'
import _ from 'lodash';
import GridColumn from 'semantic-ui-react/dist/commonjs/collections/Grid/GridColumn';
export default class Page extends React.Component {
    constructor(props) {
        super(props)
        // this.html = 222;
        this.state = {
            html: null,
            activeItem: 'ALL'
        }
    }
    // handleItemClick = (e, { name }) => {this.setState({ activeItem: name });this.props.refresh(name.toLowerCase())}
    handleItemClick = (e, { name }) => { this.setState({ activeItem: name }); this.props.refresh(name.toLowerCase()) }
    // use debounce
    wrapHandleItemClick = _.debounce(this.handleItemClick, 500, { 'leading': false, 'trailing': true, 'maxWait': 2000 })
    icon = (top, tab) => {
        if (top) return 'heart'; switch (tab) {
            case 'share': return 'share';
            case 'ask': return 'question';
            case 'weex': return 'wechat';
            default: return 'angellist';
        }
    }

    // _.debounce(func, wait, options, ${options.leading}, ${options.maxWait}, ${options.trailing})

    componentWillMount() {
        // this.props.refresh();
    }
    render() {
        // use immutable && lodash
        // const map = Im.Map({ a: 1, b: 2, c: 3 })
        // const arr = Im.List([1, 2, 3, 4]);
        // const sum = (x, y, z) => `x:${x},y:${y},z:${z}`

        // console.log('res', _.curry(sum)(3, 4, 9));
        // console.log('res', _.partial(sum,_,2)(4,5));
        // console.log('res', _.partial(sum,2)(4,5));
        // console.log('this props info2', this.props.info);
        const { info, refresh } = this.props;
        const { activeItem } = this.state
        // let html = info.map((item, index) => <li key={index}>{item.id}</li>);
        let html = info.map((item, index) => (
            <List.Item key={index}>
                <Image avatar src={item.author.avatar_url} />
                {/* <List.Icon name={this.icon(item.top, item.tab)} verticalAlign='bottom' /> */}
                {/* <List.Content floated='left'> */}
                <List.Content >
                    <List.Icon name={this.icon(item.top, item.tab)} size='large' />
                    {item.reply_count}
                    / {item.visit_count}
                    {item.title}
                </List.Content>
                {/* </List.Content> */}
            </List.Item>
        )
        );
        return (
            <Grid colums={1} divided>
                <Grid.Row>
                    <Grid.Column >
                        <Segment inverted>
                            <Menu inverted secondary>
                                <Menu.Item name='ALL' active={activeItem === 'ALL'} onClick={this.wrapHandleItemClick} />
                                <Menu.Item name='GOOD' active={activeItem === 'GOOD'} onClick={this.wrapHandleItemClick} />
                                <Menu.Item name='SHARE' active={activeItem === 'SHARE'} onClick={this.wrapHandleItemClick} />
                                <Menu.Item name='ASK' active={activeItem === 'ASK'} onClick={this.wrapHandleItemClick} />
                                <Menu.Item name='JOBS' active={activeItem === 'JOBS'} onClick={this.wrapHandleItemClick} />
                            </Menu>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <List divided floated='left' verticalAlign='middle' style={{width:'100%'}}>
                            {/* {!info.length ? 'no data' : html} */}
                            {!info.length ? this.props.refresh('all') : html}
                        </List>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Pagination defaultActivePage={0} totalPages={10} onChange={e => _.debounce(this.refresh, 500, { 'leading': false, 'trailing': true, 'maxWait': 2000 })} ></Pagination>
                </Grid.Row>
            </Grid>

        )
    }
}