/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import { bindActionCreators } from 'redux';

// Internal dependencies
import {
  acceptRequest,
  rejectRequest,
} from 'state/contacts/actions';

function actions(dispatch) {
  return bindActionCreators(
    {
      acceptRequest,
      rejectRequest,
    },
    dispatch,
  );
}

export default actions;
