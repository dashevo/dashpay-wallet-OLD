import React from 'react';
import View from 'components/View';
import Avatar from 'components/Avatar';

export default props => (
  <Avatar {...props} sm>
    {({ styles, children }) => (
      <View style={styles.container}>
        <View style={styles.body}>{children}</View>
      </View>
    )}
  </Avatar>
);
