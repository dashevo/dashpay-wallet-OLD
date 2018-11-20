/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { RECEIVE_BALANCE } from "./constants";

export const initialState = {
  network: "testnet", //todo : Should be from state
  mnemonic: 'protect cave garden achieve hand vacant clarify atom finish outer waste sword',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_BALANCE:
      return {
        ...state,
        balance: action.response
      };

    default:
      return state;
  }
};

export default user;
