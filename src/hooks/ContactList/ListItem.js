/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React from 'react';

// Internal dependencies
import ContactCard from 'hooks/ContactCard';

const ListItem = React.memo(function ListItem(props) {
  return <ContactCard {...props} />;
});

export default ListItem;
