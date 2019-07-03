import {
  ACCOUNTS_ACCOUNT_CREATED,
  ACCOUNTS_REGISTER_BUSER_ASYNC,
  ACCOUNTS_RECEIVE_BALANCE,
  ACCOUNTS_SET_MNEMONIC,
  ACCOUNTS_SET_USERNAME,
  ACCOUNTS_GET_UNUSED_ADDRESS_ASYNC,
  ACCOUNTS_CHANGE_NETWORK_ASYNC,
} from 'state/action-types';

// TODO: Code refactoring.
//
// Here we shuld keep all the accounts that the user has used, in this way we can
// create the list to switch between accounts. When we reset the redux state to
// switch between accounts this should not reflect here, otherwise we will lose
// the list to switch between accounts. This reducer shuld be array.
//
// Note: not sure about their names `accounts` and `user`.
//
// accounts: [{
//   username: "dashpay-1",
//   mnemonic: "runway enemy year false false obtain yard dinner"
// }, {
//   username: "dashpay-2",
//   mnemonic: "rib report nominee swap kitchen duty airport"
// }]
//
//
// Here we will keep all data for current account
//
// user: {
//   username: "dashpay-1",
//   mnemonic: "runway enemy year false false obtain yard dinner",
//   username: "...",
//   imageUrl: "...",
//   ...
// },

export const initialState = {
  network: 'testnet',
  username: 'dashpayteamdev',
  isRegisterRequestSent: false,
  mnemonic: 'light point battle foam find motion true because genre people banana fit',
  unusedAddress: '',
  balance: 0,
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
    case ACCOUNTS_GET_UNUSED_ADDRESS_ASYNC.SUCCESS:
      return {
        ...state,
        unusedAddress: action.response.address,
      };
    case ACCOUNTS_CHANGE_NETWORK_ASYNC.SUCCESS:
      return {
        ...state,
        network: action.response.toString(),
      };
    case ACCOUNTS_REGISTER_BUSER_ASYNC.REQUEST:
      return {
        ...state,
        isRegisterRequestSent: true,
      };
    case ACCOUNTS_REGISTER_BUSER_ASYNC.SUCCESS:
      alert('BUser registration - success');
      return {
        ...state,
        isRegisterRequestSent: false,
        username: action.username,
      };
    case ACCOUNTS_REGISTER_BUSER_ASYNC.FAILURE:
      alert(`BUser registration - error: ${action.error.message}`);
      return {
        ...state,
        isRegisterRequestSent: false,
        username: undefined,
      };
    default:
      return state;
  }
};

export default account;
