import { bindActionCreators } from 'redux';
import { transactionRecipientScanned } from 'state/transactions/actions';

function actions(dispatch: Function): Object {
  return bindActionCreators({ transactionRecipientScanned }, dispatch);
}

export default actions;
