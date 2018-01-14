// import { CHANGE_NAME, CHANGE_STATUS, USER_LOGIN, USER_LOGON } from './action_type'
import * as  AT from './action_type' // AT : ACTION TYPE

export const changeName = (text) => ({ type: AT.CHANGE_NAME, name: text })

// change status

export const changeStatus = (bool) => ({ type: AT.CHANGE_STATUS, status: bool });

// user_info

export const user_login = (text) => ({ type: AT.USER_LOGIN, user_info: text });

export const user_logon = (text) => ({ type: AT.USER_LOGON, user_info: text });

export const user_logout = () => ({ type: AT.USER_LOGOUT, user_info: {} })

// INDEX INFO
export const index_info = (text) => ({
    type: AT.INDEX_INFO,
    index_info: text,
})

// export const index_info_refresh = text => ({ type: AT.INDEX_INFO_REFRESH, index_info: text });