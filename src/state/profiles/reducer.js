// @flow
import { combineReducers } from 'redux';
import {
  PROFILES_SEARCH_SUCCESS,
} from './constants';

function searchResults(state = {}, action) {
  switch (action.type) {
    case PROFILES_SEARCH_SUCCESS:
      // TODO: mapping should be refactored/imp when the Schema is stable
      return action
        .response
        .reduce((results, { bio, bUserName, displayName }) => {
          const name = bUserName;
          const address = name;
          const image = `https://api.adorable.io/avatars/285/${name}.png`;
          return {
            ...results,
            [name]: {
              address,
              image,
              name,
              bio,
              displayName,
            },
          };
        }, state);

    default:
      return state;
  }
}

export default combineReducers({
  searchResults,
});
