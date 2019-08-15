/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React, { useCallback } from 'react';
import { TouchableOpacity, Text } from 'react-native';

// Internal dependencies
import useStyles from './useStyles';

type Props = {
  onKeyPress: Function,
  name: string,
};

const Button = React.memo((props: Props) => {
  const styles = useStyles();

  const handlePress = useCallback(
    () => props.onKeyPress(props.name),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
});

export default Button;
