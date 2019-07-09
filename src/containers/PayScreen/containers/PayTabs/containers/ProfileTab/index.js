// @flow
import React from 'react';
import { connect } from 'react-redux';
import ScrollView from 'components/ScrollView';
import View from 'components/View';
import Text from 'components/Text';
import CoverPhoto from './components/CoverPhoto';
import ProfileActionButton from './components/ProfileActionButton';
import selector from './selectors';
import useStyles from './useStyles';
import type { Props } from './types';

const ProfileTab = ({ user, state }: Props) => {
  const styles = useStyles();
  return (
    <ScrollView style={styles.container}>
      <CoverPhoto user={user} />
      <View style={styles.row}>
        <View style={styles.container}>
          <View style={[styles.row, styles.center, styles.usernameRow]}>
            <Text style={styles.username}>
              {user.username}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <ProfileActionButton username={user.username} state={state} />
      </View>
    </ScrollView>
  );
};

export default connect(selector)(ProfileTab);
