import { bindActionCreators } from 'redux';
import { setMnemonic } from 'state/account'
import { setUsername } from 'state/account'
import { createAccount } from 'state/account'

function actions(dispatch: Function): Object {
  return bindActionCreators({
    setMnemonic,
    setUsername,
    createAccount
  }, dispatch);
}

export default actions;
