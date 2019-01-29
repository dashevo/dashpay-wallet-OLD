/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import { bindActionCreators } from "redux";

// Internal dependencies
import { searchBlockchainContacts } from "state/contacts/blockchain/actions";
import { searchLocalContacts } from "state/contacts/local/actions";
import { sendContactRequest } from 'state/contacts/blockchain/actions';

function actions(dispatch: Function): Object {
  return bindActionCreators(
    {
      searchBlockchainContacts,
      searchLocalContacts,
      sendContactRequest,
    },
    dispatch
  );
}

export default actions;
