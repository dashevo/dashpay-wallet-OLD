// @flow
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import Text from 'components/Text';
import Button from 'components/Button';
import { PROFILE_STATE } from 'state/profiles/constants';
import actions from './actions';
import type { Props } from './types';

const ProfileActionButton = ({
  username,
  state,
  sendRequest,
  acceptRequest,
}: Props) => {
  const [disabled, setDisabled] = useState(state === PROFILE_STATE.REQUEST_SENT);
  let action;
  let label;
  switch (state) {
    case PROFILE_STATE.REQUEST_RECEIVED:
      label = 'Accept request';
      action = () => acceptRequest(username).then(() => { alert('Contact request accepted'); });
      break;
    case PROFILE_STATE.REQUEST_SENT:
      label = 'Request sent';
      break;
    case PROFILE_STATE.IS_CONTACT:
      return null;
    default:
      label = 'Send request';
      action = () => sendRequest(username).then(() => { alert('Contact request sent'); });
      break;
  }

  const handleSubmit = () => {
    setDisabled(true);
    action();
  };

  return (
    <Button disabled={disabled} onPress={handleSubmit}>
      {({ bind, styles }) => (
        <TouchableOpacity style={styles.container} {...bind}>
          <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
      )}
    </Button>
  );
};

export default connect(
  null,
  actions,
)(ProfileActionButton);
