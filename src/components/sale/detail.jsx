import React from 'react';
import axios from 'axios';
export class SaleDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: new Date(),
            age: 24,
            str: '',
        }
        // this.changeStr = this.changeStr.bind(this); // 这样写太麻瓜了麻瓜了。所以采用arrow function
    }
    // event 
    //   changeStr() {
    //     // this.setState({ str: 'change string' });
    //     this.setState(prevState=>({
    //         str:'change string'
    //     }))
    // }

    // use arrow function   

     changeStr = (string) => {
        this.setState({ str: string })
        // console.log("this",this);
    };
    // changeStr(string){
    //     this.setState({str:string});
    // }

    // changeStr() {
    //     this.setState({ str: 'use e arrow' });
    // }
    // invoke e=>this.changeStr(e);
    componentWillMount() {
        console.log(`component will mount`)
        // this.state.name = 'I will mount component' //error
        this.setState({ str: 'xixi' })
    }
    componentDidMount() {
        console.log(`component did mount`)
        // this.state.name = 'I did mount component' //error
        this.setState({ age: 33 });
        console.log(`should component update`);
        // let username = 'komolei';
        // let url = `https://www.vue-js.com/api/v1/user/${username}`;
        // console.log("fpoiwrepgjewgjws", url);
        // axios.get(url).then(r => {
        //     console.log('getuser actions user is:', r.data.data);
        //     // commit('changeUser', r.data.data);
        //     this.setState({ str:r.data.data.loginname });
        // });
    }
    componentWillReceiveProps() {
        console.log(`component will receive props`);
    }
    shouldComponentUpdate() {
        return true;
    }
    componentWillUpdate() {
        console.log(`component will update`);

    }
    componentDidUpdate() {
        console.log(`component did update`);
    }
    componentWillUnmount() {
        console.log(`component will unmonut`);
    }

    render() {
        return (
            <div className="wrap">
                <p>this is the saleDetail</p>
                {/* <button onClick={this.changeStr.bind(this,'xiangjiaopi')}>click</button> */}
                <button onClick={e => this.changeStr('use arrow function')}>click</button>
                <p>{this.props.name}</p>
                <h2>{this.state.age}</h2>
                <p>{this.state.timer.toLocaleDateString()}</p>
                <p>{this.state.str}</p>
            </div>
        )
    }
}

