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
  const keyExtractor = (item, index) => item.id;

  const renderItem = useCallback(({ item }) => {
    return (
      <ContactItem
        {...item}
        onAccept={props.acceptBlockchainContact}
        onReject={props.rejectBlockchainContact}
      />
    );
  }, []);

  return (
    <ContactList
      {...props}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
}

Contacts.defaultProps = {
  title: 'All Events',
  icon: 'squiggle'
};

export default connect(
  selectors,
  actions
)(Contacts);
