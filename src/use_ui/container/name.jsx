import { changeName } from '../actions/action';
import Name from '../components/name';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = (state, props) => {
    return {
        // text: state.people.name,
        // text:'cccc'
        text: state.get('people').name,
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Name);
