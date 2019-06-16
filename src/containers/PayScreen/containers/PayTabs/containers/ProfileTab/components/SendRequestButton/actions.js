import { bindActionCreators } from 'redux';
import { sendRequest } from 'state/contacts/actions';

function actions(dispatch) {
  return bindActionCreators({ sendRequest }, dispatch);
}

export default actions;
