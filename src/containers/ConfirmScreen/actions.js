// @flow

import { bindActionCreators } from 'redux';
import { createTransaction } from 'state/transactions/actions';

function actions(dispatch: Function): Object {
  return bindActionCreators({ createTransaction }, dispatch);
}

export default actions;
