import React from 'react';
import PropTypes from 'prop-types';

import './todo.css';

const Todo = ({ onClick, completed, text }) => (
  <span
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >	
    <button className="todo-action-button"  onClick={onClick}> {completed ? '✖' : '✓'}</button>
    <label>{text}</label>
   <br/>
  </span>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo
