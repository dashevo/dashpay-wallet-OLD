/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React, { useCallback } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useMachine } from '@xstate/react';
import { connect } from 'react-redux';

// Internal dependencies
import Avatar from 'hooks/Avatar';
import Numpad from 'hooks/Numpad';
import useTranslate from 'hooks/Translate';
import type { Transaction } from 'state/transactions/types';
import type { User } from 'state/user/types';
import Amount from './components/Amount';
import Transactions from './components/Transactions';
import useStyles from './useStyles';
import machine from './machine';
import selector from './selectors';
import actions from './actions';

function filterData(state, data) {
  return state.matches('editing.none') ? data : [];
}

function mapInitialValues(props) {
  return {
    dash: props.initialValues.dashAmount,
    fiat: props.initialValues.fiatAmount,
    recipient: props.initialValues.recipient,
    code: props.alternativeCurrency.code,
    rate: 1,
  };
}

type Props = {
  transactions: Array<Transaction>,
  user: User,
};

function Pay(props: Props) {
  const translate = useTranslate();
  const styles = useStyles();
  const { transactions, user } = props;

  const onSubmit = useCallback((context, send) => {
    const { values } = context;
    const {
      navigation, createSendPaymentTransaction, receiver, sender,
    } = props;
    navigation.navigate('Confirm', {
      user,
      fiatSymbol: 'usd',
      dashAmount: values.dash,
      fiatAmount: values.fiat,
      feeDash: 0.999,
      feeFiat: 0.999,
      totalFiat: values.dash,
      destinationAddress: values.recipient,
      toAvatar: { uri: receiver.avatarUrl },
      fromAvatar: { uri: sender.avatarUrl },
      onConfirmation: () => {
        send({ type: 'RESET' });
        createSendPaymentTransaction({
          // Tmp this will be fixed with new schema
          dashAmount: values.dash,
          fiatAmount: values.fiat,

          recipient: values.recipient,
          amount: values.dash,
        });
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [current, send, service] = useMachine(
    machine
      .withContext({
        values: mapInitialValues(props),
      })
      .withConfig({
        actions: {
          onSubmit: ctx => onSubmit(ctx, send),
        },
      }),
  );

  const handleCancel = useCallback(
    () => send({ type: 'CANCEL' }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const handleSubmit = useCallback(
    () => send({ type: 'SUBMIT' }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const data = filterData(current, transactions);

  return (
    <View style={styles.container}>
      <View style={styles.header} />

      <View style={styles.body}>
        <Transactions data={data}>
          <View style={styles.content}>
            <View style={styles.row}>
              <Avatar user={user} />
            </View>
            <View style={styles.row}>
              <Amount service={service} />
            </View>
            <View style={styles.row}>
              <View style={styles.empty} />
            </View>
          </View>
        </Transactions>
      </View>

      <View style={styles.footer}>
        <Numpad service={current.context.numpadRef}>
          <View style={styles.inline}>
            {current.matches('cancel.visible') && (
              <TouchableOpacity style={styles.button} onPress={handleCancel}>
                <Text style={styles.text}>{translate('Cancel')}</Text>
              </TouchableOpacity>
            )}
            {current.matches('submit.visible') && (
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.text}>{translate('Pay')}</Text>
              </TouchableOpacity>
            )}
          </View>
        </Numpad>
      </View>
    </View>
  );
}

export default connect(
  selector,
  actions,
)(Pay);
