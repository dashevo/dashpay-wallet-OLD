// @flow
import { contactSelectorFactory } from 'state/contacts/selectors';

function mapStateToProps(state, props) {
  const address = props.navigation.getParam('recipient', '');
  const contact = contactSelectorFactory(address)(state) || {};
  const { name = '', image = '', username = '' } = contact;
  const initialValues = {
    address,
    username,
    name,
    image,
  };

  return {
    initialValues,
  };
}

export default mapStateToProps;
