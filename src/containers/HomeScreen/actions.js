/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import { bindActionCreators } from 'redux';
import { getInitialState } from 'state/actions';

function actions(dispatch: Function): Object {
  return bindActionCreators(
    {
      getInitialState
    },
    dispatch
  );
}

export default actions;
