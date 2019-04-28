import { bindActionCreators } from 'redux';
import { register } from 'state';

function actions(dispatch) {
  return bindActionCreators({ register }, dispatch);
}

export default actions;
