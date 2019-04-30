/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React from 'react';
import { View, Text } from 'react-native';

// Internal dependencies
import useTranslate from 'hooks/Translate';
import useStyles from './useStyles';

function ListEmpty(props) {
  const translate = useTranslate();
  const styles = useStyles();

  return (
    <View style={styles.emptyList}>
      <Text style={styles.emptyMessage}>{translate(props.emptyMessage)}</Text>
    </View>
  );
}

ListEmpty.defaultProps = {
  emptyMessage: 'No contacts'
};

export default ListEmpty;
