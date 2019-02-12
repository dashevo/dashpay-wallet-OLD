/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

function mapStateToProps(state, props) {
  const currRecipient = props.navigation.getParam('recipient');
  const currName = props.navigation.getParam('name');

  const contact = state.contacts.local.items[currRecipient] || {};

  const nextRecipient = contact.address || currRecipient;
  const nextImage = contact.image;
  const nextName = contact.name;

  if (currName !== nextName) {
    props.navigation.setParams({
      recipient: nextRecipient,
      name: nextName
    });
  }

  return {
    recipient: nextRecipient,
    image: nextImage,
    name: nextName
  };
}

export default mapStateToProps;
