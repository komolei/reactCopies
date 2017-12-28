import { connect } from 'react-redux';
import Logon from '../components/logon';
import axios from 'axios';
import { user_logon, changeStatus } from '../actions/action'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';
const mapStateToProps = (state, props) => {
    return {
        name: state.userInfo.loginname,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        userLogon: (accesstoken) => {
            console.log('accesstoken', accesstoken);
            axios
                .post("https://www.vue-js.com/api/v1/accesstoken", accesstoken)
                .then(r => {
                    let result = r.data;
                    console.log('result is', result, );
                    // if(result.success) 
                    return result;

                })
                .then(res => dispatch(user_logon(res)))
                .then(() => dispatch(changeStatus(true)))
                .then(() => { props.history.push('/') })
                .catch(err => console.log(err));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logon);