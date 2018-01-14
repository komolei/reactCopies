import { connect } from 'react-redux';
import Login from '../components/login';
import axios from 'axios';
import { user_login, changeStatus } from '../actions/action';
import { withRouter } from 'react-router';
const mapStateToProps = (state, props) => {
    return {
        // name: state.userInfo.loginname,
        // router_index: '',
        name: state.get('userInfo').loginname,
        router_index: '',

    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        userLogin: () => {
            // console.log('fadsfacvakfda', props); //props会传递router info,所以在下面直接改变
            let url = `https://www.vue-js.com/api/v1/user/komolei`;
            axios.get(url)
                .then(r => {
                    let result = r.data.data;
                    console.log('result', result);
                    return result;
                })
                .then(res => dispatch(user_login(res)))
                .then(() => dispatch(changeStatus(true)))
                .then(() => props.history.push('/'))
                .catch(err => console.log(err));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));