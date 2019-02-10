/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { bindActionCreators } from 'redux';
import { createLocalContact } from 'state/contacts/local/actions';
import { createTransaction } from 'state/transactions/actions';
import { broadcastTransaction } from 'state/transactions/actions';

function actions(dispatch: Function): Object {
  return bindActionCreators(
    { createLocalContact, createTransaction, broadcastTransaction },
    dispatch
  );
}

export default actions;
