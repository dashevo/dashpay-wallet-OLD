/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React, { useMemo } from 'react';
import { View, Text, Image } from 'react-native';
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

  const memoMachine = useMemo(() => payMachine.withConfig({
    guards: {
      maxAttempts: ctx => ctx.attempts >= 3,
    },
    delays: {
      TIMEOUT: 5000,
    },
    actions: {
      animateNextTransition: () => {},
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

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        {(state.matches('idle') || state.matches('pending')) && (
          <Swipeable onSwiped={handleSwiped} enabled={state.matches('idle')}>
            <View style={styles.button}>
              <Image
                style={styles.image}
                source={{ uri: 'https://api.adorable.io/avatars/285/anonymous.png' }}
              />
              <Text style={styles.text}>
                {translate(state.matches('idle') ? 'Slide to Pay' : 'Sending')}
              </Text>
            </View>
          </Swipeable>
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
      </View>
    </View>
  );
}

export default SwipeButton;
