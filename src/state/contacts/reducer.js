import { combineReducers } from 'redux';

import blockchain from './blockchain/reducer';
import local from './local/reducer';
import {
  SET_FILTER,
  CLEAR_FILTER,
} from './constants';

const itinialFilterParams = {
  query: '',
  isActive: false,
};

export function filterParams(state = itinialFilterParams, action) {
  let isActive;
  switch (action.type) {
    case SET_FILTER:
      isActive = itinialFilterParams.query !== action.filterParams.query;
      return {
        ...itinialFilterParams,
        ...action.filterParams,
        isActive,
      };
    case CLEAR_FILTER:
      return { ...itinialFilterParams };

    default:
      return state;
  }
}

export default combineReducers({
  filterParams,
  blockchain,
  local,
});
