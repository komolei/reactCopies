import {
    createStore
} from 'redux';
import todoApp from '../reducers/reducers';
let store = createStore(todoApp);
// getState() 得到state
// dispatch(action) 更新state
// subscribe(listener) 注册监听器
// subscribe(listener) 返回的函数注销监听器

export default store;