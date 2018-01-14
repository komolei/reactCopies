// import * as actionType from './action_types';

import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SET_FILTER, CHANGE_NAME} from './action_types';

let nextTodoId = 0;

export const addTodo = (text) => ({
    id: nextTodoId++,
    type: ADD_TODO,
    text: text,
    completed: false
})

export const removeTodo = (index) => ({ type: REMOVE_TODO, id: index });
export const toggleTodo = (index) => ({ type: TOGGLE_TODO, id: index });


export const setFilter = filterType => ({ type: SET_FILTER, filter: filterType })
// import {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from './action_types';

// export const showAll=(filter)

// export const changeName = (text) => {
//     return dispatch => {
//         dispatch({
//             type: CHANGE_NAME,
//             name: text
//         });
//     }
// }


export const changeName = (text) => ({
    type:CHANGE_NAME,
    name: text,
})

// async method
// export const changeName = (text) => {
//     return dispatch=> {
//         setTimeout(() => {
//             dispatch({
//                 type: CHANGE_NAME,
//                 name: text,
//             })
//         }, 4000);
//     }
// }