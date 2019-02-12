/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { bindActionCreators } from 'redux';
import { updateLocalContact } from 'state/contacts/local/actions';
import { deleteLocalContact } from 'state/contacts/local/actions';

function actions(dispatch: Function): Object {
  return bindActionCreators(
    { updateLocalContact, deleteLocalContact },
    dispatch
  );
}

export default actions;
