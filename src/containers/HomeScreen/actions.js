/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { bindActionCreators } from 'redux';
import { initializeWallet } from 'state/actions';

function actions(dispatch: Function): Object {
  return bindActionCreators(
    {
      initializeWallet
    },
    dispatch
  );
}

export default actions;
