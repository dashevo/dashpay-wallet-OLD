/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as ActionsTypes from "./constants";


export const initialState = {
  network: 'testnet',
  username: 'DashPayTeam',
  mnemonic: 'light point battle foam find motion true because genre people banana fit',
  unusedAddress: '',
  balance: 0
};

const account = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.ACCOUNT_CREATED:
    case ActionsTypes.SET_MNEMONIC:
      return {
        ...state,
        mnemonic: action.mnemonic,
      };
    case ActionsTypes.SET_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    case ActionsTypes.RECEIVE_BALANCE:
      return {
        ...state,
        balance: action.response
      };
    case ActionsTypes.GET_UNUSED_ADDRESS_SUCCESS:
      return {
        ...state,
        unusedAddress: action.response.address
      };
    case ActionsTypes.CHANGE_NETWORK_SUCCESS:
      return {
        ...state,
        network: action.response.toString()
      };
    case ActionsTypes.REGISTER_USERNAME_SUCCESS:
      alert('Success');
      return {
        ...state,
        username: action.response.uname,
      };
    case ActionsTypes.REGISTER_USERNAME_FAILURE:
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
