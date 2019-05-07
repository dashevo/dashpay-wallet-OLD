/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Internal dependencies
import ContactList from 'hooks/ContactList';
import ContactItem from './ContactItem';
import selectors from './selectors';
import actions from './actions';

function Contacts(props) {
  const keyExtractor = item => item.id;

  const renderItem = useCallback(
    ({ item }) => (
      <ContactItem
        {...item}
        onAccept={props.acceptBlockchainContact}
        onReject={props.rejectBlockchainContact}
      />
    ),
    [],
  );

  return (
    <ContactList
      {...props}
      title="All Contacts"
      icon="squiggle"
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
}

Contacts.propTypes = {
  acceptBlockchainContact: PropTypes.func.isRequired,
  rejectBlockchainContact: PropTypes.func.isRequired,
};

export default connect(
  selectors,
  actions,
)(Contacts);
