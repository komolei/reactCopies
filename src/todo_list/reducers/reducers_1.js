import {
    VisiblityFilter,
    toggleTodo
} from '../actions/actions';
import {
    stat
} from 'fs';
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBLITY_FILTER
} from '../actions/action_types';
import {
    fail
} from 'assert';

const initialState = {
    visibilityFilter: VisiblityFilter,
    todos: [],
}

// reducer struction is (previousState,action) => newState
let todoApp = (state = initialState, action) => {
    switch (action.type) {
        case SET_VISIBLITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: actions.filter,
            })
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos, {
                        text: action.text,
                        completed: false,
                    }
                ]
            })
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((item, index) => {
                    if (index === actions.index) {
                        return Object.assign({}, todo, {
                            completed: !state.completed,
                        })
                    }
                })
            })
        default:
            return state;
    }
    return state;
}

// 拆分reducer

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

let todoApp1 = (state = initialState, action) => {
    switch (action.type) {
        case SET_VISIBLITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter,
            });
        case ADD_TODO:
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: todos(state.todos, action)
            })
        default:
            return state;
    }
}

let visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBLITY_FILTER:
            return action.filter
        default:
            return state;
    }
}

let todos1 = (state = [], action) => {
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

let todoApp2 = (state = {}, action) => {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todo: todos1(state.todos, action),
    }
}

// import redux

import {
    combineReducers
} from 'redux';
const todoAppLast = combineReducers({
    visibilityFilter,
    todos1,
})

export {
    todoAppLast
}