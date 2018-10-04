/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @wolf
 */
import { bindActionCreators } from 'redux';

const CHANGE_LOCALE = 'CHANGE_LOCALE';

function changeLocale() {
  return (dispatch) =>
    dispatch({
      type: CHANGE_LOCALE,
      payload: { data: {locale:translation} }
    });
}

function actions(dispatch: Function): Object {
  return bindActionCreators({ changeLocale }, dispatch);
}

export default actions;
