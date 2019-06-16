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

function AllEvents(props) {
  const keyExtractor = item => item.id;

  const renderItem = useCallback(
    ({ item }) => (
      <ContactItem
        {...item}
        onAccept={props.acceptRequest}
        onReject={props.rejectRequest}
      />
    ),
    [],
  );

  return (
    <ContactList
      {...props}
      title="All Events"
      icon="squiggle"
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
}

AllEvents.propTypes = {
  acceptRequest: PropTypes.func.isRequired,
  rejectRequest: PropTypes.func.isRequired,
};

export default connect(
  selectors,
  actions,
)(AllEvents);
