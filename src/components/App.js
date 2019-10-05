import React from 'react';
import TodoOperationList from './TodoOperationList';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <TodoOperationList />
  </div>
)

export default App
