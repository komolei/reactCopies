import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBLITY_FILTER,
} from './action_types';
//action
const addTodo = (text) => {
    type: ADD_TODO,
    text
}
const toggleTodo = (index) => {
    type: TOGGLE_TODO,
    index
}
const setVisiblityFilter = filter => {
    type: SET_VISIBLITY_FILTER
    filter
}
const VisiblityFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
export {
    addTodo,
    toggleTodo,
    setVisiblityFilter,
    VisiblityFilter,
}