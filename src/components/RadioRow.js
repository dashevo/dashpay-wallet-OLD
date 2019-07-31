// @flow
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedButton } from 'components';
import { THEMES } from 'constants';

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
});

type Props = {
  options: array,
  initialOption: any,
  action: Function,
}

const RadioRow = ({ options, initialOption, action }: Props) => {
  const [selected, setSelected] = useState(initialOption);
  return (
    <View style={[styles.buttonRow]}>
      {
        options.map(
          option => (
            <ThemedButton
              key={`radioOption-${option.value}`}
              title={option.value}
              onPress={() => { setSelected(option.value); action(option.key); }}
              theme={option.value !== selected ? THEMES.light : THEMES.vivid}
            />
          ),
        )
      }
    </View>
  );
};

export default RadioRow;
