/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React, { useCallback, useEffect, useMemo } from 'react';
import { View, BackHandler } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { useService } from '@xstate/react';
import type { Interpreter } from 'xstate';

// Internal dependencies
import Touchable from 'hooks/Touchable';
import { SHOW, HIDE } from './constants';
import useInteractable from './useInteractable';
import useStyles from './useStyles';

const ONCE = [];

type Props = {
  service: Interpreter,
  children: React.Node,
  dismissable?: boolean,
};

function Modal({ service, children, dismissable }: Props) {
  const [state, send] = useService(service);
  const interactable = useInteractable(send);
  const styles = useStyles(interactable);

  const show = useCallback(
    () => interactable.snapTo(SHOW),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ONCE,
  );
  const hide = useCallback(
    () => interactable.snapTo(HIDE),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ONCE,
  );

  const handleHide = useCallback(
    () => send('HIDE'),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ONCE,
  );
  const actions = useMemo(
    () => ({ show, hide }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ONCE,
  );

  useEffect(() => {
    service.execute(state, actions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  useEffect(() => {
    function handleHardwareBackPress() {
      if (dismissable) send('HIDE');
      return true;
    }

    BackHandler.addEventListener('hardwareBackPress', handleHardwareBackPress);

    return function cleanup() {
      BackHandler.removeEventListener('hardwareBackPress', handleHardwareBackPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ONCE);

  const enabled = state.matches('shown');

  return (
    <View style={styles.container}>
      <Animated.View style={styles.backdrop}>
        <Touchable style={styles.touchable} onPress={handleHide} />
      </Animated.View>
      <PanGestureHandler {...interactable.bind} enabled={enabled}>
        <Animated.View style={styles.body}>{children}</Animated.View>
      </PanGestureHandler>
    </View>
  );
}

Modal.defaultProps = {
  dismissable: true,
};

export default Modal;
