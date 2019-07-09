import { combineReducers } from 'redux';
import {
  PROFILES_SEARCH_ASYNC,
  PROFILES_REGISTER_ASYNC,
} from 'state/action-types';

function searchResults(state = {}, action) {
  switch (action.type) {
    case PROFILES_SEARCH_ASYNC.SUCCESS:
      // TODO: mapping should be refactored/imp when the Schema is stable
      return action
        .response
        .reduce((results, {
          bio,
          avatarUrl,
          buser: { username },
          $meta: { userId },
        }) => ({
          ...results,
          [username]: {
            username,
            userId,
            avatarUrl,
            bio,
          },
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
  searchResults,
});
