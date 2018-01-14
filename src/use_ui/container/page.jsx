import { connect } from 'react-redux';
import Page from '../components/page';
import * as AT from '../actions/action';
import axios from 'axios';
const send = (dispatch, tab) => {
    // let url=!tab?
    let url = "https://www.vue-js.com/api/v1/topics"
    let url1 = !tab ? `${url}` : `${url}?tab=${tab}`
    axios.get(url1).then(r => {
        let data = r.data
        console.log('data', data);
        return data
    }).then(r => {
        dispatch(AT.index_info(r));
    }).catch(err => console.log('page send referencr error', err, '\n'));
}
const mapStateToProps = (state, props) => {
    return {
        // info: state.index_info.data,
        // use immutable
        info: state.get("index_info").data,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        refresh: (tab) => {
            // send a request to get data
            send(dispatch, tab);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);