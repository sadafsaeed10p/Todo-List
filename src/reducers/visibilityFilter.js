import { VisibilityFilters, SetVisibilityFilter } from '../constants'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  let filter;
  switch (action.type) {
    case SetVisibilityFilter:
      filter = action.filter;
      break;

    default:
      filter = state;
      break;
  }
  return filter;
}

export default visibilityFilter;
