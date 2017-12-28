import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SET_FILTER, FILTER_TYPE ,CHANGE_NAME} from '../actions/action_types';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../actions/action_types';
import { toggleTodo } from '../actions/actions';
const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((item) => {
                if (index.id == action.index) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            })
        case REMOVE_TODO:
            return state.filter(item => item.id != action.index)
        default:
            return state;
    }
};
const filterReducer = (todos = [], action) => {
    switch (action.type) {
        case SHOW_ACTIVE:
            return todos.filter(item => !item.completed)
        case SHOW_COMPLETED:
            return todos.filter(item => item.completed);
        default:
            return todos;
    }
}
const initReducer = (state = { name: 'xx' }, action) => {
    // console.log('action',action);
    // if(typeof state==='undefined'){
    //     return {name:'init state'}
    // }
    // return state;
    console.log('init reducer is ', state, 'the action is', action);
    switch (action.type) {
        case CHANGE_NAME:
            return { ...state, name: action.name }
        default: return state;
    }

}

// const filterReducer=(state=FILTER_TYPE.ALL,action)=>{
//     switch(action.type){
//         case SET_FILTER:
//         return 
//     }
// }
// console.log(typeof filterReducer);
// const appReducer = combineReducers({ todos: todoReducer, filter: filterReducer }) //redux的源码中使用了Object.keys()method。。。所以传入到createStore中的参数不是function

export const appReducer = combineReducers({ todos: todoReducer, filter: filterReducer, people: initReducer });

// const store = createStore(reducer);

// export default store;

// export default combineReducers({ filterReducer })

