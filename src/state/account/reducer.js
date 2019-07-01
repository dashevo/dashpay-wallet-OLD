import * as ActionsTypes from './constants';

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
//   displayName: "...",
//   imageUrl: "...",
//   ...
// },

export const initialState = {
  network: 'testnet',
  username: 'dashpayteam',
  isRegisterRequestSent: false,
  mnemonic: 'light point battle foam find motion true because genre people banana fit',
  unusedAddress: '',
  balance: 0,
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
        balance: action.response,
      };
    case ActionsTypes.GET_UNUSED_ADDRESS_SUCCESS:
      return {
        ...state,
        unusedAddress: action.response.address,
      };
    case ActionsTypes.CHANGE_NETWORK_SUCCESS:
      return {
        ...state,
        network: action.response.toString(),
      };
    case ActionsTypes.REGISTER_USERNAME_REQUEST:
      return {
        ...state,
        isRegisterRequestSent: true,
      };
    case ActionsTypes.REGISTER_USERNAME_SUCCESS:
      alert('Success');
      return {
        ...state,
        isRegisterRequestSent: false,
        username: action.username,
      };
    case ActionsTypes.REGISTER_USERNAME_FAILURE:
      alert(`Error: ${action.error.message}`);
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
