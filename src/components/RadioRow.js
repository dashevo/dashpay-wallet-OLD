// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedButton } from 'components';
import { THEMES } from 'constants';

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
  },
});

type Props = {
  options: array,
  currentOption: any,
  action: Function,
}

const RadioRow = ({ options, currentOption, action }: Props) => (
  <View style={[styles.buttonRow]}>
    {
      options.map(
        option => (
          <ThemedButton
            key={option.key}
            title={option.value}
            onPress={action(option.key)}
            theme={option.key === currentOption ? THEMES.light : THEMES.vivid}
          />
        ),
      )
    }
  </View>
);

export default RadioRow;
