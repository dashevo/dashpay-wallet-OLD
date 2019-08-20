/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Internal dependencies
import Icon from 'hooks/Icon';
import Text from 'hooks/Typography/Text';
import useTranslate from 'hooks/Translate';
import useStyles from './useStyles';

type Props = {
  code: string,
  onPress: Function,
};

function Item({ code, onPress, ...rest }: Props) {
  const translate = useTranslate();
  const styles = useStyles(rest);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.row}>
        <View style={styles.left}>
          <Icon style={styles.icon} name={code.toLowerCase()} />
        </View>
        <View style={styles.body}>
          <Text style={styles.text}>{translate(code)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Item;
