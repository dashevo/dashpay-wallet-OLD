import React from 'react';
import PropTypes from 'prop-types';
import ContactRequestAccepted from './ContactRequestAccepted';
import ContactRequestReceived from './ContactRequestReceived';
import ContactRequestRejected from './ContactRequestRejected';
import ContactRequestSent from './ContactRequestSent';

function ContactCard({ status, type, ...rest }) {
  if (status === 'ACCEPTED') {
    return <ContactRequestAccepted {...rest} />;
  }

  if (status === 'REJECTED') {
    return <ContactRequestRejected {...rest} />;
  }

  if (status === 'PENDING' && type === 'RECEIVED') {
    return <ContactRequestReceived {...rest} />;
  }

  if (status === 'PENDING' && type === 'SENT') {
    return <ContactRequestSent {...rest} />;
  }

  return null;
}

ContactCard.propTypes = {
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ContactCard;
