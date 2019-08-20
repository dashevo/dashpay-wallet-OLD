/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import { Machine, assign, sendParent } from 'xstate';

const machine = Machine(
  {
    id: 'keyboard',
    initial: 'none',
    context: {
      value: '0',
    },
    states: {
      none: {},
      unknown: {
        on: {
          '': [{ target: 'float', cond: 'isFloat' }, { target: 'integer' }],
        },
      },
      integer: {
        on: {
          NUMBER: {
            actions: ['setNewValue', 'onChanged'],
          },
          DECIMAL_POINT: {
            target: 'float',
            actions: ['setDecimalPoint', 'onChanged'],
          },
        },
      },
      float: {
        on: {
          NUMBER: {
            actions: ['setNewValue', 'onChanged'],
          },
        },
      },
    },
    on: {
      SHOW: {
        target: 'unknown',
      },
      HIDE: {
        target: 'none',
      },
      SET_VALUE: {
        target: 'unknown',
        actions: [
          assign({
            value: (ctx, evt) => evt.value,
          }),
        ],
      },
      BACKSPACE: {
        target: 'unknown',
        actions: ['setBackspace', 'onChanged'],
      },
    },
  },
  {
    actions: {
      setNewValue: assign({
        value: (ctx, evt) => {
          if (ctx.value === '0') {
            return evt.value;
          }
          return ctx.value.concat(evt.value);
        },
      }),
      setDecimalPoint: assign({
        value: ctx => ctx.value.concat('.'),
      }),
      setBackspace: assign({
        value: (ctx) => {
          if (ctx.value.length <= 1) {
            return '0';
          }
          return ctx.value.slice(0, -1);
        },
      }),
      onChanged: sendParent(ctx => ({ type: 'NUMPAD.CHANGED', value: ctx.value })),
    },
    guards: {
      isInteger(ctx) {
        return ctx.value.includes('.') === false;
      },
      isFloat(ctx) {
        return ctx.value.includes('.') === true;
      },
    },
  },
);

export default machine;
