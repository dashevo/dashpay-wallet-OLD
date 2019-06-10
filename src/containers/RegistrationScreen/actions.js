import { bindActionCreators } from 'redux';
import { register } from 'state/account/actions';

function actions(dispatch) {
  return bindActionCreators({ register }, dispatch);
}

export default actions;
