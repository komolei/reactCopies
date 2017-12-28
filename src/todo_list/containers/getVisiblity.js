import {
    connect
} from 'react-redux';
import {
    TodoList
} from '../components/todoList';
import {
    toggleTodo
} from '../actions/actions'
const getVisiblity = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(t => t.completed);
        case 'SHOE_COMPLETED':
            return todo.filter(t => !t.completed);
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisiblity(state.todos, state.visibilityFilter),
    }
}

const mapDispatchToProps = dispath => {
    return {
        onTodoClick: id => {
            dispath(toggleTodo(id));
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;