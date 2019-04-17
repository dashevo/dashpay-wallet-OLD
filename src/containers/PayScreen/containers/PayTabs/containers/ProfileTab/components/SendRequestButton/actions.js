import { bindActionCreators } from 'redux';
import { sendContactRequest } from 'state/contacts/blockchain/actions';

function actions(dispatch) {
  return bindActionCreators({ sendContactRequest }, dispatch);
}

export default actions;
