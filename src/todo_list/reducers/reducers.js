import {
    combineReducers
} from 'redux';

import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBLITY_FILTER,
    VisiblityFilter
} from '../actions/actions';

const {
    SHOW_ALL
} = VisiblityFilter;

let visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBLITY_FILTER:
            return action.filter
        default:
            return state;
    }
}

let todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: action.text
            })
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !completed
                    })
                }
                return todo;
            })
        default:
            return state;
    }
}

let todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp;