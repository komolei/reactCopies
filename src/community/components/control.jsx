import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Control extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.initValue,
    }
  }
  changeNumber(boo) {
    let previousValue = this.state.number;
    let newnumber = boo ? previousValue + 1 : previousValue - 1;
    this.setState({ number: newnumber })
    const { updateNumber } = this.props;
    updateNumber(newnumber, previousValue);
  }
  render() {
    const { initValue } = this.props;
    const { number } = this.state;
    return (
      <div className='control'>
        <button className='in' onClick={e => this.changeNumber(true)}>+</button>
        <button className='dn' onClick={e => this.changeNumber(false)}>-</button>
        <span>{number}</span>
      </div>
    )
  }
}

Control.defaultProps = {
  initValue: 0,
  updateNumber: f => f,
}
Control.propTypes = {
  initValue: PropTypes.number,
  updateNumber: PropTypes.func,
}




// import React, { Component, PropTypes } from 'react';



// const buttonStyle = {

//   margin: '10px'

// };



// class Counter extends Component {



//   constructor(props) {

//     super(props);



//     this.onClickIncrementButton = this.onClickIncrementButton.bind(this);

//     this.onClickDecrementButton = this.onClickDecrementButton.bind(this);



//     this.state = {

//       count: props.initValue

//     }

//   }



//   onClickIncrementButton() {

//     this.updateCount(true);

//   }



//   onClickDecrementButton() {

//     this.updateCount(false);

//   }



//   updateCount(isIncrement) {

//     const previousValue = this.state.count;

//     const newValue = isIncrement ? previousValue + 1 : previousValue - 1;



//     this.setState({count: newValue})

//     this.props.onUpdate(newValue, previousValue)

//   }



//   render() {

//     const {caption} = this.props;

//     return (

//       <div>

//         <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>

//         <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>

//         <span>{caption} count: {this.state.count}</span>

//       </div>

//     );

//   }

// }






// Counter.defaultProps = {

//   initValue: 0,

//   onUpdate: f => f //什么都不做的函数

// };



// export default Counter;