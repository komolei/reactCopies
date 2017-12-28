import React from 'react';
import {
    Topic
} from './sale/topic';
import {
    SaleDetail
} from './sale/detail';
import {Commodity} from './sale/commodity';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_show: false,
            sum:[1,2,3],
        }
    }
    change = (e) => {
        // e.preventDefault();
        console.log(`change one`);
        this.setState((prevState, props) => ({
            is_show: !prevState.is_show,
        }))
        // this.setState({is_show:!this.state.is_show}); 
        console.log(this.state.is_show);
    }
    render() {
        return (
            <div className='app'>
                <button onClick={e => this.change(e)}>show one</button>
                {this.state.is_show ? <Topic name='topic' /> : <SaleDetail name='sale detail' />}
                <Commodity price='32' sum={this.state.sum}/>
            </div>
        )
    }
}

export default App;

// export {
//     App
// }