import { bindActionCreators } from 'redux';
import { setMnemonic } from 'state/user'

function actions(dispatch: Function): Object {
  return bindActionCreators({ setMnemonic }, dispatch);
}

export default actions;
