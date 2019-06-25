import React from 'react';
import Avatar from 'hooks/Avatar';
import useStyles from './useStyles';

function ProfilePicture({ user }) {
  const styles = useStyles();
  return <Avatar user={user} styles={styles} />;
}

export default ProfilePicture;
