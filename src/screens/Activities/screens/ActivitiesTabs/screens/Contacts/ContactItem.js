/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React from 'react';

// Internal dependencies
import ContactCard from 'hooks/ContactCard';

const ContactItem = React.memo(function ContactItem(props) {
  return <ContactCard {...props} />;
});

export default ContactItem;
