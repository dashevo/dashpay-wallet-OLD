import React from 'react';

import ContactRequestAccepted from './ContactRequestAccepted';
import ContactRequestReceived from './ContactRequestReceived';
import ContactRequestRejected from './ContactRequestRejected';
import ContactRequestSent from './ContactRequestSent';

function functionName(props) {
  if (props.status === 'ACCEPTED') {
    return <ContactRequestAccepted {...props} />;
  }

  if (props.status === 'REJECTED') {
    return <ContactRequestRejected {...props} />;
  }

  if (props.status === 'PANDING' && props.type === 'SENT') {
    return <ContactRequestSent {...props} />;
  }

  return <ContactRequestReceived {...props} />;
}

export default functionName;
