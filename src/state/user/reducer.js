/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { REGISTER_USERNAME_SUCCESS  } from "./constants";
export const initialState = {
  username: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USERNAME_SUCCESS:
      return {
        ...state,
        username: action.response
      };
    default:
      return state;
  }
};

export default user;
