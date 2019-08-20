/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useMachine } from '@xstate/react';

// Internal dependencies
import Modal from 'hooks/Modal';
import machine from 'hooks/Modal/machine';
import useStyles from './useStyles';
import Item from './Item';
import currencies from './currencies';

type Props = {
  selected: string,
  onSelect: Function,
  onHidden: Function,
};

// ImagePicker has selectable list based on actor model.
// That Selectable list will also be used here.

function Picker({ selected, onSelect, onHidden }: Props) {
  const styles = useStyles();
  const [, send, service] = useMachine(machine.withConfig({ actions: { onHidden } }));

  useEffect(() => {
    send('SHOW');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getHandleToggle = value => () => {
    onSelect(value);
    send('HIDE');
  };

  return (
    <Modal service={service}>
      <Text style={styles.heading}>All</Text>
      <View style={styles.list}>
        {currencies.map(code => (
          <Item active={code === selected} onPress={getHandleToggle(code)} code={code} key={code} />
        ))}
      </View>
    </Modal>
  );
}

export default Picker;
