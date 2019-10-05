import { AddTodo, ToggleTodo } from '../constants';

const todos = (state = [], action) => {
  let todoState;
  switch (action.type) {
    case AddTodo:
      todoState = [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
      break;

    case ToggleTodo:
      todoState = state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      break;

    default:
      todoState = state;
      break;
  }
  return todoState;
}

export default todos;
