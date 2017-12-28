import Control from './control';
import React, { Component } from 'react'
class ControlPanel extends React.Component {
    constructor(props) {
        super(props);
        this.initValue = [0, 10, 20];
        const sum = this.initValue.reduce((x, y) => x + y);
        this.state = {
            initSum: sum,
        }
    }

    numberUpdate = (newValue, previousValue) => {
        const changeVaule = newValue - previousValue;
        console.log(this.state.initSum);
        this.setState({ initSum: this.state.initSum + changeVaule });

    }
    render() {
        const { initSum } = this.state;
        const initValue = this.initValue;
        return (
            <div className='control_panel'>
                <Control initValue={initValue[0]} updateNumber={this.numberUpdate}></Control>
                <Control initValue={initValue[1]} updateNumber={this.numberUpdate}></Control>
                <Control initValue={initValue[2]} updateNumber={this.numberUpdate}></Control>
                <p>sum is:{initSum}</p>
            </div>
        )
    }
}

export default ControlPanel;

// import React, { Component } from 'react';

// import Counter from './control';



// const style = {

//   margin: '20px'

// };



// class ControlPanel extends Component {



//   constructor(props) {

//     super(props);



//     this.onCounterUpdate = this.onCounterUpdate.bind(this);



//     this.initValues = [ 0, 10, 20];



//     const initSum = this.initValues.reduce((a, b) => a+b, 0);

//     this.state = {

//       sum: initSum

//     };

//   }



//   onCounterUpdate(newValue, previousValue) {

//     const valueChange = newValue - previousValue;

//     this.setState({ sum: this.state.sum + valueChange});

//   }



//   render() {

//     return (

//       <div style={style}>

//         <Counter onUpdate={this.onCounterUpdate} caption="First" />

//         <Counter onUpdate={this.onCounterUpdate} caption="Second" initValue={this.initValues[1]} />

//         <Counter onUpdate={this.onCounterUpdate} caption="Third" initValue={this.initValues[2]} />

//         <hr/>

//         <div>Total Count: {this.state.sum}</div>

//       </div>

//     );

//   }

// }



// export default ControlPanel;