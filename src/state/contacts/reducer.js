import { combineReducers } from 'redux';

import blockchain from './blockchain/reducer';
import local from './local/reducer';
import {
  SET_FILTER,
  CLEAR_FILTER,
} from './constants';

const defaultFilterParams = {
  query: '',
  isActive: false,
};

function filterParams(state = defaultFilterParams, action) {
  let isActive;
  switch (action.type) {
    case SET_FILTER:
      isActive = defaultFilterParams.query !== action.filterParams.query;
      return {
        ...defaultFilterParams,
        ...action.filterParams,
        isActive,
      };
    case CLEAR_FILTER:
      return { ...defaultFilterParams };

    default:
      return state;
  }
}

export default combineReducers({
  filterParams,
  blockchain,
  local,
});
