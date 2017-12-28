import React, { Component } from 'react';
import PropTypes from 'prop-types';
function Name({ text, ChangeName }) {
    function change() {
        ChangeName();
    }
    return (
        <div className='name'>
            <p>ccc: {text}</p>
            <button onClick={change}>change name</button>
        </div>
    )
}

Name.defaultProps = {
    text: 'zzz',
}
Name.propTypes = {
    name: PropTypes.string,
}
export default Name;