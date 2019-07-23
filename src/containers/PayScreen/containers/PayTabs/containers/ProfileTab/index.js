// @flow
import React from 'react';
import { connect } from 'react-redux';
import ScrollView from 'components/ScrollView';
import View from 'components/View';
import Text from 'components/Text';
import type { Profile } from 'state/profiles/types';
import CoverPhoto from './components/CoverPhoto';
import ProfileActionButton from './components/ProfileActionButton';
import selector from './selectors';
import useStyles from './useStyles';

const ProfileTab = (props: Profile) => {
  const styles = useStyles();
  const { username, state } = props;
  return (
    <ScrollView style={styles.container}>
      <CoverPhoto {...props} />
      <View style={styles.row}>
        <View style={styles.container}>
          <View style={[styles.row, styles.center, styles.usernameRow]}>
            <Text style={styles.username}>
              {username}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <ProfileActionButton username={username} state={state} />
      </View>
    </ScrollView>
  );
};

export default connect(selector)(ProfileTab);
