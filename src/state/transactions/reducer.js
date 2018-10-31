/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */

import { GET_TRANSACTIONS_SUCCESS } from './constants';

export const initialState = {
  history: [],
};

const transactions = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        history: action.response,
      };
    default:
      return state;
  }
};

export default transactions;
