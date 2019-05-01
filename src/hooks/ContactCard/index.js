import React from 'react';

import ContactRequestAccepted from './ContactRequestAccepted';
import ContactRequestReceived from './ContactRequestReceived';
import ContactRequestRejected from './ContactRequestRejected';
import ContactRequestSent from './ContactRequestSent';

function ContactCard(props) {
  if (props.status === 'ACCEPTED' && props.type === 'RECEIVED') {
    return <ContactRequestAccepted {...props} />;
  }

  if (props.status === 'REJECTED' && props.type === 'RECEIVED') {
    return <ContactRequestRejected {...props} />;
  }

  if (props.status === 'PANDING' && props.type === 'RECEIVED') {
    return <ContactRequestReceived {...props} />;
  }

  if (props.status === 'PANDING' && props.type === 'SENT') {
    return <ContactRequestSent {...props} />;
  }

  return null;
}

export default ContactCard;
