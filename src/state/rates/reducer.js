/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { GET_DASH_USD_RATE_SUCCESS } from "./constants";
export const initialState = 0;

const language = (state = initialState, action) => {
  switch (action.type) {
    case GET_DASH_USD_RATE_SUCCESS:
      return parseFloat(action.response);

    default:
      return state;
  }
};

export default language;
