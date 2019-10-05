import { connect } from 'react-redux'
import { toggleTodo } from '../actions/ToggleTodoAction'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../constants'

const getTodos = (todos, filter) => {
  let todoList;
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      todoList = todos;
      break;

    case VisibilityFilters.SHOW_COMPLETED:
      todoList = todos.filter(t => t.completed);
      break;

    case VisibilityFilters.SHOW_ACTIVE:
      todoList = todos.filter(t => !t.completed);
      break;

    default:
      throw new Error('Unknown filter: ' + filter)
  }
  return todoList;
}

const mapStateToProps = state => ({
  todos: getTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
