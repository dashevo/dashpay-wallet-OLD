import {
  SET_FILTER,
  CLEAR_FILTER,
} from './constants';

export function setFilter(filterParams) {
  return {
    type: SET_FILTER,
    filterParams,
  };
}

export function clearFilter() {
  return {
    type: CLEAR_FILTER,
  };
}
