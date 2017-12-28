import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from '../components/app';
const mapStateToProps = (state, props) => {
    return {
        status: state.status,
        // is_show: state.status,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

// export default withRouter(connect(mapStateToProps, mapDispatchToProps, )(App));
export default connect(mapStateToProps, mapDispatchToProps)(App);