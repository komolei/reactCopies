import { connect } from 'react-redux';
import Name1 from '../components/name';
import { changeName } from '../actions/actions';
import axios from 'axios';
const mapStateToProps = (state, props) => {
    return {
        context: state.people.name,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        ChangeName: () => {
            (async () => {
                let url = `https://www.vue-js.com/api/v1/user/komolei`;
                await axios.get(url).then(r => r.data.data.loginname).then(text => {
                    dispatch(changeName(text))
                })
            })()

            // dispatch(changeName('xx'))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Name1);