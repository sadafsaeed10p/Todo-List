import { ToggleTodo } from '../constants';

export const toggleTodo = id => ({
    type: ToggleTodo,
    id
});