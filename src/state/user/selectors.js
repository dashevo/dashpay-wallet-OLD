/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import type { State, User } from 'state/types';

// Returns the user object for the current user.
export function getCurrentUser(state: State): User {
  return state.user;
}
