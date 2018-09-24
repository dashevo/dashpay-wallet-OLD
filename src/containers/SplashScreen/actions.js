/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { bindActionCreators } from 'redux';

const DO_SOMETHING_REQUEST = 'DO_SOMETHING_REQUEST';
const DO_SOMETHING_SUCCESS = 'DO_SOMETHING_SUCCESS';
const DO_SOMETHING_FAILURE = 'DO_SOMETHING_FAILURE';

function doSomething() {
  return (dispatch, getState, wallet) =>
    dispatch({
      types: [DO_SOMETHING_REQUEST, DO_SOMETHING_SUCCESS, DO_SOMETHING_FAILURE],
      asyncTask: state => {
        console.log('language', state.language);
        console.log('user', state.user);
        return wallet.doSomething();
      },
      payload: { data: 'KEEP THIS INFO' }
    });
}

function actions(dispatch: Function): Object {
  return bindActionCreators({ doSomething }, dispatch);
}

export default actions;
