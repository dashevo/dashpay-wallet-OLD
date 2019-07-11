// @flow
import { combineReducers } from 'redux';
import {
  PROFILES_GET_BY_BUSERNAME_ASYNC,
  PROFILES_SEARCH_ASYNC,
  PROFILES_REGISTER_ASYNC,
} from 'state/action-types';

const profileMapper = ({
  bio,
  avatarUrl,
  buser: { username },
  $meta: { userId },
}) => ({
  [username]: {
    username,
    userId,
    avatarUrl,
    bio,
  },
});

function items(state = {}, action) {
  switch (action.type) {
    case PROFILES_GET_BY_BUSERNAME_ASYNC.SUCCESS:
    case PROFILES_SEARCH_ASYNC.SUCCESS:
      // TODO: mapping should be refactored/imp when the Schema is stable
      return action
        .response
        .reduce((results, profileResponse) => ({
          ...results,
          ...profileMapper(profileResponse),
        }), state);
    case PROFILES_REGISTER_ASYNC.SUCCESS:
      alert('Profile registration - success');
      return state;
    case PROFILES_REGISTER_ASYNC.FAILURE:
      alert(`Profile registration - error: ${action.error.message}`);
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  items,
});
