// @flow
import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import ContactList from 'hooks/ContactList';
import ContactItem from './ContactItem';
import selectors from './selectors';
import actions from './actions';

type Props = {
  acceptContactRequest: Function,
  rejectContactRequest: Function,
};

const keyExtractor = item => item.id;

const Contacts = ({ acceptContactRequest, rejectContactRequest }: Props) => {
  const renderItem = useCallback(
    ({ item }) => (
      <ContactItem {...item} onAccept={acceptContactRequest} onReject={rejectContactRequest} />
    ),
    [acceptContactRequest, rejectContactRequest],
  );

  return (
    <ContactList
      title="All Contacts"
      icon="squiggle"
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default connect(
  selectors,
  actions,
)(Contacts);
