// @flow
import React from 'react';
import Avatar from 'hooks/Avatar';
import type { Profile } from 'state/profiles/types';
import useStyles from './useStyles';

type Props = {
  user: Profile,
};

const CoverPhoto = ({ user }: Props) => {
  const styles = useStyles();
  return <Avatar user={user} styles={styles} />;
};

export default CoverPhoto;
