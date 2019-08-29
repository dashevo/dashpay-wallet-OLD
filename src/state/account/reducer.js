import {
  ACCOUNTS_ACCOUNT_CREATED,
  ACCOUNTS_REGISTER_BUSER_ASYNC,
  ACCOUNTS_RECEIVE_BALANCE,
  ACCOUNTS_SET_MNEMONIC,
  ACCOUNTS_SET_USERNAME,
  ACCOUNTS_GET_UNUSED_ADDRESS,
  ACCOUNTS_CHANGE_NETWORK_ASYNC,
  ACCOUNTS_SET_DPA_INITIALIZED,
} from 'state/action-types';

export const initialState = {
  network: 'testnet',
  username: 'demo-user-1',
  mnemonic: 'hobby reduce charge steak bulk clean turn strategy damage ball junior ginger',
  // username: 'demo-user-2',
  // mnemonic: 'hockey sorry record kite half diary gloom supply favorite essence load fan',
  unusedAddress: '',
  balance: 0,
  dpaIsInitialized: false,
};

const account = (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNTS_ACCOUNT_CREATED:
    case ACCOUNTS_SET_MNEMONIC:
      return {
        ...state,
        mnemonic: action.mnemonic,
      };
    case ACCOUNTS_SET_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    case ACCOUNTS_RECEIVE_BALANCE:
      return {
        ...state,
        balance: action.response,
      };
    case ACCOUNTS_GET_UNUSED_ADDRESS:
      return {
        ...state,
        unusedAddress: action.unusedAddress,
      };
    case ACCOUNTS_CHANGE_NETWORK_ASYNC.SUCCESS:
      return {
        ...state,
        network: action.response.toString(),
      };
    case ACCOUNTS_REGISTER_BUSER_ASYNC.SUCCESS:
      return {
        ...state,
        username: action.username,
      };
    case ACCOUNTS_REGISTER_BUSER_ASYNC.FAILURE:
      return {
        ...state,
        username: undefined,
      };
    case ACCOUNTS_SET_DPA_INITIALIZED:
      return {
        ...state,
        dpaIsInitialized: true,
      };

    default:
      return state;
  }
};

export default account;
