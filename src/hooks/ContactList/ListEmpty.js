/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

// Internal dependencies
import useTranslate from 'hooks/Translate';
import useStyles from './useStyles';

function ListEmpty({ emptyMessage }) {
  const translate = useTranslate();
  const styles = useStyles();

  return (
    <View style={styles.emptyList}>
      <Text style={styles.emptyMessage}>{translate(emptyMessage)}</Text>
    </View>
  );
}

ListEmpty.defaultProps = {
  emptyMessage: 'No contacts',
};

ListEmpty.propTypes = {
  emptyMessage: PropTypes.string,
};

export default ListEmpty;
