import React from 'react';
import FilterLink from '../containers/FilterTodos';
import { VisibilityFilters } from '../constants';

const TodoOperationList = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Incomplete Tasks
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed Tasks
    </FilterLink>
  </div>
)

export default TodoOperationList;
