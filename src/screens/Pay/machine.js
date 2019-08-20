/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import {
  Machine, assign, spawn, send, sendParent,
} from 'xstate';

// Internal dependencies
import numpadMachine from 'hooks/Numpad/machine';

const fetchExchangeRate = (code) => {
  const url = `https://api.get-spark.com/${code.toUpperCase()}`;
  return fetch(url)
    .then(response => response.json())
    .then(data => Object.values(data)[0]);
};

const exchangeRateMachine = Machine({
  id: 'exchangeRate',
  initial: 'fetch',
  context: {
    code: 'usd',
    rate: 1,
  },
  states: {
    idle: {
      on: {
        FETCH: 'fetch',
      },
    },
    fetch: {
      invoke: {
        id: 'fetchExchangeRate',
        src: ctx => fetchExchangeRate(ctx.code),
        onDone: {
          target: 'success',
          actions: assign({
            rate: (ctx, evt) => evt.data || ctx.rate,
          }),
        },
        onError: {
          target: 'failure',
        },
      },
    },
    success: {
      entry: sendParent(ctx => ({ type: 'RATE.CHANGED', rate: ctx.rate })),
      after: {
        10000: 'fetch',
      },
    },
    failure: {
      after: {
        10000: 'fetch',
      },
    },
  },
  on: {
    SET_CURRENCY: {
      target: 'fetch',
      actions: assign({
        code: (ctx, evt) => evt.code,
      }),
    },
  },
});

const machine = Machine({
  id: 'pay',
  type: 'parallel',
  context: {
    value: '0',
    values: {
      dash: 0,
      fiat: 0,
      rate: 1,
      code: 'USD',
    },
  },
  states: {
    initializing: {
      initial: 'pending',
      invoke: {
        id: 'exchangeRateMachine',
        src: exchangeRateMachine,
        data: {
          code: ctx => ctx.values.code,
          rate: ctx => ctx.values.rate,
        },
      },
      states: {
        pending: {
          entry: assign({
            numpadRef: ctx => spawn(
              numpadMachine.withContext({
                value: ctx.value,
              }),
            ),
          }),
          on: {
            '': 'success',
          },
        },
        success: {
          on: {
            'DASH.FOCUSED': {
              target: '#pay.editing.dash',
              actions(ctx) {
                const value = String(ctx.values.dash);
                ctx.numpadRef.send({ type: 'SET_VALUE', value });
              },
            },
            'FIAT.FOCUSED': {
              target: '#pay.editing.fiat',
              actions(ctx) {
                const value = String(ctx.values.fiat);
                ctx.numpadRef.send({ type: 'SET_VALUE', value });
              },
            },
            'RATE.CHANGED': {
              actions: assign({
                values: (ctx, evt) => ({
                  ...ctx.values,
                  rate: evt.rate,
                }),
              }),
            },
            'CURRENCY.CHANGED': {
              actions: send((ctx, evt) => ({ type: 'SET_CURRENCY', code: evt.code }), {
                to: 'exchangeRateMachine',
              }),
            },
          },
        },
      },
    },
    editing: {
      initial: 'none',
      states: {
        none: {
          entry: [
            send('HIDE', {
              to: ctx => ctx.numpadRef,
            }),
          ],
          on: {
            'RATE.CHANGED': {
              actions: assign({
                values: (ctx, evt) => ({
                  ...ctx.values,
                  fiat: ctx.values.dash * evt.rate,
                  rate: evt.rate,
                }),
              }),
            },
          },
        },
        dash: {
          entry: send('SHOW', {
            to: ctx => ctx.numpadRef,
          }),
          on: {
            'NUMPAD.CHANGED': {
              actions: assign({
                values: (ctx, evt) => ({
                  ...ctx.values,
                  dash: evt.value,
                  fiat: evt.value * ctx.values.rate,
                }),
              }),
            },
            'RATE.CHANGED': {
              actions: assign({
                values: (ctx, evt) => ({
                  ...ctx.values,
                  fiat: ctx.values.dash * evt.rate,
                  rate: evt.rate,
                }),
              }),
            },
          },
        },
        fiat: {
          entry: send('SHOW', {
            to: ctx => ctx.numpadRef,
          }),
          on: {
            'NUMPAD.CHANGED': {
              actions: assign({
                values: (ctx, evt) => ({
                  ...ctx.values,
                  dash: evt.value / ctx.values.rate,
                  fiat: evt.value,
                }),
              }),
            },
            'RATE.CHANGED': {
              actions: assign({
                values: (ctx, evt) => ({
                  ...ctx.values,
                  dash: ctx.values.fiat / evt.rate,
                  rate: evt.rate,
                }),
              }),
            },
          },
        },
      },
      on: {
        'CURRENCY.CHANGED': {
          actions: assign({
            values: (ctx, evt) => ({
              ...ctx.values,
              code: evt.code,
            }),
          }),
        },
      },
    },
    validating: {
      initial: 'idle',
      states: {
        idle: '',
      },
    },
    cancel: {
      initial: 'visible',
      states: {
        visible: {},
      },
      on: {
        CANCEL: {
          target: '#pay.editing.none',
        },
      },
    },
    submit: {
      initial: 'visible',
      states: {
        visible: {},
      },
      on: {
        RESET: {
          target: '#pay.editing.none',
          actions: assign({
            values: ctx => ({
              ...ctx.values,
              dash: 0,
              rate: 0,
            }),
          }),
        },
        SUBMIT: {
          actions: ['onSubmit'],
        },
      },
    },
  },
});

export default machine;
