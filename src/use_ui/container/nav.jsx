import { changeStatus, user_login, user_logon, user_logout } from '../actions/action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Nav from '../components/nav';


const mapStateToProps = (state, props) => {
    return {
        status: state.status
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        logOut: () => {
            dispatch(changeStatus(false));
            dispatch(user_logout());
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
// export default connect(mapStateToProps, mapDispatchToProps)(Nav);