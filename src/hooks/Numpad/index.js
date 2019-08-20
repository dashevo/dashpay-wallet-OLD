/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React, { useCallback } from 'react';
import { useService } from '@xstate/react';
import { View } from 'react-native';
import type { Interpreter } from 'xstate';

// Internal dependencies
import Button from './components/Button';
import Transition from './components/Transition';
import useStyles from './useStyles';

const ONCE = [];
type Props = {
  children: React.Node,
  service: Interpreter,
};

function Numpad({ service, children }: Props) {
  const [state, send] = useService(service);
  const styles = useStyles();

  const handleNumberPress = useCallback((value) => {
    send({ type: 'NUMBER', value });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ONCE);

  const handleDecimalPointPress = useCallback(() => {
    send({ type: 'DECIMAL_POINT' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ONCE);

  const handleBackspacePress = useCallback(() => {
    send({ type: 'BACKSPACE' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ONCE);

  return (
    <Transition key="keyboard">
      {!state.matches('none') && (
        <View style={styles.container}>
          {children}
          <View style={styles.body}>
            <View style={styles.inner}>
              <View style={styles.row}>
                <Button name="1" onKeyPress={handleNumberPress} />
                <Button name="2" onKeyPress={handleNumberPress} />
                <Button name="3" onKeyPress={handleNumberPress} />
              </View>
              <View style={styles.row}>
                <Button name="4" onKeyPress={handleNumberPress} />
                <Button name="5" onKeyPress={handleNumberPress} />
                <Button name="6" onKeyPress={handleNumberPress} />
              </View>
              <View style={styles.row}>
                <Button name="7" onKeyPress={handleNumberPress} />
                <Button name="8" onKeyPress={handleNumberPress} />
                <Button name="9" onKeyPress={handleNumberPress} />
              </View>
              <View style={styles.row}>
                <Button name="." onKeyPress={handleDecimalPointPress} />
                <Button name="0" onKeyPress={handleNumberPress} />
                <Button name="<" onKeyPress={handleBackspacePress} />
              </View>
            </View>
          </View>
        </View>
      )}
    </Transition>
  );
}

export default Numpad;
