/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import * as React from 'react';

// Internal dependencies
import Avatar from 'components/Avatar';
import View from 'components/View';
import Icon from 'components/Icon';
import Text from 'components/Text';

export function ProfilePic(props) {
  const { icon } = props;
  const { name } = props;
  return (
    <Avatar {...props} tmp>
      {({ children, styles }) => (
        <View style={styles.col}>
          <View style={styles.center}>
            <View style={styles.container}>
              <View style={styles.body}>{children}</View>
              <View style={styles.left}>
                <Icon style={styles.icon} name={icon} />
              </View>
            </View>
          </View>
          <View style={styles.center}>
            <Text style={styles.title}>{name}</Text>
          </View>
        </View>
      )}
    </Avatar>
  );
}

export default ProfilePic;
