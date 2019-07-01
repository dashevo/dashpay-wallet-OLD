/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import type { Action, User } from 'state/types';

export const initialState = {
  // Until we're ready to fetch the data for the current user.
  displayName: 'DashPay',
  imageURL: 'https://api.adorable.io/avatars/285/DashPay.png',
};

function user(state: User = initialState, action: Action): User {
  switch (action.type) {
    default:
      return state;
  }
}

export default user;
