/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import type { Action, User } from 'state/types';

export const initialState = {
  // Until we're ready to fetch the data for the current user.
  displayName: 'Ryan Taylor',
  imageURL: 'https://i.ibb.co/M6kLGhC/Ryan-Taylor-dash-crypto-var2.jpg',
};

function user(state: User = initialState, action: Action): User {
  switch (action.type) {
    default:
      return state;
  }
}

export default user;
