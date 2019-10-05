import { AddTodo } from '../constants';

let nextTodoId = 0;
export const addTodo = text => ({
    type: AddTodo,
    id: nextTodoId++,
    text
});