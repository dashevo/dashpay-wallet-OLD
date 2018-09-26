/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { bindActionCreators } from 'redux';
import { Wallet } from '@dashevo/wallet-lib';

const INITIALIZE_WALLET = 'INITIALIZE_WALLET';
const INITIALIZE_WALLET_SUCCESS = 'INITIALIZE_WALLET_SUCCESS';
const INITIALIZE_WALLET_FAILURE = 'INITIALIZE_WALLET_FAILURE';

// function initializeWallet() {
//   return (dispatch, getState, wallet) =>
//     dispatch({
//       types: [INITIALIZE_WALLET, INITIALIZE_WALLET_SUCCESS, INITIALIZE_WALLET_FAILURE],
//       asyncTask: state => {
//         const {network, mnemonic} = state.user;
//         const opts = {
//           network,
//           mnemonic
//         }
//         return wallet.initializeWallet(opts)
//       },
//       payload: { data: {done:true} }
//     });
// }

function actions(dispatch: Function): Object {
  return bindActionCreators({ }, dispatch);
}

export default actions;
