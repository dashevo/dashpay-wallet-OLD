import { bindActionCreators } from 'redux';
import { acceptRequest, sendRequest } from 'state/contacts/actions';

function actions(dispatch) {
  return bindActionCreators({ sendRequest, acceptRequest }, dispatch);
}

export default actions;
