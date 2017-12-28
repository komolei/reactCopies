import React, { Component } from 'react'
import PropTypes from 'prop-types';
// class Topic extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: 'komolei',
//         }
//     }

//     changeNumber() {
//         this.setState({ name: 'clc' })
//     }

//     shouldComponentUpdate(nexProps, nextState) {
//         return (nextState.name != this.state.name)
//     }
//     render() {
//         const { number, sure } = this.props;
//         const { name } = this.state;
//         return (
//             <div className='topic' onClick={e => this.changeNumber()}>
//                 {name}
//                 <p>Are you ready? {sure ? `yse name is:${name}` : `no number is:${number}`}</p>
//             </div>
//         )
//     }
// }
// function Topic(props) {
//     const { number, sure, changeState } = props;
//     console.log(changeState);
//     return (
//         <div className='topic' onClick={changeState}>
//             <p>Are you ready? {sure ? `${number}` : `no number is:${number}`}</p>
//         </div>
//     )
// }

// 使用destructuring assigment

function Topic({ number, sure, changeState }) {
    return (
        <div className='topic' onClick={changeState}>
            <p>Are you ready? {sure ? `${number}` : `no number is:${number}`}</p>
        </div>
    )
}
Topic.defaultProps = {
    number: 10,
}
Topic.propTypes = {
    number: PropTypes.number,
    sure: PropTypes.bool,
    changeState: PropTypes.func,
}
export default Topic;