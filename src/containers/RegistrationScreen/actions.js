// @flow
import { bindActionCreators } from 'redux';
import { registerBUser } from 'state/account/actions';
import { register as registerProfile } from 'state/profiles/actions';

function actions(dispatch) {
  return bindActionCreators({
    registerBUser,
    registerProfile,
  }, dispatch);
}

export default actions;
