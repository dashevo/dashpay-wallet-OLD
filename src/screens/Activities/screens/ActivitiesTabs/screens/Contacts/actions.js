/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import { bindActionCreators } from 'redux';

// Internal dependencies
import { acceptBlockchainContact } from 'state/contacts/blockchain/actions';
import { rejectBlockchainContact } from 'state/contacts/blockchain/actions';

function actions(dispatch) {
  return bindActionCreators(
    {
      acceptBlockchainContact,
      rejectBlockchainContact
    },
    dispatch
  );
}

export default actions;
