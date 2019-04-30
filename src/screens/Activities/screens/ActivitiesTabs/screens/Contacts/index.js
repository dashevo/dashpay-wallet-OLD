/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React, { useCallback } from 'react';
import { connect } from 'react-redux';

// Internal dependencies
import ContactList from 'hooks/ContactList';
import ContactItem from './ContactItem';
import selectors from './selectors';
import actions from './actions';

function Contacts(props) {
  const renderItem = useCallback(({ item }) => {
    function onAccept(address) {
      props.acceptBlockchainContact(address).then(console.log, console.log);
    }

    function onReject(address) {
      props.rejectBlockchainContact(address).then(console.log, console.log);
    }
    return <ContactItem {...item} onAccept={onAccept} onReject={onReject} />;
  }, []);

  return <ContactList {...props} renderItem={renderItem} />;
}

Contacts.defaultProps = {
  title: 'All Contacts',
  icon: 'squiggle'
};

export default connect(
  selectors,
  actions
)(Contacts);
