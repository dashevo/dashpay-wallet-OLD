/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { bindActionCreators } from 'redux';

import { acceptBlockchainContact } from 'state/contacts/blockchain/actions';
import { rejectBlockchainContact } from 'state/contacts/blockchain/actions';
import { getPendingContactRequests } from 'state/contacts/blockchain/actions';

function actions(dispatch: Function): Object {
  return bindActionCreators(
    {
      getPendingContactRequests,
      acceptBlockchainContact,
      rejectBlockchainContact
    },
    dispatch
  );
}

export default actions;
