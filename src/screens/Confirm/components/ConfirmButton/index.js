/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React, { useRef, useMemo } from 'react';
import { View, Text, Image } from 'react-native';
import { Transitioning, Transition } from 'react-native-reanimated';
import { useMachine } from '@xstate/react';

// Internal dependencies
import useTranslate from 'hooks/Translate';
import Swipeable from './components/Swipeable';
import payMachine from './useMachine';
import useStyles from './useStyles';

type Props = {
  onRequest: Function,
  onSuccess: Function,
  onFailure: Function,
};

function SwipeButton({ onRequest, onSuccess, onFailure }: Props) {
  const translate = useTranslate();

  const styles = useStyles();
  const ref = useRef();

  const memoMachine = useMemo(() => payMachine.withConfig({
    guards: {
      maxAttempts: ctx => ctx.attempts >= 3,
    },
    delays: {
      TIMEOUT: 5000,
    },
    actions: {
      animateNextTransition: () => {
        ref.current.animateNextTransition();
      },
      handleSuccess: onSuccess,
      handleFailure: onFailure,
    },
    services: {
      sendPayment: onRequest,
    },
  }));

  const [state, send] = useMachine(memoMachine);

  function handleSwiped() {
    send('PAY');
  }

  const transition = (
    <Transition.Together>
      <Transition.Out type="slide-right" durationMs={400} interpolation="easeIn" />
      <Transition.Change />
      <Transition.In type="slide-left" durationMs={400} interpolation="easeIn" />
    </Transition.Together>
  );

  return (
    <View style={styles.confirmButtonInner}>
      <View style={styles.container}>
        <Transitioning.View ref={ref} transition={transition} style={styles.container}>
          {(state.matches('idle') || state.matches('pending')) && (
            <View style={styles.button}>
              <Swipeable onSwiped={handleSwiped} enabled={state.matches('idle')}>
                <View style={[styles.button, { backgroundColor: 'green' }]}>
                  <Image
                    style={styles.image}
                    source={{ uri: 'https://api.adorable.io/avatars/285/anonymous.png' }}
                  />
                  <Text style={styles.text}>
                    {translate(state.matches('idle') ? 'Slide to Pay' : 'Sending')}
                  </Text>
                </View>
              </Swipeable>
            </View>
          )}
          {state.matches({ fulfilled: 'success' }) && (
            <View style={styles.feedback}>
              <Text style={styles.feedbackText}>{translate('Payment sent')}</Text>
            </View>
          )}
          {state.matches({ rejected: 'retry' }) && (
            <View style={styles.feedback}>
              <Text style={styles.feedbackText}>{translate('Something went wrong')}</Text>
            </View>
          )}
          {state.matches({ rejected: 'failure' }) && (
            <View style={styles.feedback}>
              <Text style={styles.feedbackText}>{translate('Contact support')}</Text>
            </View>
          )}
        </Transitioning.View>
      </View>
    </View>
  );
}

export default SwipeButton;
