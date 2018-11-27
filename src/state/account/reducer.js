/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import {RECEIVE_BALANCE, GET_UNUSED_ADDRESS_SUCCESS, CHANGE_NETWORK_SUCCESS} from "./constants";
export const initialState = {
  network: "testnet",
  mnemonic: 'protect cave garden achieve hand vacant clarify atom finish outer waste sword',
  unusedAddress: '',
  balance: 0
};

const account = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_BALANCE:
      return {
        ...state,
        balance: action.response
      };
    case GET_UNUSED_ADDRESS_SUCCESS:
      return {
        ...state,
        unusedAddress: action.response.address
      };
    case CHANGE_NETWORK_SUCCESS:
      return {
        ...state,
        network: action.response.toString()
      };
    default:
      return state;
  }
};

export default account;
