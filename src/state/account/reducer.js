/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { REGISTER_USERNAME_SUCCESS, REGISTER_USERNAME_FAILURE } from './constants';
import {RECEIVE_BALANCE, GET_UNUSED_ADDRESS_SUCCESS, CHANGE_NETWORK_SUCCESS} from './constants';
export const initialState = {
  network: 'testnet',
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
    case REGISTER_USERNAME_SUCCESS:
      alert('Success');
      return {
        ...state,
        registered: true,
      };
    case REGISTER_USERNAME_FAILURE:
      alert(`Error: ${action.error.message}`);
      return {
        ...state,
        registered: false,
        registerError: action.error.message,
      };
    default:
      return state;
  }
};

export default account;
