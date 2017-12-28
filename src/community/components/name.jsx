import React, { Component } from 'react';
import PropTypes from 'prop-types';
function Name1({ context, ChangeName }) {
    function changeName() {
        ChangeName();
    }
    return (
        <div className='name'>
            <p>{context}</p>
            <button onClick={changeName}>change name</button>
        </div>
    )
}

Name1.defaultProps = {
    context: 'first',
}
Name1.propTypes = {
    context: PropTypes.string,
}

export default Name1;