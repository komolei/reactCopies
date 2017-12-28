import { combineReducers } from 'redux';
import { CHANGE_NAME, CHANGE_STATUS, USER_LOGIN, USER_LOGON, USER_LOGOUT } from '../actions/action_type';
const CHANGENAME = (state = { name: 'small body' }, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return { ...state, name: action.name }
        default: return state;
    }
}

const status = (state = false, action) => {
    switch (action.type) {
        case CHANGE_STATUS:
            return state = action.status;
        default: return state;
    }
}

const user_info = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state, ...action.user_info
            }
        case USER_LOGON:
            return {
                ...state, ...action.user_info
            }
        case USER_LOGOUT:
            return {}
        default: return state;
    }
}
// export const reducer = combineReducers({ people: CHANGENAME, userInfo: user_info, status: status }); //md,这样写，在没有引入react-router-redux是可以的，但是引入了，在app1.js中，我使用了combineReducers,所以这里就不能使用了，应该如下这样导出；
export const reducer = { people: CHANGENAME, userInfo: user_info, status: status };
// export const reducer = ({ people: CHANGENAME, shirts: shirt });